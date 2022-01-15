import getTodos from './getTodos.js';

const removeTodos = (todo, todos) => {
  const newArr = todos.filter((x) => x.index !== Number(todo.id));
  const todoList = document.querySelector('.todoList');
  const reset = newArr.map((e, i) => {
    e.index = i + 1;
    return e;
  });
  todoList.textContent = '';
  localStorage.setItem('todos', JSON.stringify(reset));
  getTodos();
};

export default removeTodos;
