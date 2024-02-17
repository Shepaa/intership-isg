import {Route, Routes} from "react-router-dom";
import {PostList} from "./PostList";
import {ShowPost} from "./ShowPost";
import {NotFound} from "../NoutFound/NotFoundPage";

export function PostsApp() {
    return (
        <>
            <Routes>
                <Route path='/list' element={<PostList/>}/>
                <Route path='/show/:postId' element={<ShowPost/>}/>
                <Route path='/*' element={<NotFound/>}/>
            </Routes>
        </>)
}