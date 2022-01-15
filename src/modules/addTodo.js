import getTodos from './getTodos.js';

const addTodo = (e) => {
  let todos = [];
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoInput = document.querySelector('.todo-input');
  const todoList = document.querySelector('.todoList');
  e.preventDefault();
  const todo = {
    description: todoInput.value,
    index: todos.length + 1,
    completed: false,
  };
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
  todoInput.value = '';
  todoList.innerHTML = '';
  getTodos();
};

export default addTodo;
