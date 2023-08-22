export class Character {
    characterCard = document.createElement("div");
    id;
    name;
    species;
    image;
    constructor(id, name, species, image) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.image = image
    }

    /** Functions **/
    changeDefaultImageIfNeeded() {
        if (this.image === undefined) {
            this.image = "./images/placeholder.jpeg";
        }
    }

    setHtmlStructure(mainElement) {
        this.characterCard.classList.add("character-card");
        this.characterCard.setAttribute("value", this.id);

        this.characterCard.innerHTML = `
                <img src="${this.image}" alt="${this.name}"/>
                <p><span class="bold">Nazwa postaci:</span> ${this.name}</p>
                <p><span class="bold">Gatunek:</span> ${this.species}</p>
            `;

        mainElement.append(this.characterCard);

    }

    makeCharacterClickable(pageId) {
        this.characterCard.addEventListener("click", () => {
            window.location.href = `./character.html?id=${this.id}&page=${pageId}`;
        })
    }
    /** END **/

    initializeCharacterCardComponentCreation(mainElement, pageId) {
        this.changeDefaultImageIfNeeded();
        this.setHtmlStructure(mainElement);
        this.makeCharacterClickable(pageId);
    }

}