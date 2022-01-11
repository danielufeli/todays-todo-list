import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';

function component() {
  const data = [
    {
      index: 1,
      description: 'Buy a Laptop',
      completed: false,
    },
    {
      index: 2,
      description: 'Attend AOT LAgos Event',
      completed: false,
    },
    {
      index: 3,
      description: 'Work on Javascript',
      completed: false,
    },
  ];
  const ul = document.getElementById('list');

  let task = '';

  if (data.length === 0) {
    document.querySelector('#task').innerHTML = '<p>No Record Found</p>';
  }
  data.map((e) => {
    task += `<li class="task"><input type="checkbox" id="task-${e.index}" />
          <input type="text" value="${e.description}" />
          <span>
            <i class="fas fa-ellipsis-v"></i>
          </span></li>`;
    return task;
  });
  ul.innerHTML = task;
}

document.body.appendChild(component());
