const elements = {
    addTaskButton: document.querySelector(".add-task-button"),
    taskInputField: document.querySelector(".task-input-field"),
    mainTasksContainer: document.querySelector(".tasks"),
    clearTasksButton: document.querySelector(".clear-tasks-data")
}

elements.addTaskButton.addEventListener("click", createTaskComponent);
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        return createTaskComponent();
    }
});

function getTaskInputData() {
    return elements.taskInputField.value;
}

function createTaskComponent() {

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");

    taskContainer.innerHTML = `
        <div class="level block field is-grouped is-grouped-centered is-justify-content-space-between">
                <div class="control">
                    <p>${getTaskInputData()}</p>
                </div>
                <div class="control">
                    <button class="remove-task-button button is-light">Usuń</button>
                </div>
        </div>
    `;

    taskContainer.querySelector(".remove-task-button").addEventListener("click", () => {
        taskContainer.remove();
            localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML)
        });

    elements.mainTasksContainer.append(taskContainer);
    localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML);
    elements.taskInputField.value = null;
}

/** Save Data in Local Storage **/
if (localStorage.getItem("tasksData") !== null) {
    elements.mainTasksContainer.innerHTML = localStorage.getItem("tasksData");
}

elements.clearTasksButton.addEventListener("click", () => {
    elements.mainTasksContainer.innerHTML = null;
    localStorage.removeItem("tasksData");
})

/** END **/

function removeTaskListener() {
    const tasks = elements.mainTasksContainer.querySelectorAll(".task");
    tasks.forEach(task => task.querySelector(".remove-task-button").addEventListener("click", () => {
        task.remove();
        localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML)
    }))
}

removeTaskListener()