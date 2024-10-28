window.addEventListener("load", () => {
  renderTasks();
});

const taskList = [];
const buttonAddTask = document.querySelector(".btn-add-task");
const listTask = document.querySelector(".list");
const inputTask = document.querySelector(".task");
const error = document.querySelector(".error");

buttonAddTask.addEventListener("click", () => {

  if (inputTask.value == "") {
    error.style.display = "flex";
    error.textContent = "Input Empty";
    setTimeout(() => {
      error.style.display = "none";
    }, 2000);
    return;
  }else if (taskList.length == 5) {
    error.style.display = "flex";
    error.textContent = "List Full";
    setTimeout(() => {
      error.style.display = "none";
    }, 2000);
    return;

    }else{
        taskList.push(inputTask.value);
        inputTask.value = "";
        renderTasks();
    }
});


function renderTasks() {
  if (taskList.length == 0) {
    let listEmpty = document.createElement("p");
    listEmpty.textContent = "List Empty";
    listTask.appendChild(listEmpty);
  } else if (taskList.length > 0) {
    listTask.innerHTML = "";
    taskList.forEach((task, index) => {
      let taskContainer = document.createElement("div");
      let taskTitle = document.createElement("p");
      let deleteTask = document.createElement("p");
      taskContainer.classList.add("task-container");
      deleteTask.classList.add("delete");

      taskTitle.textContent = task;
      deleteTask.textContent = "X";

      taskContainer.appendChild(taskTitle);
      taskContainer.appendChild(deleteTask);

      deleteTask.addEventListener("click", () => {
        taskList.splice(index, 1);
        console.log(taskList);
        listTask.removeChild(taskContainer);
        renderTasks();
      });

      listTask.appendChild(taskContainer);
    });
  }
}
