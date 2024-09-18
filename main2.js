const addtaskbutton = document.getElementById("add-task");
const newtaskinput = document.getElementById("new-task-input");
const taskList = document.getElementById("task-list");

addtaskbutton.addEventListener("click", () => {
  addtask();
});

function addtask() {
  const taskText = newtaskinput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.className = "task";


  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";

  const editButton = document.createElement("button");
  editButton.textContent = "edit";
  editButton.className = "edit";
   


  
  editButton.addEventListener("click", () => {
    const currentText = listItem.querySelector("span").textContent;
    const newTaskText = prompt("Edit your task:", currentText);
    if (newTaskText && newTaskText.trim() !== "") {
      listItem.querySelector("span").textContent = newTaskText.trim();
    }
  });

  listItem.innerHTML = `<span>${taskText}</span> `;
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);
  taskList.appendChild(listItem);

  newtaskinput.value = "";

  deleteButton.addEventListener("click", function () {
    taskList.removeChild(listItem);
  });
}

