const elements = {
    commentsTableBody: document.querySelector(".comments-table-body"),
    removeCheckedCommentsButton: document.querySelector(".remove-checked-comments"),
    selectAllCommentsButton: document.querySelector(".select-all-comments-button"),
    markAllCommentsButton: document.querySelector(".mark-all-comments-button"),
    searchInput: document.querySelector(".search-input"),
    searchForm: document.querySelector(".search-form"),
}

async function getCommentsData() {
    const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
    return await comments.json();
}

async function displayComments() {
    const comments = await getCommentsData();

    comments.forEach((item) => {

        const { id, name, email, body } = item;
        const tableRow = document.createElement("tr");
        tableRow.dataset.id = id;

        tableRow.innerHTML = `
            <th>${id}</th>
            <td>${name}</td>
            <td>${email}</td>
            <td>${body}</td>
            <td class="checkbox">
                <input type="checkbox" id="${id}" name="remove-selection" />
            </td>
            <td class="checkbox">
                <input type="checkbox" id="${id}" name="mark-selection" />
            </td>
        `;

        elements.commentsTableBody.appendChild(tableRow);
    })
}



function getSelectedCommentsIds() {

    const selectedComments = document.querySelectorAll(`input[name="remove-selection"]:checked`);

    const selectedCommentsIds = [];

    selectedComments.forEach(comment => {

        selectedCommentsIds.push(comment.id);
    })

    return selectedCommentsIds;
}

function removeSelectedComments() {

    const selectedCommentsIds = getSelectedCommentsIds();

    selectedCommentsIds.forEach(commentId => {

        const element = document.querySelector(`[data-id="${commentId}"]`);

        element.remove();
    })

    return console.log("Selected comments removed");
}


function addRemoveCommentsListener() {

    elements.removeCheckedCommentsButton.addEventListener("click", removeSelectedComments);
}



function addCheckAllCommentsListener() {

    elements.selectAllCommentsButton.addEventListener("click", validateCommentsSelection);
}

function validateCommentsSelection() {

    const allRemoveCheckboxes = document.querySelectorAll(`input[name="remove-selection"]`);

    if (elements.selectAllCommentsButton.textContent === "Zaznacz wszystkie") {

        allRemoveCheckboxes.forEach(checkbox => {

            const element = document.querySelector(`[data-id="${checkbox.id}"]`);

            if (element.classList.contains("hide") === false) {
                checkbox.checked = true;
            }

        })

        elements.selectAllCommentsButton.textContent = "Odznacz wszystkie"

    } else if (elements.selectAllCommentsButton.textContent === "Odznacz wszystkie") {

        allRemoveCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        })

        elements.selectAllCommentsButton.textContent = "Zaznacz wszystkie";
    }
}

function markSelectedComment() {

    const markerCheckboxes = document.querySelectorAll(`input[name="mark-selection"]`);

    markerCheckboxes.forEach(checkbox => {

        checkbox.addEventListener("click", () => {

            if (checkbox.checked) {

                const element = document.querySelector(`[data-id="${checkbox.id}"]`);

                element.classList.add("marker");
            } else {

                const element = document.querySelector(`[data-id="${checkbox.id}"]`);

                element.classList.remove("marker");
            }
        })
    })
}

function addMarkAllCommentsListener() {

    elements.markAllCommentsButton.addEventListener("click", validateMarkCommentsSelection);
}

function validateMarkCommentsSelection() {

    const allMarkCheckboxes = document.querySelectorAll(`input[name="mark-selection"]`);

    if (elements.markAllCommentsButton.textContent === "Wyróżnij wszystkie") {

        allMarkCheckboxes.forEach(checkbox => {

            const element = document.querySelector(`[data-id="${checkbox.id}"]`);

            if (element.classList.contains("hide") === false) {
                checkbox.checked = true;
                element.classList.add("marker");
            }

        })
        elements.markAllCommentsButton.textContent = "Odróżnij wszystkie";

    } else if (elements.markAllCommentsButton.textContent === "Odróżnij wszystkie") {

        allMarkCheckboxes.forEach(checkbox => {
            checkbox.checked = false;

            const element = document.querySelector(`[data-id="${checkbox.id}"]`);

            element.classList.remove("marker");
        })

        elements.markAllCommentsButton.textContent = "Wyróżnij wszystkie";
    }
}


function makeSearchFormWorking() {

    elements.searchForm.addEventListener("submit", (e) => {

        e.preventDefault();
        const searchInputValue = elements.searchInput.value;
        const allRowCells = document.querySelectorAll("[data-id]");

        allRowCells.forEach(row => {
            if (row.textContent.includes(searchInputValue)) {

                row.classList.remove("hide");
            } else {

                row.classList.add("hide")
            }

            e.target.reset();
        })

    })
}








async function initializeFunctionalities() {

    await displayComments();
    addRemoveCommentsListener();
    addCheckAllCommentsListener();
    markSelectedComment();
    addMarkAllCommentsListener();
    makeSearchFormWorking();
}

initializeFunctionalities();
