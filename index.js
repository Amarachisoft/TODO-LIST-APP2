const todoList = document.getElementById("todo-list");
const newTodoInput = document.getElementById("new-todo");
const addTodoButton = document.getElementById("add-todo");

let todos = [];

addTodoButton.addEventListener("click", () => {
  const newTodo = newTodoInput.value.trim();
  if (newTodo) {
    todos.push({ text: newTodo, completed: false });
    renderTodos();
    newTodoInput.value = "";
  }
});

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("flex", "items-center", "mb-2");
    todoItem.innerHTML = `
            <input type="checkbox" class="mr-2" ${
              todo.completed ? "checked" : ""
            }>
            <span class="${todo.completed ? "line-through" : ""}">${
      todo.text
    }</span>
            <button class="ml-auto text-red-500 hover:text-red-700">Delete</button>
        `;
    todoList.appendChild(todoItem);

    // Add event listeners for checkbox and delete button
    todoItem
      .querySelector('input[type="checkbox"]')
      .addEventListener("change", () => {
        todos[index].completed = !todos[index].completed;
        renderTodos();
      });
    todoItem.querySelector("button").addEventListener("click", () => {
      todos.splice(index, 1);
      renderTodos();
    });
  });
}
