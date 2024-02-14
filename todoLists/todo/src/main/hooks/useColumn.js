import {useDispatch} from "react-redux";
import {Button, Checkbox, Space} from "antd";
import {editItem} from "../store/reducer";
import {actionRemoveItem} from "../store/thunk";

export function useColumns() {
    const dispatch = useDispatch()

    return [
        {
            title: 'title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'completed',
            dataIndex: 'completed',
            key: 'completed',
            render: (completed) => <Checkbox checked={completed}></Checkbox>
        }, {
            title: 'Actions',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type='primary' onClick={() => {
                        dispatch(editItem(record))
                    }}>Edit</Button>
                    <Button type='primary' onClick={() => dispatch(actionRemoveItem(record.id))}>Delete</Button>
                </Space>
            ),
        },
    ]
}