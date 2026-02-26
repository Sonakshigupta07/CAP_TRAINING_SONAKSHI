const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // create li
  const li = document.createElement("li");

  // create span for text
  const span = document.createElement("span");
  span.innerText = taskText;

  // mark complete on click
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});