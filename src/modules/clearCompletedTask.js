import getTodos from './getTodos.js';

const clearCompletedTask = () => {
  const todoList = document.querySelector('.todoList');
  const oldTodos = JSON.parse(localStorage.getItem('todos'));
  const newTodos = oldTodos.filter((i) => !i.completed);
  const reset1 = newTodos.map((e, i) => {
    e.index = i + 1;
    return e;
  });
  localStorage.setItem('todos', JSON.stringify(reset1));
  todoList.innerHTML = '';
  getTodos();
};

export default clearCompletedTask;
