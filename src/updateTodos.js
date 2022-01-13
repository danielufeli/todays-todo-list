const statusUpdate = (index) => {
  const todos = JSON.parse(localStorage.getItem('todos'));
  todos.forEach((todo) => {
    if (todo.index.toString() === index) {
      if (todo.completed === true) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    }
    return todo;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};
export default statusUpdate;
