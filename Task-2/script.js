const addBtn = document.getElementById('add-task-btn');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.classList.add('task-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });

  const span = document.createElement('span');
  span.textContent = taskText;

  const btnGroup = document.createElement('div');
  btnGroup.classList.add('task-buttons');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remove';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  btnGroup.appendChild(deleteBtn);
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(btnGroup);
  taskList.appendChild(li);

  input.value = '';
}
