import {Route, Routes} from "react-router-dom";
import {TodoList} from "./TodoList";
import {TodoForm} from "./TodoForm";
import {NotFound} from "../NoutFound/NotFoundPage";
import {ShowTodo} from "./ShowTodo";


export function TodoApp() {
    return (
        <>
            <Routes>
                <Route path='/list' element={<TodoList/>}/>
                <Route path='/edit' element={<TodoForm/>}/>
                <Route path='/show/:todoId' element={<ShowTodo/>}/>
                <Route path='/edit/:todoId' element={<TodoForm/>}/>
                <Route path='/*' element={<NotFound/>}/>

            </Routes>
        </>)
}