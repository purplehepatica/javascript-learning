import {CharacterExtended} from "./character-extended.class.js";

const characterContainer = document.querySelector(".character-container");

/** zaczerpnięte z internetu **/
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const characterId = urlParams.get('id');
const lastPageId = urlParams.get('page');
/** end **/

let numOfLastPage = 1;
if (lastPageId !== null) {
    numOfLastPage = lastPageId;
}


async function getCharactersData() {
    const fetchApiData = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
    const rickAndMortyCharacterData = await fetchApiData.json();

    initializeCharacterPageBuild(rickAndMortyCharacterData, numOfLastPage)
}

function buildCharactersHtmlStructure(character) {

    const {id, name, image, species, gender, location: {name: locationName}, status, episode: episodes} = character;

    const characterExtended = new CharacterExtended(id, name, image, species, gender, locationName, status, episodes);
    characterExtended.initializeCharacterCardComponentCreation(characterContainer, numOfLastPage)
}

function addBackToPageLink() {
    const backToPageLink = document.querySelector(".back-button p");
    const backToPageLinkAElement = document.createElement("a");
    backToPageLinkAElement.setAttribute("href", `./?page=${numOfLastPage}`)
    backToPageLinkAElement.textContent = "Poprzednia strona";
    backToPageLink.append(backToPageLinkAElement);
}

getCharactersData();

function initializeCharacterPageBuild(character, numOfLastPage) {
    buildCharactersHtmlStructure(character);
    addBackToPageLink(numOfLastPage)
}