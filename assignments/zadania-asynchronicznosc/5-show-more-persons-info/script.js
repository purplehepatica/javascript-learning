const personsDataContainer = document.querySelector(".persons-data-container");

async function getPersonsData() {

    const usersDataAPI = await fetch("https://jsonplaceholder.typicode.com/users/")
    const usersArray = await usersDataAPI.json();

    await buildPersonsCardComponents(usersArray);

};

const buildPersonsCardComponents = usersData => {

  usersData.forEach((person, index) => {

    const { name, username, email, address: { street, suite, city, zipcode } } = person;

    const personCardContainer = document.createElement("div");
    personCardContainer.classList.add("person-card");

    personCardContainer.innerHTML = `
      <p><span>Imię:</span> ${name}</p>
      <p><span>Nazwa użytkownika:</span> ${username}</p>
      <p><span>Adres e-mail:</span> ${email}</p>
      <div class="user-address-compontent">
        <div class="user-address-header">
          <p><span>Adres zamieszkania:</span></p>
          <button class="toggle-address-info">Rozwiń, aby sprawdzić</button>
        </div>
        <div class="user-address-body hide">
          <p><span>Ulica:</span> ${street}</p>
          <p><span>Numer mieszkania:</span> ${suite}</p>
          <p><span>Miasto:</span> ${city}</p>
          <p><span>Kod pocztowy:</span> ${zipcode}</p>
        </div>
      </div>
    `;

    personsDataContainer.append(personCardContainer);

  })

}

async function addEventListeners() {
  await getPersonsData();

  const allToggleAdressInfoButtons = document.querySelectorAll(".toggle-address-info");

  for (let button of allToggleAdressInfoButtons) {
    button.addEventListener("click", function() {
      const addressInfoBody = button.parentElement.nextElementSibling;

      if (addressInfoBody.classList.contains("hide")) {
        addressInfoBody.classList.remove("hide")
      } else {
        addressInfoBody.classList.add("hide")
      }

    })
  }

}

addEventListeners();
