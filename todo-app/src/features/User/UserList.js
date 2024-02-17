import React, {useState, useEffect} from 'react';
import {userAPI} from '../../API/server';
import {CustomTable} from "../../components/CustomTable";
import {useColumns} from "./hooks/useColumn";

export function UserList() {
    const [users, setUsers] = useState([]);
    const column = useColumns()

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userList = await userAPI.getList();
                setUsers(userList);
            } catch (error) {
                console.error('Failed to fetch users:', error.message);
            }
        };

        fetchUsers();
    }, []);

    return (
        <CustomTable
            path="user"
            columns={column}
            dataSource={users}
            pagination={{pageSize: 5}}
        />
    );
}
