const elements = {
    addTaskButton: document.querySelector(".add-task-button"),
    taskInputField: document.querySelector(".task-input-field"),
    mainTasksContainer: document.querySelector(".tasks")
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

// elements.addTaskButton.addEventListener("click", createTaskComponent);
