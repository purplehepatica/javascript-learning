/** zaczerpnięte z internetu **/
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const characterId = urlParams.get('id');
/** end **/



const charactersContainer = document.querySelector(".character-container");

async function getCharactersData() {
    const fetchApiData = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
    const rickAndMortyCharactersData = await fetchApiData.json();

    buildCharactersHtmlStructure(rickAndMortyCharactersData);
}

async function buildCharactersHtmlStructure(rickAndMortyCharactersData) {

    const { name, image, species, gender, location: { name: locationName }, status, episode  } = rickAndMortyCharactersData;

        const characterCard= document.createElement("div");
        characterCard.classList.add("character-card");

        let newEp = episode.join("");
        newEp = newEp.split("https://rickandmortyapi.com/api/episode/")
        console.log(newEp)

        characterCard.innerHTML = `
        <img src="${image}" />
        <p><span class="bold">Nazwa postaci:</span> ${name}</p>
        <p><span class="bold">Gatunek:</span> ${species}</p>
        <p><span class="bold">Płeć:</span> ${gender}</p>
        <p><span class="bold">Lokacja:</span> ${locationName}</p>
        <p><span class="bold">Status żywotności:</span> ${status}</p>
        <p class="bold">Epizody:</p>
        <p>${newEp}</p>
        `;

        charactersContainer.append(characterCard);


}

getCharactersData()