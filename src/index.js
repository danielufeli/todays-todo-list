import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import getTodos from './modules/getTodos.js';
import addTodo from './modules/addTodo.js';
import deleteCheckedTodo from './modules/deleteCheckedTodo.js';
import clearCompletedTask from './modules/clearCompletedTask.js';
import updateTaskCall from './modules/updateTaskCall';

const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todoList');
const clearTask = document.querySelector('#clear');

todoInput.addEventListener('change', addTodo);
todoList.addEventListener('click', deleteCheckedTodo);
todoList.addEventListener('change', updateTaskCall);
clearTask.addEventListener('click', clearCompletedTask);
document.addEventListener('DOMContentLoaded', getTodos);
