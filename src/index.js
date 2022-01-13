import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import statusUpdate from './updateTodos.js';
import updateTask from './updateTask.js';

const component = () => {
  let todos = [];
  const todoInput = document.querySelector('.todo-input');
  const todoList = document.querySelector('.todoList');

  const saveLocalTodos = (todo) => {
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getTodos = () => {
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.map((todo) => {
      const newTodo = document.createElement('li');
      newTodo.classList.add('task');
      newTodo.setAttribute('id', todo.index);
      if (todo.completed === true) newTodo.classList.add('completed');
      const completedCheck = document.createElement('INPUT');
      completedCheck.setAttribute('type', 'checkbox');
      completedCheck.setAttribute('id', todo.index);
      if (todo.completed === true) completedCheck.setAttribute('checked', true);
      completedCheck.classList.add('check');
      newTodo.appendChild(completedCheck);
      const textDescription = document.createElement('INPUT');
      textDescription.setAttribute('type', 'text');
      textDescription.setAttribute('value', todo.description);
      textDescription.classList.add('task-des');
      textDescription.setAttribute('id', todo.index);
      newTodo.appendChild(textDescription);
      const moveButton = document.createElement('button');
      moveButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
      moveButton.classList.add('trash-btn');
      newTodo.appendChild(moveButton);
      todoList.appendChild(newTodo);
      return todo;
    });
  };

  const addTodo = (e) => {
    e.preventDefault();
    const obj = {
      description: todoInput.value,
      index: todos.length + 1,
      completed: false,
    };
    saveLocalTodos(obj);
    todoInput.value = '';
    todoList.innerHTML = '';
    getTodos();
  };

  const removeLocalTodos = (todo) => {
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    const m = todos.filter((x) => x.index.toString() !== todo.id);
    const reset = m.map((e, i) => {
      e.index = i + 1;
      return e;
    });
    todo.remove();
    localStorage.setItem('todos', JSON.stringify(reset));
  };

  const deleteCheck = (e) => {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
      const todo = item.parentElement;
      removeLocalTodos(todo);
    }

    if (item.classList[0] === 'check') {
      const todo = item.parentElement;
      const checkbox = todo.querySelector('input');
      statusUpdate(checkbox.id);
      todo.classList.toggle('completed');
    }
  };

  const updateTaskCall = (e) => {
    const item = e.target;
    if (item.classList[0] === 'task-des') {
      const task = item.value;
      const taskid = item.id;
      updateTask(task, taskid);
    }
  };

  document.addEventListener('DOMContentLoaded', getTodos);
  todoInput.addEventListener('change', addTodo);
  todoList.addEventListener('click', deleteCheck);
  todoList.addEventListener('change', updateTaskCall);

  document.getElementById('clear').addEventListener('click', () => {
    const oldTodos = JSON.parse(localStorage.getItem('todos'));
    const newTodos = oldTodos.filter((i) => !i.completed);
    const reset1 = newTodos.map((e, i) => {
      e.index = i + 1;
      return e;
    });
    localStorage.setItem('todos', JSON.stringify(reset1));
    todoList.innerHTML = '';
    getTodos();
  });
};

document.body.appendChild(component());
