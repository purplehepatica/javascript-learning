const elements = {
    commentsTableBody: document.querySelector(".comments-table-body"),
    removeCheckedCommentsButton: document.querySelector(".remove-checked-comments"),
    selectAllCommentsButton: document.querySelector(".select-all-comments-button"),
}

async function getCommentsData() {
    const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
    return await comments.json()
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
            <td>
                <input type="checkbox" id="${id}" name="remove-selection" />
            </td>
            <td>
                <input type="checkbox" id="${id}" name="mark-selection" />
            </td>
        `

        elements.commentsTableBody.appendChild(tableRow);
    })
}



function getSelectedCommentsIds() {

    const selectedComments = document.querySelectorAll(`input[name="remove-selection"]:checked`);

    const selectedCommentsIds = [];

    selectedComments.forEach(comment => {
        selectedCommentsIds.push(comment.id)
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

    elements.removeCheckedCommentsButton.addEventListener("click", removeSelectedComments)
}



function initializeFunctionalities() {
    displayComments();
    addRemoveCommentsListener();
    addCheckAllCommentsListener();
}

initializeFunctionalities();


function addCheckAllCommentsListener() {

    elements.selectAllCommentsButton.addEventListener("click", validateCommentsSelection)
}

function validateCommentsSelection() {

    const allRemoveCheckboxes = document.querySelectorAll(`input[name="remove-selection"]`);

    if (elements.selectAllCommentsButton.textContent === "Zaznacz wszystkie") {

        allRemoveCheckboxes.forEach(checkbox => {
            checkbox.checked = true;

        })
        elements.selectAllCommentsButton.textContent = "Odznacz wszystkie"

    } else if (elements.selectAllCommentsButton.textContent === "Odznacz wszystkie") {

        allRemoveCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        })

        elements.selectAllCommentsButton.textContent = "Zaznacz wszystkie";
    }
}