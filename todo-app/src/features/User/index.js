import {Route, Routes} from "react-router-dom";
import {UserList} from "./UserList";
import {ShowUser} from "./ShowUser";
import {NotFound} from "../NoutFound/NotFoundPage";

export function UserApp() {
    return (
        <>
            <Routes>
                <Route path='/list' element={<UserList/>}/>
                <Route path='/show/:userId' element={<ShowUser/>}/>
                <Route path='/*' element={<NotFound/>}/>
            </Routes>
        </>
    )
}