const localMonth = {
month: 'long'
}
const nameOfDay = {
weekday: 'long'
}

console.log(today.toLocaleDateString("pl-PL", localMonth))

console.log(today.toLocaleDateString("pl-PL", nameOfDay))

---

if (Object.keys(meetings).includes(`${year}`) && Object.keys(meetings[year]).includes(`${month}`) && Object.keys(meetings[year][month]).includes(`${day}`)) {...
}

można po prostu zapisać jako:

if (meetings[year] && meetings[year][month]...)

-> O Wiele prościej! A potrzebne wszystkie reguły, ponieważ program sprawdza każdy statement pojedynczo. Jeśli dalibyśmy tylko samo: "if (meetings[year][month][day])", wówczas program nie wiedziałby OCB