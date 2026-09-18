let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("taskList");

addBtn.onclick = function() {

    if (input.value == "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let text = document.createElement("span");
    text.innerText = input.value;

    text.onclick = function() {
        text.classList.toggle("task-done");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";

    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(text);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
};
