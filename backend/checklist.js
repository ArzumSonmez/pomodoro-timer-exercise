function saveToLocalStorage() {
  const listArray = [];
  const tasks = document.querySelectorAll('.newTask');

  tasks.forEach(task => {
    const taskObj = {
      text: task.querySelector('span').textContent,
      checked: task.querySelector('input').checked
    };
    listArray.push(taskObj);
  });

  localStorage.setItem("tasks", JSON.stringify(listArray));
}

function loadTasks() {
  let listArray = [];
  try {
    listArray = JSON.parse(localStorage.getItem("tasks")) || [];
  } catch (e) {
    console.error("Error parsing tasks from localStorage:", e);
  }

  const taskList = document.getElementById('task-list');
  
  listArray.forEach(taskObj => {
    let newTask = document.createElement('li');
    newTask.classList.add('newTask');

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('list-checkbox');
    checkBox.checked = taskObj.checked;

    let taskText = document.createElement('span');
    taskText.textContent = taskObj.text;

    if (taskObj.checked) {
      newTask.style.textDecoration = "line-through";
      newTask.style.color = "#888";
    }

    newTask.append(checkBox, taskText);

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-task-button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
      newTask.remove();
      saveToLocalStorage();
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
  });
}

document.addEventListener('DOMContentLoaded', loadTasks);

let clicked = document.querySelector('.add-task-button');
clicked.addEventListener('click', () => {
  let task = document.getElementById('input-place').value;

  if (task) {
    let newTask = document.createElement('li');
    newTask.classList.add('newTask');

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('list-checkbox');

    let taskText = document.createElement('span');
    taskText.textContent = task;

    newTask.append(checkBox, taskText);
    newTask.addEventListener("change", (event) => {
      if (event.target.checked) {
        newTask.style.textDecoration = "line-through";
        newTask.style.color = "#888";
      } else {
        newTask.style.textDecoration = "none"
        newTask.style.color = "";
      }
      saveToLocalStorage();
    });

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-task-button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
      newTask.remove();
      saveToLocalStorage();
    });

    newTask.appendChild(deleteButton);

    let taskList = document.getElementById('task-list');
    taskList.appendChild(newTask);

    document.getElementById('input-place').value = '';
    saveToLocalStorage();
  }
});
