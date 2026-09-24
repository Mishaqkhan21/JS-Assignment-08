let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let searchInput = document.getElementById("searchInput");

let tasks = [];


addBtn.onclick = function () {

    let task = taskInput.value.trim();

    if (task == "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(task);
    taskInput.value = "";

    showTasks();
};


taskInput.onkeydown = function (e) {

    if (e.key == "Enter") {
        addBtn.click();
    }
};


function showTasks() {

    taskList.innerHTML = "";

    let search = searchInput.value.toLowerCase();

    for (let i = 0; i < tasks.length; i++) {

        if (!tasks[i].toLowerCase().includes(search)) {
            continue;
        }

        let li = document.createElement("li");

        let text = document.createElement("span");
        text.innerText = tasks[i];
        text.className = "task-text";

        
        text.onclick = function () {
            text.classList.toggle("done");
        };


        let buttons = document.createElement("div");
        buttons.className = "buttons";

        let edit = document.createElement("button");
        edit.className = "edit";
        edit.innerHTML = '<i class="fa-solid fa-pen"></i>';

        edit.onclick = function () {

            let newTask = prompt("Edit task:", tasks[i]);

            if (newTask != null && newTask.trim() != "") {
                tasks[i] = newTask.trim();
                showTasks();
            }
        };

        let deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

        deleteBtn.onclick = function () {
            tasks.splice(i, 1);
            showTasks();
        };

        buttons.appendChild(edit);
        buttons.appendChild(deleteBtn);

        li.appendChild(text);
        li.appendChild(buttons);

        taskList.appendChild(li);
    }
}

searchInput.oninput = function () {
    showTasks();
};
