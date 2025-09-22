let taskList = JSON.parse(localStorage.getItem("Array")) || [
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

if (!taskInput.value || !dateInput.value) {
    alert("Please fill the complete form");
    return; // stop execution agar empty hai
  }

  let newTask = {
    item: taskInput.value,
    dueDate: dateInput.value,
  };

  taskList.push(newTask);
  saveTodo(taskList);
  displayTasks();
  clearInput();
  
});

function displayTasks() {
  let storedTaskList = getTodo();
  let taskcontainer = document.querySelector(".task-container");
  let newHtml = "";
  for (let i = 0; i < storedTaskList.length; i++) {
    let { item, dueDate } = storedTaskList[i];
    newHtml += `
        
        <span id="item">${item}</span>
        <span id="date">${dueDate}</span>
        <button class='btn-delete' onclick="deleteTask(${
          (i)
        })">Delete</button>
      `;
  }
  taskcontainer.innerHTML = newHtml;
}
function getTodo() {
  let getTodoList = JSON.parse(localStorage.getItem("Array"));
  return getTodoList;
}
function saveTodo(setTodo) {
  localStorage.setItem("Array", JSON.stringify(setTodo));
}
function clearInput() {
  taskInput.value = "";
  dateInput.value = "";
}
function deleteTask(index) {
  let getTodoList  = getTodo();
  getTodoList.splice(index, 1);
  saveTodo(getTodoList );
  taskList= getTodoList ;
  displayTasks();
}
