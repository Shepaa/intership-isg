import {useColumns} from "./hooks/useColumn";
import {Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {actionGetApiList} from "./store/thunk";

export function TodoList() {
    const dispatch = useDispatch()
    const column = useColumns()
    const todosList = useSelector(state => state.todos.todosList)

    useEffect(() => {
        dispatch(actionGetApiList())
    }, []);

    return (
        <Table
            dataSource={todosList}
            columns={column}
            rowKey='id'>
        </Table>
    )
}