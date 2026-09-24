let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let searchInput = document.getElementById("searchInput");

let tasks = [];


// Add task
addBtn.onclick = function () {
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(task);
    taskInput.value = "";

    showTasks();
};


// Add task with Enter
taskInput.onkeydown = function (e) {
    if (e.key === "Enter") {
        addBtn.click();
    }
};


// Show tasks
function showTasks() {
    taskList.innerHTML = "";

    let search = searchInput.value.toLowerCase();

    // Loop
    for (let i = 0; i < tasks.length; i++) {

        if (!tasks[i].toLowerCase().includes(search)) {
            continue;
        }

        let li = document.createElement("li");

        let text = document.createElement("span");
        text.className = "task-text";
        text.innerText = tasks[i];

        // Complete
        text.onclick = function () {
            text.classList.toggle("done");
        };


        // Buttons
        let buttons = document.createElement("div");
        buttons.className = "buttons";


        // Edit
        let edit = document.createElement("button");
        edit.className = "edit";
        edit.innerHTML = '<i class="fa-solid fa-pen"></i>';

        edit.onclick = function () {
            let newTask = prompt("Edit task:", tasks[i]);

            if (newTask !== null && newTask.trim() !== "") {
                tasks[i] = newTask.trim();
                showTasks();
            }
        };


        // Delete
        let del = document.createElement("button");
        del.className = "delete";
        del.innerHTML = '<i class="fa-solid fa-trash"></i>';

        del.onclick = function () {
            tasks.splice(i, 1);
            showTasks();
        };


        buttons.appendChild(edit);
        buttons.appendChild(del);

        li.appendChild(text);
        li.appendChild(buttons);

        taskList.appendChild(li);
    }
}


// Search
searchInput.oninput = function () {
    showTasks();
};


