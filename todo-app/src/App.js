import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {UserApp} from "./features/User";
import {PostsApp} from "./features/Posts";
import {NotFound} from "./features/NoutFound/NotFoundPage";
import {TodoApp} from "./features/Todo";
import {BasePage} from "./components/BasePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BasePage/>}/>
                <Route  element={<Layout/>}>
                    <Route path="/user/*" element={<UserApp/>}/>
                    <Route path="/post/*" element={<PostsApp/>}/>
                    <Route path="/todo/*" element={<TodoApp/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
