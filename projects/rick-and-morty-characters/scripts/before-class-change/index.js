const charactersContainer = document.querySelector(".characters-container");
const characterPagination = document.querySelector(".character-pagination");
const searchInput = document.querySelector(".search");

/** zaczerpnięte z internetu BEG **/
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pageId = urlParams.get('page');
const characterName = urlParams.get('name');
/** zaczerpnięte z internetu END **/

let numOfPageParam = 1;

if (pageId !== null) {
    numOfPageParam = pageId;
}

async function getCharactersData() {

    let fetchApiData = null;

    if (characterName !== null && pageId !== null) {
        fetchApiData = await fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}&page=${pageId}`);
    } else {
        fetchApiData = await fetch(`https://rickandmortyapi.com/api/character/?page=${numOfPageParam}`);
    }

    const rickAndMortyCharactersData = await fetchApiData.json();

    await buildCharactersHtmlStructure(rickAndMortyCharactersData.info, rickAndMortyCharactersData.results);
}

async function buildCharactersHtmlStructure(rickAndMortyCharactersDataInfo, rickAndMortyCharactersDataResults) {

    // const numberOfAllCharacters = rickAndMortyCharactersDataInfo.count;
    const numOfCharactersOnPage = 20;
    const numberOfAllPages = rickAndMortyCharactersDataInfo.count / numOfCharactersOnPage;

    for (let i = 1; i < numberOfAllPages + 1; i++) {
        if (characterName === null) {
            characterPagination.innerHTML += `
            <p><a href="./?page=${i}">${i}</a></p>
            `;
        } else {
            characterPagination.innerHTML += `
            <p><a href="./?name=${characterName}&page=${i}">${i}</a></p>
            `;
        }
    }

    for (let character of rickAndMortyCharactersDataResults) {

        const { id, name, species  } = character;
        let { image } = character

        const characterCard= document.createElement("div");
        characterCard.classList.add("character-card");

        characterCard.setAttribute("value", id)

        if (image === undefined) {
            image = "./images/placeholder.jpeg";
        }

        characterCard.innerHTML = `
        <img src="${image}" alt="${name}"/>
        <p><span class="bold">Nazwa postaci:</span> ${name}</p>
        <p><span class="bold">Gatunek:</span> ${species}</p>
        `;

        characterCard.addEventListener("click", () => {
            window.location.href = `./character.html?id=${id}&page=${pageId}`;
        })

        charactersContainer.append(characterCard);
    }


}

getCharactersData()

function searchForData() {

    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            window.location.href = `./?name=${searchInput.value}&page=1`;
        }
    })
}

searchForData()