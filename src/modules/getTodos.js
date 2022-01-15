const getTodos = () => {
  let todoList = document.querySelector('.todoList');

  let todos = [];
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
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
  }
};
export default getTodos;
