import React, {useEffect} from "react";
import {useColumns} from "./hooks/useColumn";
import {CustomTable} from "../../components/CustomTable";
import todoStore from "./Store";
import {observer} from "mobx-react";

export const TodoList = observer(() => {
    const column = useColumns()
    useEffect(() => {
        todoStore.fetchTodos();
    }, []);

    return (
        <CustomTable
            path="todo"
            columns={column}
            dataSource={todoStore.todos}
            pagination={{pageSize: 5}}
        />
    );
});