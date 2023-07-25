const personsDataContainer = document.querySelector(".persons-data-container");

async function getPersonsData() {

    const personsDataAPI = await fetch("https://fakerapi.it/api/v1/persons")
    const personsObject = await personsDataAPI.json();

    // Jak tu prawidłowo zaimplementować try...catch w celu wyłapania błędów z API?
    // Pewnie jeszcze bardziej rozdzielić, bo funkcja getPersonsData robi więcej, niż jedną rzecz?
    if (personsObject.code === 200) {
      await buildPersonsCardComponents(personsObject.data)
    } else {
      console.log("Error!")
    }

};

// Zapewne można bardziej rozdzielić
// Zapewne można umieścić daną osobę jako klasę?
const buildPersonsCardComponents = personsData => {

  personsData.forEach((personData, index) => {

    const { firstname, lastname, birthday, website } = personData;
    let { image } = personData;

    image = './images/avatar.png';

    const personCardContainer = document.createElement("div");
    personCardContainer.classList.add("person-card");

    personCardContainer.innerHTML = `
      <img src="${image}" />
      <p><span>Imię i nazwisko:</span> ${firstname} ${lastname}</p>
      <p><span>Urodziny:</span> ${birthday}</p>
      <p><span>Strona internetowa:</span> ${website}</p>
    `

    personsDataContainer.append(personCardContainer);

  })

}

getPersonsData()
