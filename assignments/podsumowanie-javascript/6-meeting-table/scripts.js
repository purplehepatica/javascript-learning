import { year2023WeeksAndDays } from './year2023WeeksAndDays.js';
import { meetings } from './meetings.js';


const today = new Date();
const year = today.getFullYear();


const firstDayOfYearUTC = new Date(Date.UTC(today.getFullYear(), 0, 1));





const elements = {
    numOfWeekElement: document.querySelector(".num-of-week"),
    leftNavArrow: document.querySelector(".arrow-left-nav"),
    rightNavArrow: document.querySelector(".arrow-right-nav")
}

const localMonth = {
    month: 'long'
}
const nameOfDay = {
    weekday: 'long'
}

//console.log(today.getDay());
//console.log(today.toLocaleDateString("pl-PL", localMonth))

//console.log(today.toLocaleDateString("pl-PL", nameOfDay))


function markCurrentDay() {
    const numOfWeekend = today.getDay();
    let tableClassToMark = null;

    switch (numOfWeekend) {
        case 0:
            tableClassToMark = ".sunday";
            break;
        case 1:
            tableClassToMark = ".monday";
            break;
        case 2:
            tableClassToMark = ".tuesday";
            break;
        case 3:
            tableClassToMark = ".wednesday";
            break;
        case 4:
            tableClassToMark = ".thursday";
            break;
        case 5:
            tableClassToMark = ".friday";
            break;
        case 6:
            tableClassToMark = ".saturday";
            break;
    }

    document.querySelector(tableClassToMark).classList.add("today");
}





const numOfWeek = null


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let weekNumber = urlParams.get('week');



let selectedWeekDays = null;


function getWeekNumber() {

    if (weekNumber === null ) {
        // DO ROZDZIELENIA RACZEJ - ALBO SAMO GET ALBO PRZY OKAZJI TEXTCONTENT

        weekNumber = Math.round((today - firstDayOfYearUTC) / 60 / 60 / 24 / 7 / 1000);


    }

    if (weekNumber < 0 || weekNumber > 52) {
        weekNumber = 0;
    }

    selectedWeekDays = year2023WeeksAndDays[weekNumber];

    elements.numOfWeekElement.textContent = `Rok: ${year}, Tydzień: ${weekNumber}\n`;
}




function addDatesToWeekdays() {



    const selectedWeekRowDayNames = document.querySelectorAll(".week-day");

    selectedWeekRowDayNames.forEach((day, index) => {

        if (selectedWeekDays[index] !== null) {
            day.innerText += `, ${selectedWeekDays[index]}-${year}`;
        }
    });
}

function searchForMeetings() {

    const weekDays = document.querySelectorAll(".week-body");

    selectedWeekDays.forEach((weekday, index) => {


        let getMonthThenDay = null;

        if (weekday !== null) {
            getMonthThenDay = weekday.split("-").reverse();


        }
        const [ month, day ] = getMonthThenDay;
        let thatDayMeeting = null;




        try {
            thatDayMeeting = meetings[year][month][day];





        if (thatDayMeeting === undefined || thatDayMeeting === null) {
            // nothing

        } else if (Array.isArray(thatDayMeeting) === false) {

            const element = document.createElement("tr");
            const { time, desc, name } = thatDayMeeting;

            element.innerHTML = `
            <td>${time}</td>
            <td>${desc}</td>
            <td>${name}</td>
        `

            weekDays[index].appendChild(element);

        } else if (Array.isArray(thatDayMeeting) === true) {

            thatDayMeeting.forEach(item => {

                const element = document.createElement("tr");
                const { time, desc, name } = item;

                element.innerHTML = `
            <td>${time}</td>
            <td>${desc}</td>
            <td>${name}</td>
        `

                weekDays[index].appendChild(element);
            })
        }

        } catch (error) {
        }
    })
}



function makeNavArrowsWorking() {

    console.log(weekNumber);

    if (weekNumber > 0) {
        elements.leftNavArrow.addEventListener("click", () => {
            window.location.replace(`./?week=${Number(weekNumber) - 1}`);
        });
    } else {
        elements.leftNavArrow.classList.add("disable")
    }


    if (weekNumber < 52) {
        elements.rightNavArrow.addEventListener("click", () => {
            window.location.replace(`./?week=${Number(weekNumber) + 1}`);
        });
    } else {
        elements.rightNavArrow.classList.add("disable")
    }
}



function initializePageBuild() {
    getWeekNumber();
    markCurrentDay();

    addDatesToWeekdays();
    searchForMeetings();

    makeNavArrowsWorking();
}

initializePageBuild()