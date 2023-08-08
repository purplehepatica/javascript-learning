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
    taskContainer.classList.add("task-element");

    taskContainer.innerHTML = `
        <article class="task-container">
            <div class="grid mobile-column">
                <p class="grow-1">${getTaskInputData()}</p>
                <div class="flex-gap">
                    <button class="open-task-button button contrast">
                        <span class="material-symbols-outlined">
                            open_in_new
                        </span>
                    </button>
                <button class="edit-task-button button secondary" data-is-edited="false">
                    <span class="material-symbols-outlined">
                            edit
                    </span>
                </button>
                <button class="remove-task-button button success">
                    <span class="material-symbols-outlined">
                        done
                    </span>
                </button>
                </div>
                
            </div>
            <dialog>
                <article>
                    <button
                       class="close">
                    </button>
                    <h3 class="task-title">${getTaskInputData()}</h3>
                                        
                    <blockquote class="description">
                        "*Tu wrzucić losowe cytaty wspomagające motywację i działanie*"<br>
                        "*Domyślnie wrzucić tutaj możliwość zmiany opisu na własny, by dany projekt był jasny*"
                    </blockquote>
                    <div class="flex-gap">
                        <input class="subtask-input-field" placeholder="" />
                        <button class="add-subtask-button button-flex-center-width-65">
                            <span class="material-symbols-outlined">
                                add
                            </span>
                        </button>
                        <button class="clear-subtasks-data warning button-flex-center-width-65">
                            <span class="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </div>
                    
                    <div class="subtasks">
                    
                    </div>
                    
                    
                </article>
            </dialog>
        </article>
    `;

    const subtaskInput = taskContainer.querySelector(".subtask-input-field");
    const addSubtaskButton = taskContainer.querySelector(".add-subtask-button");
    const clearSubtasksData = taskContainer.querySelector(".clear-subtasks-data");
    const subtasks = taskContainer.querySelector(".subtasks");


    addSubtaskButton.addEventListener("click", () => {
        createSubtaskComponent(subtaskInput, addSubtaskButton, clearSubtasksData, subtasks);
        subtaskInput.value = "";
    })

    subtaskInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            createSubtaskComponent(subtaskInput, addSubtaskButton, clearSubtasksData, subtasks);
            subtaskInput.value = "";
        }
    })

    const modal = taskContainer.querySelector("dialog");
    const closeModalButton = taskContainer.querySelector("dialog .close");

    taskContainer.querySelector(".open-task-button").addEventListener("click", () => {
        modal.setAttribute("open", "true");
    })

    closeModalButton.addEventListener("click", () => {
        modal.removeAttribute("open");
    })





    /** CLEAN CODE **/

    /** TASK SECTION **/

    makeTaskComponentEditable(taskContainer)
    makeTaskComponentRemovable(taskContainer)

    /** CLEAN CODE END **/




    if (getTaskInputData() !== "") {
        elements.mainTasksContainer.append(taskContainer);
    }



    localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML);

    elements.taskInputField.value = null;
}


function createSubtaskComponent(subtaskInput, addSubtaskButton, clearSubtasksData, subtasks) {

    const subtaskContainer = document.createElement("div");
    subtaskContainer.classList.add("subtask");
    subtaskContainer.classList.add("task-element");

    subtaskContainer.innerHTML = `
        <article class="article subtask-container">
            <div class="flex-gap">
                <p class="subtask-title grow-1">${subtaskInput.value}</p>
                <div class="flex-gap">
                    <button class="edit-task-button button secondary" data-is-edited="false">
                    <span class="material-symbols-outlined">
                        edit
                    </span>
                </button>
                <button class="remove-task-button button success">
                    <span class="material-symbols-outlined">
                        check
                    </span>
                </button>
            </div>
                
            </div>
        </article>
    `;

    clearSubtasksData.addEventListener("click", () => {
        subtasks.innerHTML = "";
    })

    makeTaskComponentEditable(subtaskContainer);
    makeTaskComponentRemovable(subtaskContainer);



    if (subtaskInput.value !== "") {

        subtasks.append(subtaskContainer);
        localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML)
    }

}


