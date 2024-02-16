import React, { Component } from "react";
import styles from "./App.module.css";
import { clearLocalStorage, saveTodosToLocalStorage } from "./utilities/localStorageFunction";

class App extends Component {
    constructor(props) {
        super(props);
        const storedTodos = localStorage.getItem("todos");
        this.state = {
            todos: storedTodos ? JSON.parse(storedTodos) : [],
            value: "",
            editing: false,
            currentid: "",
            currentValue: ""
        };
    }

    componentDidMount() {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            this.setState({ todos: JSON.parse(storedTodos) });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            saveTodosToLocalStorage(this.state.todos);
        }
    }

    componentWillUnmount() {
        clearLocalStorage("todos");
    }

    onChange = (e) => {
        this.setState({ value: e.target.value });
    };

    onAddTask = (e) => {
        e.preventDefault();

        const obj = {
            name: this.state.value,
            id: Date.now()
        };
        if (this.state.value !== "") {
            this.setState((prevState) => ({
                todos: prevState.todos.concat(obj),
                value: ""
            }));
        }
    };

    onDeleteTask = (itemId) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => todo.id !== itemId)
        }));
    };

    onEditTodo = (id, newValue) => {
        this.setState((prevState) => ({
            todos: prevState.todos.map((todo) =>
                todo.id === id ? { ...todo, name: newValue } : todo
            )
        }));
    };

    onSubmitEditTodo = (e) => {
        e.preventDefault();

        this.onEditTodo(this.state.currentid, this.state.currentValue);
        this.setState({ editing: false });
    };

    onToggleEdit = (todo) => {
        this.setState({ editing: true, currentid: todo.id, currentValue: todo.name });
    };

    onEditInputChange = (e) => {
        this.setState({ currentValue: e.target.value });
    };

    render() {
        const stylist = this.state.todos.map((todo) => (
            <li className={styles.todo_item} key={todo.id}>
                {todo.name}
                <button onClick={() => this.onToggleEdit(todo)}>Edit</button>
                <button onClick={() => this.onDeleteTask(todo.id)}>Remove</button>
            </li>
        ));

        return (
            <>
                <div className={styles.App}>
                    {this.state.editing === false ? (
                        <form className={styles.todo_form} onSubmit={this.onAddTask}>
                            <input
                                className={styles.todo_input}
                                placeholder="type your task"
                                value={this.state.value}
                                onChange={this.onChange}
                            />
                            <button className={styles.todo_button} onClick={this.onAddTask}>Add Item</button>
                        </form>
                    ) : (
                        <form className={styles.todo_form} onSubmit={this.onSubmitEditTodo}>
                            <input
                                className={styles.todo_input}
                                placeholder="edit your task"
                                value={this.state.currentValue}
                                name={this.state.currentValue}
                                onChange={this.onEditInputChange}
                            />
                            <button className={styles.todo_button} onClick={this.onSubmitEditTodo}>Update Item</button>
                        </form>
                    )}

                    <ul className={styles.todo_wrapper}>{stylist}</ul>
                </div>
            </>
        );
    }
}

export default App;
