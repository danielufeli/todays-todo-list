import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import updateTask from './modules/updateTask.js';
import getTodos from './modules/getTodos';
import addTodo from './modules/addTodo';
import deleteCheckedTodo from './modules/deleteCheckedTodo';
import clearCompletedTask from './modules/clearCompletedTask';

const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todoList');
const clearTask = document.querySelector('#clear');

const updateTaskCall = (e) => {
  const item = e.target;
  if (item.classList[0] === 'task-des') {
    const task = item.value;
    const taskid = item.id;
    updateTask(task, taskid);
  }
};

todoInput.addEventListener('change', addTodo);
todoList.addEventListener('click', deleteCheckedTodo);
todoList.addEventListener('change', updateTaskCall);
clearTask.addEventListener('click', clearCompletedTask);
document.addEventListener('DOMContentLoaded', getTodos());
