const elements = {
    commentsTableBody: document.querySelector(".comments-table-body"),
    removeCheckedCommentsButton: document.querySelector(".remove-checked-comments"),
    selectAllCommentsButton: document.querySelector(".select-all-comments-button"),
    markAllCommentsButton: document.querySelector(".mark-all-comments-button"),
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
            <td class="checkbox">
                <input type="checkbox" id="${id}" name="remove-selection" />
            </td>
            <td class="checkbox">
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



async function initializeFunctionalities() {
    await displayComments();
    addRemoveCommentsListener();
    addCheckAllCommentsListener();
    markSelectedComment();
    addMarkAllCommentsListener();
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

    elements.markAllCommentsButton.addEventListener("click", validateMarkCommentsSelection)
}

function validateMarkCommentsSelection() {

    const allMarkCheckboxes = document.querySelectorAll(`input[name="mark-selection"]`);

    if (elements.markAllCommentsButton.textContent === "Wyróżnij wszystkie") {

        allMarkCheckboxes.forEach(checkbox => {
            checkbox.checked = true;

            const element = document.querySelector(`[data-id="${checkbox.id}"]`);

            element.classList.add("marker");
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

/** TEST FUNKCJONALNOŚCI WYSZUKIWANIA **/
/**
 * 1. Naciśnij na pole tekstowe, np. Imię, Adres e-mail, Zawartość (i ID?)
 * 2. Dane pole zmieni się na input
 * 3. Wpisz interesującą zawartość
 * 4. ? - rzędy tabeli upraszczają się do danej zawartości, np. if (name === ...), then pozostaw dany rząd. Tylko w jaki sposób mają się ładować dynamicznie? Może na bazie display: none?
 *
 * document.querySelectorAll("[data-id]")
 */