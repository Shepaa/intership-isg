    import {Table} from "antd";
    import {Link} from "react-router-dom";

    function handle(record) {
        return <Link to={`/post/edit/${record.id}`}/>
    }

    export function CustomTable({columns, dataSource, pagination, path}) {
        return (
            <>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    rowKey='id'
                    pagination={pagination}
                    expandedRowRender={(record) => (
                        <Link to={`/${path}/show/${record.id}`}>Show information</Link> // Компонент Link в качестве ссылки на страницу редактирования
                    )}
                />
            </>
        )
    }