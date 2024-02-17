import {Link} from "react-router-dom";
import {Button, Space} from "antd";
import todoStore from "../Store";

export function useColumns() {
    return [
        {title: 'Title', dataIndex: 'title', key: 'title'},
        {title: 'Description', dataIndex: 'description', key: 'description'},
        {title: 'Due Date', dataIndex: 'dueDate', key: 'dueDate'},
        {
            title: 'Actions',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/todo/edit/${record.id}`}>
                        <Button type='primary'>
                            Edit
                        </Button>
                    </Link>
                    <Button
                        type="primary"
                        danger onClick={() => {
                        todoStore.deleteTodo(record.id)
                    }}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];
}