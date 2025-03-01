let clicked = document.querySelector('.add-task-button');
clicked.addEventListener('click', () => 
  {
    let task = document.getElementById('input-place')
    .value;

    console.log(task);  

    if(task)
    {
    let newTask = document.createElement('li');
    newTask.classList.add('newTask');
    newTask.textContent = task;

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('list-checkbox');

    newTask.addEventListener("change", (event) => {
      if (event.target.checked) {
        newTask.style.textDecoration = "line-through";
        newTask.style.color = "#888";
      } else {
        newTask.style.textDecoration = "none"
        newTask.style.color = "";
      }
    });
    

    newTask.prepend(checkBox); 

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-task-button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
      newTask.remove(); // Removes the task when the delete button is clicked
    });

    // Append the delete button to the task item (li)
    newTask.appendChild(deleteButton);

    let taskList = document.getElementById('task-list');
    taskList.appendChild(newTask);

    document.getElementById('input-place').value = '';  
  }
});
