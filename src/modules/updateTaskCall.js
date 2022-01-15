import updateTask from './updateTask.js';

const updateTaskCall = (e) => {
  const item = e.target;
  if (item.classList[0] === 'task-des') {
    const task = item.value;
    const taskid = item.id;
    updateTask(task, taskid);
  }
};

export default updateTaskCall;
