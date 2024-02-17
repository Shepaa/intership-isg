import React, { useEffect, useState } from "react";
import { useColumns } from "./hooks/useColumn";
import { postsAPI } from "../../API/server";
import { CustomTable } from "../../components/CustomTable";

export function PostList() {
    const columns = useColumns();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResponse = await postsAPI.getList();
                setPosts(postsResponse);
            } catch (error) {
                console.error('Failed to fetch posts:', error.message);
            }
        };

        fetchPosts();
    }, []);


    return (
        <CustomTable
            path="post"
            columns={columns}
            dataSource={posts}
            pagination={{ pageSize: 5 }}
        />
    );
}
