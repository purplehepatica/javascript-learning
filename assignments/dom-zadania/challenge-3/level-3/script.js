/**
    OK 1. The year color is changing every 1 second
    OK 2. The date and time background color is changing every on seconds
    OK 3. Completed challenge has background green
    OK 4. Ongoing challenge has background yellow
    OK 5. Coming challenges have background red
**/

/** 1. The year color is changing every 1 second **/

let yearHeading = document.querySelector("h1");
yearHeading.innerHTML = "Asabeneh Yetayeh challenges in <span>2020</span>"

function changeYearColor() {
  const colors = ["red", "blue", "orange", "purple", "yellow", "green"];

  const index = Math.round(Math.random() * colors.length);
  document.querySelector("span").style.color = colors[index];
}

setInterval(changeYearColor, 1000)


/** 2. The date and time background color is changing every on seconds **/

const dateBlock = document.createElement("p");
dateBlock.innerHTML = new Date(Date.now()).toLocaleString("en-UK");
document.querySelector("h2").insertAdjacentElement("afterend", dateBlock);

function getCurrentDate() {

  const currentDate = new Date(Date.now()).toLocaleString("en-UK");
  document.querySelector(".date").innerHTML = currentDate;

}

setInterval(getCurrentDate, 1000);



function changeDateColor() {
  const colors = ["red", "blue", "orange", "purple", "yellow", "green"];

  const index = Math.round(Math.random() * colors.length);
  document.querySelector("p").style.backgroundColor = colors[index];
}

setInterval(changeDateColor, 1000)


/** 3. Completed challenge has background green
    4. Ongoing challenge has background yellow
    5. Coming challenges have background red
**/

const listElements = document.querySelectorAll("li");

for (let element of listElements) {

  if (element.innerText.includes("Done")) {
    element.style.backgroundColor = "green";
  } else if (element.innerText.includes("Ongoing")) {
    element.style.backgroundColor = "orange";
  } else if (element.innerText.includes("Coming")) {
    element.style.backgroundColor = "red";
  }

  element.style.padding = "25px";
  element.style.margin = "5px";
  element.style.listStyle = "none";
}

/** JavaScript Styling **/

document.querySelector("ul").style.width = "50%";
document.querySelector("ul").style.margin = "0 auto";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h2").style.textAlign = "center";
document.querySelector("h2").style.textDecoration = "underline";



document.querySelector(".wrapper").style.display = "flex";
document.querySelector(".wrapper").style.flexDirection = "column";

dateBlock.style.fontWeight = "bold";
dateBlock.style.textAlign = "center";
dateBlock.style.width = "20%";
dateBlock.style.margin = "0 auto 25px auto";
dateBlock.style.padding = "10px";
dateBlock.style.backgroundColor = "blue";
