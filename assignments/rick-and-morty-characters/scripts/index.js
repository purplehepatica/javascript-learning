import { Character } from "./character.class.js";

const elements = {
    charactersContainer: document.querySelector(".characters-container"),
    characterPagination: document.querySelector(".character-pagination"),
    searchInput: document.querySelector(".search"),
    searchButton: document.querySelector(".search-button")
}

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

    if (characterName !== null) {
        fetchApiData = await fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}&page=${numOfPageParam}`);
    } else {
        fetchApiData = await fetch(`https://rickandmortyapi.com/api/character/?page=${numOfPageParam}`);
    }

    const rickAndMortyCharactersData = await fetchApiData.json();

    initializeCharactersMainPageCreation(rickAndMortyCharactersData.info, rickAndMortyCharactersData.results)
}

function buildCharactersHtmlStructure(characters) {

    for (let character of characters) {

        const { id, name, species } = character;
        let { image } = character

        const characterObj = new Character(id, name, species, image);
        characterObj.initializeCharacterCardComponentCreation(elements.charactersContainer, numOfPageParam);

    }

}
function searchForData() {

    elements.searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            window.location.href = `./?name=${elements.searchInput.value}&page=1`;
        }
    })

    elements.searchButton.addEventListener("touchstart", () => {
        window.location.href = `./?name=${elements.searchInput.value}&page=1`;
    })

    elements.searchButton.addEventListener("click", () => {
        window.location.href = `./?name=${elements.searchInput.value}&page=1`;
    })
}

function addWebsitePagination(rickAndMortyCharactersDataInfo) {

    const numOfCharactersOnPage = 20;
    const numberOfAllPages = rickAndMortyCharactersDataInfo.count / numOfCharactersOnPage;

    for (let i = 1; i < numberOfAllPages + 1; i++) {
        if (characterName === null) {
            elements.characterPagination.innerHTML += `
            <p><a href="./?page=${i}">${i}</a></p>
            `;
        } else {
            elements.characterPagination.innerHTML += `
            <p><a href="./?name=${characterName}&page=${i}">${i}</a></p>
            `;
        }
    }
}

async function initializeCharactersMainPageCreation(info, results) {
    searchForData();
    addWebsitePagination(info);
    buildCharactersHtmlStructure(results);
}

getCharactersData().then(r => console.log("hello")).catch(error => console.log("Error"));
// Może właśnie powinno być, że jeśli then === 1, to wtedy coś się dzieje, a jeśli === 0 to dzieje się coś innego (np. "Przepraszamy, nic tu nie ma!").