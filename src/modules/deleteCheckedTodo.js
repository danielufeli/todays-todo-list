import removeTodos from './removeTodos';
import statusUpdate from './updateTodos.js';

const deleteCheckedTodo = (e) => {
  let todos = JSON.parse(localStorage.getItem('todos'));
  const item = e.target;

  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    removeTodos(todo, todos);
  }

  if (item.classList[0] === 'check') {
    const todo = item.parentElement;
    const checkbox = todo.querySelector('input');
    statusUpdate(checkbox.id);
    todo.classList.toggle('completed');
  }
};

export default deleteCheckedTodo;
