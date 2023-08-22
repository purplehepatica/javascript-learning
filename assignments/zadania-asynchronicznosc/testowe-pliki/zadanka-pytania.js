/**

let countriesList = {};

const countriesAPI = fetch('https://restcountries.com/v3.1/all');

countriesAPI.then((item) => {
  return item.json();
}).then((itemJson) => {

  Object.keys(itemJson).forEach(index => {
	countriesList[itemJson[index]["population"]] = [itemJson[index]["name"]["common"]]
  })  

  const lastKeyInTheObject = Object.keys(countriesList).length - 1;

  for (let i = 0; i < 10; i++) {
	const population = Object.keys(countriesList)[lastKeyInTheObject - i];

	console.log(i + 1, countriesList[population]);  
  }

});
**/

let myData = null;
/** Dlaczego zwraca wynik i jednocześnie na końcu nadal Promise - Pending? **/
async function countries() {
  const countriesAPI = await fetch("https://restcountries.com/v3.1/all");
  const dataFromAPI = await countriesAPI.json();
  myData = dataFromAPI;
  // return console.log(dataFromAPI)
}

async function asignData() {
  await countries();
  console.log(myData)
}
asignData()
console.log(myData)


/** Zwraca wynik bez Promise - Pending **/
function countriesPromise() {
  const countriesAPI = fetch("https://restcountries.com/v3.1/all");

  countriesAPI.then(item => {
    return item.json()
  }).then(itemJson => console.log(itemJson));
}

/**
const countriesAPI = fetch("https://restcountries.com/v3.1/all");
countriesAPI.then(result => console.log(result))
**/
