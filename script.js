const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function createTask(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '✕';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if(taskText) {
    createTask(taskText);
    taskInput.value = '';
  }
});
