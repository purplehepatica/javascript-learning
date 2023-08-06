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
        <div class="task-container">
            <div class="grid">
                <p>${getTaskInputData()}</p>
                <div class="grid">
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
        </div>
    `;

    const subtaskInput = taskContainer.querySelector(".subtask-input-field");
    const addSubtaskButton = taskContainer.querySelector(".add-subtask-button");
    const clearSubtasksData = taskContainer.querySelector(".clear-subtasks-data");
    const subtasks = taskContainer.querySelector(".subtasks");


    addSubtaskButton.addEventListener("click", () => {
        createSubtaskComponent(subtaskInput, addSubtaskButton, clearSubtasksData, subtasks);
        subtaskInput.value = "";
    })

    taskContainer.querySelector(".clear-subtasks-data").addEventListener("click", () => {

        taskContainer.querySelector(".subtasks").innerHTML = "";
        localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML);
    });

    subtaskInput.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {
            createSubtaskComponent(subtaskInput, addSubtaskButton, clearSubtasksData, subtasks);
            subtaskInput.value = "";
        }
    })

    taskContainer.querySelector(".remove-task-button").addEventListener("click", () => {
        taskContainer.remove();
            localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML)
        });


    const modal = taskContainer.querySelector("dialog");
    const closeModalButton = taskContainer.querySelector("dialog .close");

    taskContainer.querySelector(".open-task-button").addEventListener("click", () => {
        modal.setAttribute("open", "true");
    })

    closeModalButton.addEventListener("click", () => {
        modal.removeAttribute("open");
    })




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


function createSubtaskComponent(subtaskInput, addSubtaskButton, clearSubtasksData, subtasks) {

    const subtaskContainer = document.createElement("div");
    subtaskContainer.classList.add("subtask");

    subtaskContainer.innerHTML = `
        <article class="article subtask-container">
            <div class="grid">
                <p class="subtask-title">${subtaskInput.value}</p>
                <div class="grid">
                    <button class="edit-subtask-button button secondary" data-is-edited="false">
                    <span class="material-symbols-outlined">
                        edit
                    </span>
                </button>
                <button class="remove-subtask-button button success">
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

    subtaskContainer.querySelector(".remove-subtask-button").addEventListener("click", () => {
        subtaskContainer.remove();
    })

    subtaskContainer.querySelector(".edit-subtask-button").addEventListener("click", () => {

        if (subtaskContainer.querySelector(".edit-subtask-button").dataset.isEdited === "false") {
            subtaskContainer.querySelector(".edit-subtask-button").dataset.isEdited = "true";
            subtaskEditModeOn(subtaskContainer);
        } else if (subtaskContainer.querySelector(".edit-subtask-button").dataset.isEdited === "true") {
            subtaskContainer.querySelector(".edit-subtask-button").dataset.isEdited = "false";
            subtaskEditModeOff(subtaskContainer);
        }


    })

    if (subtaskInput.value !== "") {
        subtasks.append(subtaskContainer);

        localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML)
    }

}


function subtaskEditModeOn(subtaskContainer) {
    const subtaskText = subtaskContainer.querySelector("p");
    const subtaskTextContent = subtaskContainer.querySelector("p").textContent;

    const subtaskEditButton = subtaskContainer.querySelector(".edit-subtask-button");

    subtaskText.innerHTML = `
            <input value="${subtaskTextContent}" />
        `
    subtaskEditButton.textContent = "OK?";

    localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML)
}



function subtaskEditModeOff(subtaskContainer) {

    const subtaskEditButton = subtaskContainer.querySelector(".edit-subtask-button");

    subtaskEditButton.textContent = "Edytuj";

    subtaskContainer.querySelector("p").innerHTML = subtaskContainer.querySelector("input").value;

    const subtaskTitle = subtaskContainer.querySelector(".subtask-title");
    subtaskTitle.textContent = subtaskContainer.querySelector("p").textContent;


    localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML)
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

    const taskTitle = taskContainer.querySelector(".task-title");
    taskTitle.textContent = taskContainer.querySelector("p").textContent;


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



function openTaskListener() {
    const tasks = elements.mainTasksContainer.querySelectorAll(".task");
    tasks.forEach(task => task.querySelector(".open-task-button").addEventListener("click", () => {

        const modal = task.querySelector("dialog");
        const closeModalButton = task.querySelector("dialog .close");

        modal.setAttribute("open", "true");

        closeModalButton.addEventListener("click", () => {
            modal.removeAttribute("open");
        })

    }))
}

openTaskListener()



/** Po odtworzeniu strony w pamięci znajduje się dialog z wartością "open", dlatego modale domyślnie się wyświetlają **/

    document.querySelectorAll("dialog").forEach(dialog => {
        dialog.removeAttribute("open")
})

    /** Fajne mogłoby być zrobienie zapisu do pamięci przy każdym zamknięciu modala i jego otwarciu **/
/** END ROZKMINA **/



function editTaskListener() {
    const tasks = elements.mainTasksContainer.querySelectorAll(".task");
    tasks.forEach(task => task.querySelector(".edit-task-button").addEventListener("click", () => {

        const taskInputData = task.querySelector(".task-input-data");

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

function editSubtaskListener() {
    const subtasks = elements.mainTasksContainer.querySelectorAll(".subtask");
    subtasks.forEach(subtask => subtask.querySelector(".edit-subtask-button").addEventListener("click", () => {


        const taskInputData = subtask.querySelector(".subtask-input-data");

        if (subtask.querySelector(".edit-subtask-button").dataset.isEdited === "false") {
            subtask.querySelector(".edit-subtask-button").dataset.isEdited = "true";
            subtaskEditModeOn(subtask);
        } else if (subtask.querySelector(".edit-subtask-button").dataset.isEdited === "true") {
            subtask.querySelector(".edit-subtask-button").dataset.isEdited = "false";
            subtaskEditModeOff(subtask);
        }
    }))
}

editSubtaskListener()


// To przecież (chyba) duplikat!
function closeSubtaskModalListener() {
    const taskDialogs = elements.mainTasksContainer.querySelectorAll(".task dialog");

    taskDialogs.forEach(taskDialog => taskDialog.querySelector(".close").addEventListener("click", () => {

        taskDialog.removeAttribute("open");

    }));
}

closeSubtaskModalListener()



function clearSubtaskModalListener() {
    const taskDialogs = elements.mainTasksContainer.querySelectorAll(".task dialog");

    taskDialogs.forEach(taskDialog => taskDialog.querySelector(".clear-subtasks-data").addEventListener("click", () => {

        taskDialog.querySelector(".subtasks").innerHTML = "";
        localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML);
    }));
}

clearSubtaskModalListener()




function removeSubtaskButton() {

    document.querySelectorAll(".subtasks").forEach(subtasksContainer => {

        subtasksContainer.querySelectorAll(".subtask").forEach(subtaskElement => {
            const removeSubtaskButton = subtaskElement.querySelector(".remove-subtask-button");

            removeSubtaskButton.addEventListener("click", () => {
                subtaskElement.remove();
                localStorage.setItem("tasksData", elements.mainTasksContainer.innerHTML)
            })
        })

    })
}

removeSubtaskButton();



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