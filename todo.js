let taskList = [
  {
    item: "Buy Groceries",
    dueDate: "2024-06-10",
  },
  {
    item: "Attend Meeting",
    dueDate: "2024-06-11",
  },
];

let taskInput = document.querySelector("#task-input");
let addTaskBtn = document.querySelector(".addTask-btn");
let dateInput = document.querySelector("#date-input");
displayTasks();
addTaskBtn.addEventListener("click", () => {
  let inputValue, dateValue;
  
  if (!taskInput.value || !dateInput.value) {
    alert("Please fill the complete form");
  } else {
    inputValue = taskInput.value;
    dateValue = dateInput.value;
  }

  if (inputValue && dateValue) {
    let newTask = {
      item: taskInput.value,
      dueDate: dateInput.value,
    };
    taskList.push(newTask);
    displayTasks();
    clearInput();
  }
});

function displayTasks() {
  console.log(taskList);
  let taskcontainer = document.querySelector(".task-container");
  let newHtml = "";
  for (let i = 0; i < taskList.length; i++) {
    let { item, dueDate } = taskList[i];
    newHtml += `
        
        <span id="item">${item}</span>
        <span id="date">${dueDate}</span>
        <button class='btn-delete' onclick="deleteTask(${i})">Delete</button>
        
        
      `;
  }
  taskcontainer.innerHTML = newHtml;
}

function clearInput() {
  taskInput.value = "";
  dateInput.value = "";
}
function deleteTask(index) {
  taskList.splice(index, 1);
  displayTasks();
}
