# Mentor_toCheck

## URL Parameters

https://www.sitepoint.com/get-url-parameters-with-javascript/

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('id')
console.log(id);

## URL Redirect

https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage

## GraphQL

Po co jest ten cały GraphQL? https://rickandmortyapi.com/documentation/#graphql

## AddEventListener "keypress" i "e"

searchInput.addEventListener("keypress", (e) => {
console.log(e);
})