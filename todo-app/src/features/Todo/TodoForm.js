import {Button} from "antd";
import {Link} from "react-router-dom";

export function TodoForm() {
    return (
        <>
            <div>todo form</div>
            <Link to={'/todo/list'}>
                <Button>Todos</Button>
            </Link></>
    );
}