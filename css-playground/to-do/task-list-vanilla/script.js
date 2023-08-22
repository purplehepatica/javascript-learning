const elements = {
    addTaskButton: document.querySelector(".add-task-button"),
    taskInputField: document.querySelector(".task-input-field"),
    mainTasksContainer: document.querySelector(".tasks"),
    saveTasksButton: document.querySelector(".save-tasks-data"),
    removeTasksButton: document.querySelector(".remove-tasks-data"),
    clearTasksButton: document.querySelector(".clear-tasks-data")
}

let numOfTasks = 0;

elements.addTaskButton.addEventListener("click", createTaskComponent);

function getTaskInputData() {
    return elements.taskInputField.value;
}

function createTaskComponent(value) {

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");
    taskContainer.dataset.taskNumber = numOfTasks++;

    taskContainer.innerHTML = `
        <p>${getTaskInputData()}</p>
        <button class="remove-task-button">Usuń</button>
    `;

    elements.mainTasksContainer.append(taskContainer);

    // const removeTaskButton = document.querySelectorAll(".remove-task-button");

    taskContainer.addEventListener("click", () => {
        taskContainer.remove();
    })

}

/** Save Data in Local Storage **/
if (localStorage.getItem("tasksData") !== null) {
    elements.mainTasksContainer.innerHTML = localStorage.getItem("tasksData");
}

elements.saveTasksButton.addEventListener("click", () => {
    const tasksData = elements.mainTasksContainer.innerHTML;
    localStorage.setItem("tasksData", tasksData)
})

elements.removeTasksButton.addEventListener("click", () => {
    localStorage.removeItem("tasksData")
})

elements.clearTasksButton.addEventListener("click", () => {
    elements.mainTasksContainer.innerHTML = null;
})