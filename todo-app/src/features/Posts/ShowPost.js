import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsAPI} from "../../API/server";
import {Button, Card, Spin} from "antd";

export function ShowPost() {
    const {postId} = useParams();
    if (!postId) throw new Error("Incorrect ID");
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postResponse = await postsAPI.getOne(postId);
                setPost(postResponse);
            } catch (error) {
                console.error('Failed to fetch post:', error.message);
            }
        };

        fetchPost();
    }, [postId]);

    return (
        <>
            <Link to={'/post/list'}>
                <Button>Posts</Button>
            </Link>
            <Card
                title={`Post with ${postId} id`}
                bordered={false}
                style={{
                    width: 300,
                }}
            >
                {post ? (
                    <>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </>
                ) : (
                    <Spin/>
                )}
            </Card>
        </>
    )
}