const taskEditModeOn = taskContainer => {

    const contentElement = taskContainer.querySelector("p");
    const contentElementValue = taskContainer.querySelector("p").textContent;

    const editTaskButton = taskContainer.querySelector(".edit-task-button");

    contentElement.innerHTML = `
            <input value="${contentElementValue}" />
        `
    editTaskButton.textContent = "OK?";
}

function taskEditModeOff(taskContainer) {

    const editTaskButton = taskContainer.querySelector(".edit-task-button");

    editTaskButton.innerHTML = `<span class="material-symbols-outlined">
                            edit
                    </span>`;

    taskContainer.querySelector("p").innerHTML = taskContainer.querySelector("input").value;

    localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML);
}


/** Save Data in Local Storage & close all modals **/
if (localStorage.getItem("tasksData") !== null) {
    elements.mainTasksContainer.innerHTML = localStorage.getItem("tasksData");

    document.querySelectorAll("dialog").forEach(dialog => {
        dialog.removeAttribute("open")
    })

}

elements.clearTasksButton.addEventListener("click", () => {
    elements.mainTasksContainer.innerHTML = null;
    localStorage.removeItem("tasksData");
})
/** END **/


/** Do poprawy zapewne **/
function openTaskListener() {

    const tasks = elements.mainTasksContainer.querySelectorAll(".task");

    tasks.forEach(task => task.querySelector(".open-task-button").addEventListener("click", () => {

        const modal = task.querySelector("dialog");

        modal.setAttribute("open", "true");

    }))
}

openTaskListener()

function closeSubtaskModalListener() {

    const taskDialogs = elements.mainTasksContainer.querySelectorAll(".task dialog");

    taskDialogs.forEach(taskDialog => taskDialog.querySelector(".close").addEventListener("click", () => {

        taskDialog.removeAttribute("open");
        localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML);
    }));
}

closeSubtaskModalListener()

/** Do poprawy zapewne END**/




function addSubtaskButtonListener() {
    const taskDialogs = elements.mainTasksContainer.querySelectorAll(".task dialog");

    taskDialogs.forEach(taskDialog => taskDialog.querySelector(".add-subtask-button").addEventListener("click", () => {

        const subtaskInput = taskDialog.querySelector(".subtask-input-field");
        const addSubtaskButton = taskDialog.querySelector(".add-subtask-button");
        const clearSubtasksData = taskDialog.querySelector(".clear-subtasks-data");
        const subtasks = taskDialog.querySelector(".subtasks");

        createSubtaskComponent(subtaskInput, addSubtaskButton, clearSubtasksData, subtasks)

        localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML);
    }));
}

addSubtaskButtonListener()




/** CLEAN CODE **/

const makeTaskComponentEditable = (taskElement) => {

    const taskEditButton = taskElement.querySelector(".edit-task-button");

    taskEditButton.addEventListener("click", () => {

        if (taskEditButton.dataset.isEdited === "false") {

            taskEditButton.dataset.isEdited = "true";
            taskEditModeOn(taskElement);
        } else if (taskEditButton.dataset.isEdited === "true") {

            taskEditButton.dataset.isEdited = "false";
            taskEditModeOff(taskElement);
        }
    })
}

function makeTaskComponentRemovable(taskElement) {

    taskElement.querySelector(".remove-task-button").addEventListener("click", () => {

            taskElement.remove();
            localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML);
        })
}

function makeTaskComponentsFunctional() {

    const taskElements = document.querySelectorAll(".task-element");

    taskElements.forEach(taskElement => {

        makeTaskComponentEditable(taskElement)
        makeTaskComponentRemovable(taskElement)

    })
}

makeTaskComponentsFunctional()

/** CLEAN CODE END **/

function clearSubtaskModalListener() {
    const taskDialogs = elements.mainTasksContainer.querySelectorAll(".task dialog");

    taskDialogs.forEach(taskDialog => taskDialog.querySelector(".clear-subtasks-data").addEventListener("click", () => {

        taskDialog.querySelector(".subtasks").innerHTML = "";
        localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML);
    }));
}

clearSubtaskModalListener()




/** Wystarczy wrzucić dla pojedynczego zadania, nie dla każdego kontenera z osobna **/
