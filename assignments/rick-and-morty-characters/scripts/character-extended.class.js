 // import { Character } from "./character.class.js";
/**
export class CharacterExtendedExtended extends Character {
    gender;
    locationName;
    status;
    episodes;
    constructor(id, name, image, species, gender, locationName, status, episodes) {
        super(id, name, image, species);
        this.gender = gender;
        this.locationName = locationName;
        this.status = status;
        this.episodes = episodes
    }

    setExtendedHtmlStructure(mainElement, pageId) {
        super.setHtmlStructure(mainElement, pageId);
        this.characterCard.classList.remove("character-card");
        this.characterCard.classList.add("character-card-extended");

        this.characterCard.innerHTML = `
            <p><span class="bold">Płeć:</span> ${this.gender}</p>
            <p><span class="bold">Lokacja:</span> ${this.locationName}</p>
            <p><span class="bold">Status żywotności:</span> ${this.status}</p>
            <p class="bold">Epizody:</p>
            <div class="episodes-container">
                
            </div>
            `;

            mainElement.append(this.characterCard);

        }
}
**/
export class CharacterExtended {
    characterCard = document.createElement("div");
    id;
    name;
    species;
    image;
    gender;
    locationName;
    status;
    episodes;
    constructor(id, name, image, species, gender, locationName, status, episodes) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.image = image;
        this.gender = gender;
        this.locationName = locationName;
        this.status = status;
        this.episodes = episodes
    }



    /** Methods **/
    changeDefaultImageIfNeeded() {
        if (this.image === undefined) {
            this.image = "./images/placeholder.jpeg";
        }
    }

    setHtmlStructure(mainElement) {
        this.characterCard.classList.add("character-card-extended");

        this.characterCard.innerHTML = `
            <img src="${this.image}" />
            <p><span class="bold">Nazwa postaci:</span> ${this.name}</p>
            <p><span class="bold">Gatunek:</span> ${this.species}</p>
            <p><span class="bold">Płeć:</span> ${this.gender}</p>
            <p><span class="bold">Lokacja:</span> ${this.locationName}</p>
            <p><span class="bold">Status żywotności:</span> ${this.status}</p>
            <p class="bold">Epizody:</p>
            <div class="episodes-container">
                
            </div>
            `;

        mainElement.append(this.characterCard);

    }

    appendEpisodesToCharacter() {
        const pulledEpisodesNumbers = this.episodes.map((urlPart) => urlPart.replace("https://rickandmortyapi.com/api/episode/", ""));
        const episodesContainer = document.querySelector(".episodes-container");

        for (let i = 0; i < this.episodes.length; i++) {
            episodesContainer.innerHTML += `
                    <p class="episode">${pulledEpisodesNumbers[i]}</p>
                    `;
        }
    }

    /** END **/

    initializeCharacterCardComponentCreation(mainElement) {
        this.changeDefaultImageIfNeeded();
        this.setHtmlStructure(mainElement);
        this.appendEpisodesToCharacter();
    }

}