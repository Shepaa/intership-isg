import {action, makeObservable, observable} from "mobx";
import {todoAPI} from "../../../API/server";

class TodoStore {
    todos = [];

    constructor() {
        makeObservable(this, {
            todos: observable,
            fetchTodos: action,
            addTodo: action,
            updateTodo: action,
            deleteTodo: action
        });
    }

    async fetchTodos() {
        try {
            const todoList = await todoAPI.getList();
            this.todos = todoList;
        } catch (error) {
            console.error('Failed to fetch todos:', error.message);
        }
    }

    async fetchTodoById(id) {
        try {
            this.todos = await todoAPI.getOne(id)
        } catch (error) {
            console.error('Failed to fetch todo:', error.message);
        }
    }

    async addTodo(todo) {
        try {
            const newTodo = await todoAPI.create(todo);
            this.todos.push(newTodo);
        } catch (error) {
            console.error('Failed to add todo:', error.message);
        }
    }

    async updateTodo(id, updatedTodo) {
        try {
            await todoAPI.update(id, updatedTodo);
            const index = this.todos.findIndex(todo => todo.id === id);
            if (index !== -1) {
                this.todos[index] = updatedTodo;
            }
        } catch (error) {
            console.error('Failed to update todo:', error.message);
        }
    }

    async deleteTodo(id) {
        try {
            await todoAPI.delete(id);
            this.todos = this.todos.filter(todo => todo.id !== id);
        } catch (error) {
            console.error('Failed to delete todo:', error.message);
        }
    }
}

const todoStore = new TodoStore();
export default todoStore;