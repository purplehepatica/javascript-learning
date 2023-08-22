const personsDataContainer = document.querySelector(".persons-data-container")

async function getPersonsData() {

    const personsDataAPI = await fetch("https://fakerapi.it/api/v1/persons")
    const personsData = await personsDataAPI.json();

    // Jak tu prawidłowo zaimplementować try...catch w celu wyłapania błędów z API?
    if (personsData.code === 200) {
      await buildHTMLStructure(personsData)
    } else {
      console.log("Error!")
    }

};

// Zapewne można bardziej rozdzielić
// Zapewne można umieścić z danej osoby zrobić obiekt?

class Person {
  firstname;
  lastname;
  birthday;
  website;
  image;
  constructor(firstname, lastname, birthday, website, image) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
    this.website = website;
    this.image = image;
  }

  changeDefaultImage() {
    this.image = './images/avatar.png';
  }


  setCardData(personContainer) {

    personContainer.innerHTML = `
    <img src="${this.image}" />
    <p><span>Imię i nazwisko:</span> ${this.firstname} ${this.lastname}</p>
    <p><span>Urodziny:</span> ${this.birthday}</p>
    <p><span>Strona internetowa:</span> ${this.website}</p>
    `
  }
  
  buildCardStructure(peopleDataContainer) {
    const personContainer = document.createElement("div");
    personContainer.classList.add("person-card");
    personsDataContainer.append(personContainer);

    setCardData(personContainer);
  }


}

const buildHTMLStructure = personsData => {
  Object.keys(personsData.data).forEach((item, index) => {

    const thisHumanData = personsData.data[item];

    const { firstname, lastname, birthday, website } = thisHumanData;
    let { image } = thisHumanData;

    const thisPerson = new Person(firstname, lastname, birthday, website, image);

    thisPerson.changeDefaultImage();
    thisPerson.buildCardStructure(personsDataContainer);
  })

}

getPersonsData()
