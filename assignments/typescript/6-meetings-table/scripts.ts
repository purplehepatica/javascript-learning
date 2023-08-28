import {
    year2023WeeksAndDays
} from './year2023WeeksAndDays.js';
import {
    meetings
} from './meetings.js';

import {
    Meeting, Meetings
} from './meetings';

const today: Date = new Date();
const currentYear: number = today.getFullYear();
const firstDayOfCurrentYearUTC: Date = new Date(Date.UTC(today.getFullYear(), 0, 1));

interface Elements {
    numOfWeekElement: HTMLHeadingElement,
    leftNavArrow: HTMLButtonElement,
    rightNavArrow: HTMLButtonElement,
    selectedWeekRowDayNames: NodeListOf<HTMLTableRowElement>,
    arrowsNavComponent: HTMLDivElement,
    weekSection: HTMLElement,
    weekDays: NodeListOf<HTMLTableSectionElement>
}

const elements: Elements = {
    numOfWeekElement: document.querySelector(".num-of-week")!,
    leftNavArrow: document.querySelector(".arrow-left-nav")!,
    rightNavArrow: document.querySelector(".arrow-right-nav")!,
    selectedWeekRowDayNames: document.querySelectorAll(".week-day")!,
    arrowsNavComponent: document.querySelector(".arrows-nav-component")!,
    weekSection: document.querySelector(".week-section")!,
    weekDays: document.querySelectorAll(".week-body")!,
}

let daysOfSelectedWeek: Array<null | string>;
let weekNumber: number;



const getWeekParameter = (): string | null => {

    const queryString: string = window.location.search;
    const urlParams: URLSearchParams = new URLSearchParams(queryString);

    return urlParams.get('week');
}

function isWeekParameterValid(): boolean {

    const weekParameter: string | null = getWeekParameter();

    const yearWeeks: number[] = [];
    for (let i: number = 0; i <= 52; i++) {
        yearWeeks.push(i);
    }

    return yearWeeks.includes(Number(weekParameter)) || weekParameter === null;
}

function getWeekNumber(): number {

    const weekParameter: string | null = getWeekParameter();
    const currentWeek: number = Math.round((today.getTime() - firstDayOfCurrentYearUTC.getTime()) / 60 / 60 / 24 / 7 / 1000);

    if (weekParameter === null) {
        weekNumber = currentWeek;
    } else {
        weekNumber = Number(weekParameter);
    }

    return weekNumber;
}

function appendHTMLIncorrectWeekParameterMessageAndHideElements(): void {

    elements.numOfWeekElement.textContent = `Cześć! Niestety, ale wprowadziłeś nieprawidłowy parametr "week" w adresie URL. Spróbuj ponownie :-)`;

    elements.arrowsNavComponent.classList.add("hide");
    elements.weekSection.classList.add("hide");
}

function getDaysOfSelectedWeek(): Array<null | string> {

    daysOfSelectedWeek = year2023WeeksAndDays[weekNumber];

    return daysOfSelectedWeek;
}

function appendHTMLYearAndWeekInfo(): void {

    elements.numOfWeekElement.innerHTML = `Rok: ${currentYear},<br>Tydzień: ${weekNumber}\n`;
}

function addDatesToWeekdays(): void {

    elements.selectedWeekRowDayNames.forEach((day: HTMLTableRowElement, index: number): void => {

        if (daysOfSelectedWeek[index] !== null) {

            day.innerText += `, ${daysOfSelectedWeek[index]}`;
        }
    });
}

function markCurrentDay(): void {

    const dayOfWeek: number = today.getDay();

    const todayDayMonthYearInfo: string = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

    // Skorzystano z pomocy zewnętrznej w celu uproszczenia
    function getTableClassToMark(day: 0 | 1 | 2 | 3 | 4 | 5 | 6): string {

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
    const tableClassToMark: string = getTableClassToMark(dayOfWeek as 0 | 1 | 2 | 3 | 4 | 5 | 6);
    // END

    if (daysOfSelectedWeek.includes(todayDayMonthYearInfo)) {

        document.querySelector(tableClassToMark)!.classList.add("today");
    }
}

function searchForMeetings(): void {

    daysOfSelectedWeek.forEach((weekday: string | null, index: number): void => {

        if (weekday === null) {
            return;
        }

        let getMonthThenDay: string[] = weekday.split("-").reverse();

        const [year, month, day]: [string, string, string] = getMonthThenDay as [string, string, string];

        if (meetings[year] &&
            meetings[year][month] &&
            meetings[year][month][day]) {


            let thatDayMeeting: Meeting | Meeting[] = meetings[year][month][day];
            let weekdayMeetings: Array<Meeting> = [];

            if (!Array.isArray(thatDayMeeting)) {
                weekdayMeetings.push(thatDayMeeting);
            } else {
                weekdayMeetings = thatDayMeeting.slice()
            }

            weekdayMeetings.forEach((meeting: Meeting): void => {
                const element: HTMLTableRowElement = document.createElement("tr");
                const {
                    time,
                    desc,
                    name
                } = meeting;

                element.innerHTML = `
                    <td>${time}</td>
                    <td>${desc}</td>
                    <td>${name}</td>                        
                `

                elements.weekDays[index].appendChild(element);
            })
        }
    })
}

const makeLeftArrowWorking = (): void => {

    if (weekNumber > 0) {
        elements.leftNavArrow.addEventListener("click", (): void => {

            window.location.replace(`./?week=${--weekNumber}`);
        });
    } else {
        elements.leftNavArrow.disabled = true;
    }
}

const makeRightArrowWorking = (): void => {

    if (weekNumber < 52) {
        elements.rightNavArrow.addEventListener("click", (): void => {

            window.location.replace(`./?week=${++weekNumber}`);
        });
    } else {
        elements.rightNavArrow.disabled = true;
    }
}

function makeNavArrowsWorking(): void {

    makeLeftArrowWorking();
    makeRightArrowWorking();
}



function initializePageBuild(): void {

    if (isWeekParameterValid()) {

        getWeekNumber();
        getDaysOfSelectedWeek();
        appendHTMLYearAndWeekInfo();

        addDatesToWeekdays();
        markCurrentDay();

        searchForMeetings();

        makeNavArrowsWorking();

    } else {
        appendHTMLIncorrectWeekParameterMessageAndHideElements();
    }


}

initializePageBuild();