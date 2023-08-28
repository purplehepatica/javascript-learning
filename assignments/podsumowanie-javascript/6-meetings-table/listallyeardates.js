const today = new Date;
const currentYear = today.getFullYear();

const fullDayInMs = 24 * 60 * 60 * 1000;
const numOfWeeksInTheYear = 52;

const firstDayOfTheYear = new Date(2023, 0, 1);

let thisDayInMs = firstDayOfTheYear.getTime();
let thisDayYear = firstDayOfTheYear.getFullYear();

const dates = []
const datesAndWeeks = [];

while (currentYear === thisDayYear) {

    const thisDay = new Date(thisDayInMs);
    thisDayYear = thisDay.getFullYear();
    thisDayInMs += fullDayInMs;

    if (currentYear === thisDay.getFullYear()) {

        const [year, month, day] = [thisDay.getDate(), thisDay.getMonth() + 1, thisDay.getFullYear()]
        const date = `${year}-${month}-${day}`
        dates.push(date);
    }

}

for (let i = 0; i <= numOfWeeksInTheYear; i++) {

    for (let u = 0; u < 7; u++) {
        datesAndWeeks[i.toString()] = datesAndWeeks.push(dates[u * i]);
    }
}

console.log(datesAndWeeks)