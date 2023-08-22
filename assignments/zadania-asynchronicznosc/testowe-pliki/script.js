const countriesAPI = fetch('https://restcountries.com/v3.1/all');


countriesAPI.then((item) => {
    return item.json();
}).then((itemJson)=> {
    console.log(itemJson)



        // console.log(`${country} - ${capital} - ${area} - ${languageNames} - ${population}`)
    });
