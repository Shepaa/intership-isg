import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {todoAPI} from "../../API/server";
import {Button, Card, Checkbox, Spin} from "antd";

export function ShowTodo() {
    const {todoId} = useParams();
    if (!todoId) throw new Error("Incorrect ID");
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postResponse = await todoAPI.getOne(todoId);
                setTodo(postResponse);
            } catch (error) {
                console.error('Failed to fetch post:', error.message);
            }
        };

        fetchPost();
    }, [todoId]);

    return (
        <>
            <Link to={'/todo/list'}>
                <Button>Todos</Button>
            </Link>
            <Card
                title={`Todo with ${todoId} id`}
                bordered={false}
                style={{
                    width: 300,
                }}
            >
                {todo ? (
                    <>
                        <p>{todo.title}</p>
                        <p><Checkbox checked={todo.completed}/> {todo.completed ? "Completed" : "Non completed"}</p>
                    </>
                ) : (
                    <Spin/>
                )}
            </Card>
        </>
    )
}