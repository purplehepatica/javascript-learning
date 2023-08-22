/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

const paragraphWords = document.querySelector("p").textContent.split(" ");

const changedParagraphWords = paragraphWords.map(element => {
  if (element.length >= 8) {
    return element = `<span>${element}</span>`;
  } else {
    return element;
  }
});

document.querySelector("p").innerHTML = changedParagraphWords.join(" ");
const spans = document.querySelectorAll("span");

for (let span of spans) {
    span.style.backgroundColor = "orange";
}

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/

const link = document.createElement("a");
link.setAttribute("href", "https://forcemipsum.com/");
link.textContent = "Original Source";
document.querySelector("body").append(link);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

const newLine = document.querySelector("p").textContent;
const changedLine = newLine.replaceAll(". ", ".<br />");
document.querySelector("p").innerHTML = changedLine;

/*
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

const wordCount = document.querySelector("p").textContent.split(" ").length;
const counterParagraph = document.createElement("span");
counterParagraph.innerText = `Number of words: ${wordCount}`;
document.querySelector("h1").appendChild(counterParagraph);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲)
*/

const findQuestionMark = document.querySelector("p").innerHTML;
const changedQuestionMarks = findQuestionMark.replaceAll("?", "&#129300;");
document.querySelector("p").innerHTML = changedQuestionMarks;

const findExclamationMark = document.querySelector("p").innerHTML;
const changedExclamationMarks = findExclamationMark.replaceAll("!", "&#128562;");
document.querySelector("p").innerHTML = changedExclamationMarks;
