interface Elements {
    [key: string]: HTMLTableElement | HTMLButtonElement | HTMLInputElement | HTMLFormElement,
    commentsTableBody: HTMLTableElement,
    removeCheckedCommentsButton: HTMLButtonElement,
    selectAllCommentsButton: HTMLButtonElement,
    markAllCommentsButton: HTMLButtonElement,
    searchInput: HTMLInputElement,
    searchForm: HTMLFormElement,
}

const elements: Elements = {
    commentsTableBody: document.querySelector<HTMLTableElement>(".comments-table-body")!,
    removeCheckedCommentsButton: document.querySelector<HTMLButtonElement>(".remove-checked-comments")!,
    selectAllCommentsButton: document.querySelector<HTMLButtonElement>(".select-all-comments-button")!,
    markAllCommentsButton: document.querySelector<HTMLButtonElement>(".mark-all-comments-button")!,
    searchInput: document.querySelector<HTMLInputElement>(".search-input")!,
    searchForm: document.querySelector<HTMLFormElement>(".search-form")!,
}


interface CommentsItem {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

async function getCommentsData(): Promise<CommentsItem[]> {
    const comments:Response = await fetch("https://jsonplaceholder.typicode.com/comments");

    return comments.json();
}

async function displayComments(): Promise<void> {

    const comments: CommentsItem[] = await getCommentsData();

    comments.forEach((item: CommentsItem): void => {

        const { id, name, email, body }: { id: number, name: string, email: string, body: string } = item;
        const tableRow: HTMLTableRowElement = document.createElement("tr");
        tableRow.dataset.id = id.toString();

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



function getSelectedCommentsIds(): Array<string> {

    const selectedComments: NodeListOf<HTMLElement> = document.querySelectorAll(`input[name="remove-selection"]:checked`);

    const selectedCommentsIds: Array<string> = [];

    selectedComments.forEach(comment => {

        selectedCommentsIds.push(comment.id);
    })

    return selectedCommentsIds;
}



function removeSelectedComments(): void {

    const selectedCommentsIds: Array<string> = getSelectedCommentsIds();

    selectedCommentsIds.forEach((commentId: string): void=> {

        const element: HTMLElement = document.querySelector(`[data-id="${commentId}"]`)!;

        element.remove();
    })

    return console.log("Selected comments removed");
}



function addRemoveCommentsListener(): void {

    elements.removeCheckedCommentsButton.addEventListener("click", removeSelectedComments);
}



function addCheckAllCommentsListener(): void {

    elements.selectAllCommentsButton.addEventListener("click", validateCommentsSelection);
}

function validateCommentsSelection(): void {

    const allRemoveCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>(`input[name="remove-selection"]`);

    if (elements.selectAllCommentsButton.textContent === "Zaznacz wszystkie") {

        allRemoveCheckboxes.forEach((checkbox: HTMLInputElement): void  => {

            const element: HTMLElement = document.querySelector(`[data-id="${checkbox.id}"]`)!;

            if (!element.classList.contains("hide")) {
                checkbox.checked = true;
            }

        })

        elements.selectAllCommentsButton.textContent = "Odznacz wszystkie"

    } else if (elements.selectAllCommentsButton.textContent === "Odznacz wszystkie") {

        allRemoveCheckboxes.forEach((checkbox: HTMLInputElement): void => {
            checkbox.checked = false;
        })

        elements.selectAllCommentsButton.textContent = "Zaznacz wszystkie";
    }
}

function markSelectedComment(): void {

    const markerCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(`input[name="mark-selection"]`);

    markerCheckboxes.forEach((checkbox: HTMLInputElement): void => {

        checkbox.addEventListener("click", (): void => {

            if (checkbox.checked) {

                const element: HTMLElement = document.querySelector(`[data-id="${checkbox.id}"]`)!;

                element.classList.add("marker");
            } else {

                const element: HTMLElement = document.querySelector(`[data-id="${checkbox.id}"]`)!;

                element.classList.remove("marker");
            }
        })
    })
}

function addMarkAllCommentsListener(): void {

    elements.markAllCommentsButton.addEventListener("click", validateMarkCommentsSelection);
}

function validateMarkCommentsSelection(): void {

    const allMarkCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(`input[name="mark-selection"]`);

    if (elements.markAllCommentsButton.textContent === "Wyróżnij wszystkie") {

        allMarkCheckboxes.forEach((checkbox: HTMLInputElement): void => {

            const element: HTMLElement = document.querySelector(`[data-id="${checkbox.id}"]`)!;

            if (!element.classList.contains("hide")) {
                checkbox.checked = true;
                element.classList.add("marker");
            }

        })
        elements.markAllCommentsButton.textContent = "Odróżnij wszystkie";

    } else if (elements.markAllCommentsButton.textContent === "Odróżnij wszystkie") {

        allMarkCheckboxes.forEach((checkbox: HTMLInputElement): void => {

            checkbox.checked = false;

            const element: HTMLElement = document.querySelector(`[data-id="${checkbox.id}"]`)!;

            element.classList.remove("marker");
        })

        elements.markAllCommentsButton.textContent = "Wyróżnij wszystkie";
    }
}


function makeSearchFormWorking(): void {

    elements.searchForm.addEventListener("submit", (e: SubmitEvent): void => {

        e.preventDefault();
        const searchInputValue: string = elements.searchInput.value;
        const allRowCells: NodeListOf<HTMLTableRowElement> = document.querySelectorAll("[data-id]");

        allRowCells.forEach((row: HTMLTableRowElement): void => {
            if (row.textContent!.includes(searchInputValue)) {

                row.classList.remove("hide");
            } else {

                row.classList.add("hide")
            }
        });

        (e.target as HTMLFormElement).reset();
    })
}



function initializeFunctionalities(): void {

    // Dzięki temu funkcja initializeFunctionalities nie zwróci nieobsługiwanego Promise
    displayComments().then((): void => {
        addRemoveCommentsListener();
        addCheckAllCommentsListener();
        markSelectedComment();
        addMarkAllCommentsListener();
        makeSearchFormWorking();
    });

}

initializeFunctionalities();
