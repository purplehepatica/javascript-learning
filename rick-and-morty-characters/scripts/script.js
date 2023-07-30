const charactersContainer = document.querySelector(".characters-container");
const baseRickAndMortyApiUrl = "https://rickandmortyapi.com/api/character"

async function getCharactersData() {
    const fetchApiData = await fetch(baseRickAndMortyApiUrl);
    const rickAndMortyCharactersData = await fetchApiData.json();

    buildCharactersHtmlStructure(rickAndMortyCharactersData.info, rickAndMortyCharactersData.results);
}

async function buildCharactersHtmlStructure(rickAndMortyCharactersDataInfo, rickAndMortyCharactersDataResults) {

    const numberOfAllCharacters = rickAndMortyCharactersDataInfo.count;

    const numberOfAllPages = rickAndMortyCharactersDataInfo.count / 20;

    const characterPagination = document.querySelector(".character-pagination");

    for (let i = 1; i < numberOfAllPages; i++) {
        characterPagination.innerHTML += `
        <p><a href="./?page=${i}">${i}</a></p>
        `
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
            window.location.href = `./character.html?id=${id}`;
        })


        /** function addEventListeners() {
            const allCharacterCards = document.querySelectorAll(".character-card");
            console.log(allCharacterCards)
        } **/

        charactersContainer.append(characterCard);
    }


}

getCharactersData()