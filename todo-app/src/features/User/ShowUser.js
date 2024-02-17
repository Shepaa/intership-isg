import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {userAPI} from "../../API/server";
import {Button, Card, Spin} from "antd";

export function ShowUser() {
    const {userId} = useParams();
    if (!userId) throw new Error("Incorrect ID");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postResponse = await userAPI.getOne(userId);
                setUser(postResponse);
            } catch (error) {
                console.error('Failed to fetch post:', error.message);
            }
        };

        fetchPost();
    }, [setUser]);
    return (
        <>
            <Link to={'/user/list'}>
                <Button>Users</Button>
            </Link>
            <Card
                title={`user with ${userId} id`}
                bordered={false}
                style={{
                    width: 300,
                }}
            >
                {user ? (
                    <>
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </>
                ) : (
                    <Spin/>
                )}
            </Card>
        </>
    )
}