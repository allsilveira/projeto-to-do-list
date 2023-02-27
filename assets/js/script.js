function addNewTask() {
    const newTask = getInputTask()
    addTaskOnList(newTask);
}

function getInputTask() {
    const input = document.querySelector("#newTask");
    const newTask = input.value;
    input.value = '';
    return newTask;
}

function addTaskOnList(value) {
    if (value.trim() !== '') {
        const ul = document.querySelector(".list");
        const li = document.createElement("li");
        li.textContent = value;
        ul.appendChild(li);
    }
}