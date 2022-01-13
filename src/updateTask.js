const updateTask = (task, index) => {
  const todos = JSON.parse(localStorage.getItem('todos'));
  todos.forEach((todo) => {
    if (todo.index.toString() === index) {
      todo.description = task;
    }
    return todo;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};
export default updateTask;
