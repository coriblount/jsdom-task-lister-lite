document.addEventListener("DOMContentLoaded", () => {
  // your code here
// initialize task list
let taskList = newTask();
//grab DOM elements as needed
//form input fields
let newTaskForm = document.getElementById("create-task-form");
let newTaskDescription = document.getElementById("new-task-description");
let newTaskPriority = document.getElementById("new-task-priority");

//list where task will live on dom
let taskUl = document.getElementById("tasks");

let renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
//attach event listeners



newTaskForm.addEventListener("submit", (e)) {
  e.preventDefault();
  taskList.createNewTask(newTaskDescription.value);
  // reset form
  e.target.reset();
  renderApp();
});

taskUl.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    taskList.deleteTask(e.target.dataset.description);
    renderApp();
  }
 });
}); 
