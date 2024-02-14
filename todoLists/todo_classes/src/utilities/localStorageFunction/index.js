
export function saveTodosToLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

export function clearLocalStorage() {
    localStorage.removeItem("todos");
}
