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
        <article class="task-container">
            <div class="grid">
                <p>${getTaskInputData()}</p>
                <button class="edit-task-button button secondary" data-is-edited="false">Edytuj</button>
                <button class="remove-task-button button is-light">Zrobione</button>
            </div>
            
        </article>
    `;

    taskContainer.querySelector(".remove-task-button").addEventListener("click", () => {
        taskContainer.remove();
            localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML)
        });



    taskContainer.querySelector(".edit-task-button").addEventListener("click", () => {


        if (taskContainer.querySelector(".edit-task-button").dataset.isEdited === "false") {
            taskContainer.querySelector(".edit-task-button").dataset.isEdited = "true";
            taskEditModeOn(taskContainer);
        } else if (taskContainer.querySelector(".edit-task-button").dataset.isEdited === "true") {
            taskContainer.querySelector(".edit-task-button").dataset.isEdited = "false";
            taskEditModeOff(taskContainer);
        }

    });


    if (getTaskInputData() !== "") {
        elements.mainTasksContainer.append(taskContainer);
    }

    localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML);

    elements.taskInputField.value = null;
}


function taskEditModeOn(taskContainer) {
    const taskText = taskContainer.querySelector("p");
    const taskTextContent = taskContainer.querySelector("p").textContent;

    const taskEditButton = taskContainer.querySelector(".edit-task-button");

    taskText.innerHTML = `
            <input value="${taskTextContent}" />
        `
    taskEditButton.textContent = "OK?";

    localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML)
}



function taskEditModeOff(taskContainer) {

    const taskEditButton = taskContainer.querySelector(".edit-task-button");

    taskEditButton.textContent = "Edytuj";
    taskContainer.querySelector("p").innerHTML = taskContainer.querySelector("input").value;

    localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML)
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



function editTaskListener() {
    const tasks = elements.mainTasksContainer.querySelectorAll(".task");
    tasks.forEach(task => task.querySelector(".edit-task-button").addEventListener("click", () => {

        if (task.querySelector(".edit-task-button").dataset.isEdited === "false") {
            task.querySelector(".edit-task-button").dataset.isEdited = "true";
            taskEditModeOn(task);
        } else if (task.querySelector(".edit-task-button").dataset.isEdited === "true") {
            task.querySelector(".edit-task-button").dataset.isEdited = "false";
            taskEditModeOff(task);

        }
    }))
}

editTaskListener()