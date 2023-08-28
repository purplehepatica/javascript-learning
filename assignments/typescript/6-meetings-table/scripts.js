import { year2023WeeksAndDays } from './year2023WeeksAndDays.js';
import { meetings } from './meetings.js';
const today = new Date();
const currentYear = today.getFullYear();
const firstDayOfCurrentYearUTC = new Date(Date.UTC(today.getFullYear(), 0, 1));
const elements = {
    numOfWeekElement: document.querySelector(".num-of-week"),
    leftNavArrow: document.querySelector(".arrow-left-nav"),
    rightNavArrow: document.querySelector(".arrow-right-nav"),
    selectedWeekRowDayNames: document.querySelectorAll(".week-day"),
    arrowsNavComponent: document.querySelector(".arrows-nav-component"),
    weekSection: document.querySelector(".week-section"),
    weekDays: document.querySelectorAll(".week-body"),
};
let daysOfSelectedWeek;
let weekNumber;
const getWeekParameter = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('week');
};
function isWeekParameterValid() {
    const weekParameter = getWeekParameter();
    const yearWeeks = [];
    for (let i = 0; i <= 52; i++) {
        yearWeeks.push(i);
    }
    return yearWeeks.includes(Number(weekParameter)) || weekParameter === null;
}
function getWeekNumber() {
    const weekParameter = getWeekParameter();
    const currentWeek = Math.round((today.getTime() - firstDayOfCurrentYearUTC.getTime()) / 60 / 60 / 24 / 7 / 1000);
    if (weekParameter === null) {
        weekNumber = currentWeek;
    }
    else {
        weekNumber = Number(weekParameter);
    }
    return weekNumber;
}
function appendHTMLIncorrectWeekParameterMessageAndHideElements() {
    elements.numOfWeekElement.textContent = `Cześć! Niestety, ale wprowadziłeś nieprawidłowy parametr "week" w adresie URL. Spróbuj ponownie :-)`;
    elements.arrowsNavComponent.classList.add("hide");
    elements.weekSection.classList.add("hide");
}
function getDaysOfSelectedWeek() {
    daysOfSelectedWeek = year2023WeeksAndDays[weekNumber];
    return daysOfSelectedWeek;
}
function appendHTMLYearAndWeekInfo() {
    elements.numOfWeekElement.innerHTML = `Rok: ${currentYear},<br>Tydzień: ${weekNumber}\n`;
}
function addDatesToWeekdays() {
    elements.selectedWeekRowDayNames.forEach((day, index) => {
        if (daysOfSelectedWeek[index] !== null) {
            day.innerText += `, ${daysOfSelectedWeek[index]}`;
        }
    });
}
function markCurrentDay() {
    const dayOfWeek = today.getDay();
    const todayDayMonthYearInfo = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    // Skorzystano z pomocy zewnętrznej w celu uproszczenia
    function getTableClassToMark(day) {
        switch (day) {
            case 0: return ".sunday";
            case 1: return ".monday";
            case 2: return ".tuesday";
            case 3: return ".wednesday";
            case 4: return ".thursday";
            case 5: return ".friday";
            case 6: return ".saturday";
        }
    }
    const tableClassToMark = getTableClassToMark(dayOfWeek);
    // END
    if (daysOfSelectedWeek.includes(todayDayMonthYearInfo)) {
        document.querySelector(tableClassToMark).classList.add("today");
    }
}
function searchForMeetings() {
    daysOfSelectedWeek.forEach((weekday, index) => {
        if (weekday === null) {
            return;
        }
        let getMonthThenDay = weekday.split("-").reverse();
        const [year, month, day] = getMonthThenDay;
        if (meetings[year] &&
            meetings[year][month] &&
            meetings[year][month][day]) {
            let thatDayMeeting = meetings[year][month][day];
            let weekdayMeetings = [];
            if (!Array.isArray(thatDayMeeting)) {
                weekdayMeetings.push(thatDayMeeting);
            }
            else {
                weekdayMeetings = thatDayMeeting.slice();
            }
            weekdayMeetings.forEach((meeting) => {
                const element = document.createElement("tr");
                const { time, desc, name } = meeting;
                element.innerHTML = `
                    <td>${time}</td>
                    <td>${desc}</td>
                    <td>${name}</td>                        
                `;
                elements.weekDays[index].appendChild(element);
            });
        }
    });
}
const makeLeftArrowWorking = () => {
    if (weekNumber > 0) {
        elements.leftNavArrow.addEventListener("click", () => {
            window.location.replace(`./?week=${--weekNumber}`);
        });
    }
    else {
        elements.leftNavArrow.disabled = true;
    }
};
const makeRightArrowWorking = () => {
    if (weekNumber < 52) {
        elements.rightNavArrow.addEventListener("click", () => {
            window.location.replace(`./?week=${++weekNumber}`);
        });
    }
    else {
        elements.rightNavArrow.disabled = true;
    }
};
function makeNavArrowsWorking() {
    makeLeftArrowWorking();
    makeRightArrowWorking();
}
function initializePageBuild() {
    if (isWeekParameterValid()) {
        getWeekNumber();
        getDaysOfSelectedWeek();
        appendHTMLYearAndWeekInfo();
        addDatesToWeekdays();
        markCurrentDay();
        searchForMeetings();
        makeNavArrowsWorking();
    }
    else {
        appendHTMLIncorrectWeekParameterMessageAndHideElements();
    }
}
initializePageBuild();
