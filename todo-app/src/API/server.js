import {API} from "./API";
import {postsURL, todosURL, usersURL} from "./URL";

export const userAPI = new API(usersURL)
export const postsAPI = new API(postsURL)
export const todoAPI = new API(todosURL)