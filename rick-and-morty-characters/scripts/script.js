const charactersContainer = document.querySelector(".characters-container");

/** zaczerpnięte z internetu **/
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pageId = urlParams.get('page');
const characterName = urlParams.get('name');

/** end **/
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


    buildCharactersHtmlStructure(rickAndMortyCharactersData.info, rickAndMortyCharactersData.results);
}

async function buildCharactersHtmlStructure(rickAndMortyCharactersDataInfo, rickAndMortyCharactersDataResults) {

    const numberOfAllCharacters = rickAndMortyCharactersDataInfo.count;
    const numOfCharactersOnPage = 20;
    const numberOfAllPages = rickAndMortyCharactersDataInfo.count / numOfCharactersOnPage;

    const characterPagination = document.querySelector(".character-pagination");

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
        const { id, name, image, species  } = character;

        const characterCard= document.createElement("div");
        characterCard.classList.add("character-card");

        characterCard.setAttribute("value", id)

        characterCard.innerHTML = `
        <img src="${image}" />
        <p><span class="bold">Nazwa postaci:</span> ${name}</p>
        <p><span class="bold">Gatunek:</span> ${species}</p>
        `;


        characterCard.addEventListener("click", () => {
            window.location.href = `./character.html?id=${id}&page=${pageId}`;
        })


        /** function addEventListeners() {
            const allCharacterCards = document.querySelectorAll(".character-card");
            console.log(allCharacterCards)
        } **/

        charactersContainer.append(characterCard);
    }


}

getCharactersData()

function searchForData() {
    const searchInput = document.querySelector(".search");

    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            console.log(searchInput.value)
            window.location.href = `./?name=${searchInput.value}&page=1`;
        }
    })
}

searchForData()