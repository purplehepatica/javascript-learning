/** Those values could be added to object **/
const billInput = document.querySelector(".bill-input");
const numberOfPeopleInput = document.querySelector(".number-of-people-input");
const resetButton = document.querySelector(".reset");

const allPercentClassElements = document.querySelectorAll(".percent");
const inputElements = document.querySelectorAll("input");

const totalAmountSection = document.querySelector(".total");
const tipAmountSection = document.querySelector(".tip-amount");

let billInputValue = null;

let currentChoosenPercentElement = null;

let tipPercentInputValue = null;
let numberOfPeopleInputValue = null;



function addBillPartListener() {

  billInput.addEventListener("input", function() {

    billInputValue = Number(this.value);
    validateInputs(billInput, billInputValue);
  });
}



function addPercentsSectionListeners() {

  allPercentClassElements.forEach((item) => {

    let typeOfEventListener = null;

    if (item.classList.contains("custom")) {
      typeOfEventListener = "input";
    } else {
      typeOfEventListener = "click";
    }

    item.addEventListener(typeOfEventListener, function() {

      currentChoosenPercentElement = item;

      if (typeOfEventListener === "input") {
        tipPercentInputValue = Number(item.value);
      } else {
        tipPercentInputValue = item.getAttribute("data-tip-percent");
      }

      for (let thisPercent of allPercentClassElements) {
        thisPercent.classList.remove("active");
      }

      item.classList.add("active");

      validateInputs(currentChoosenPercentElement, tipPercentInputValue);
    })

  })
}



function addNumberOfPeoplePartListener() {

  numberOfPeopleInput.addEventListener("input", function() {

    numberOfPeopleInputValue = Number(this.value);
    validateInputs(numberOfPeopleInput, numberOfPeopleInputValue);
  })
}

function addEventListeners() {

  addBillPartListener();
  addPercentsSectionListeners();
  addNumberOfPeoplePartListener();

}

addEventListeners();



/** TO CLEANUP start **/

function validateInputs(input, inputValue) {

  resetButtonActiveClass();

  let textsPartClassParent = input.parentElement.parentElement.classList;
  let textsPartValidationElement = document.querySelector(`.${textsPartClassParent[0]} .validation`);

  if (isNaN(inputValue) === true || Number(inputValue) <= 0) {

    input.classList.remove("active");

    input.classList.add("invalid-input-value");

    if (inputValue === 0) {
      textsPartValidationElement.innerText = "Can't be zero";
    } else {
      textsPartValidationElement.innerText = "Must be a number";
    }

  }
  else {

    input.classList.remove("invalid-input-value");

    textsPartValidationElement.innerText = "";
  }

  validateEndValues();
}

/** TO CLEANUP end **/



function validateEndValues() {

/** TO DO BETTER start **/

  const valueValidation = {
    billInput: (isNaN(billInputValue) === true || Number(billInputValue) <= 0),
    tipPercentInput: (isNaN(tipPercentInputValue) === true || Number(tipPercentInputValue) <= 0),
    numberOfPeopleInput: (isNaN(numberOfPeopleInputValue) === true || Number(numberOfPeopleInputValue) <= 0)
  }

/** TO DO BETTER end **/

  if (valueValidation["billInput"] || valueValidation["tipPercentInput"] || valueValidation["numberOfPeopleInput"]) {
    updateFinalPrices(0);
  } else {
    updateFinalPrices(1)
  }
}



function updateFinalPrices(zero) {

  setTipAmountPerPerson(zero);
  setTotalAmountPerPerson(zero);
}



function setTipAmountPerPerson(zero) {

  if (zero === 0) {
    tipAmountSection.innerText = "$0.00";
    return;
  }

  const tipAmountPerPerson = billInputValue * (tipPercentInputValue / 100) / numberOfPeopleInputValue;

  tipAmountSection.innerText = `$${tipAmountPerPerson.toFixed(2)}`;
}



function setTotalAmountPerPerson(zero) {

  if (zero === 0) {
    totalAmountSection.innerText = "$0.00";
    return;
  }

  const fullTotalAmount = (billInputValue + (billInputValue * (tipPercentInputValue / 100)));
  const totalAmountPerPerson = fullTotalAmount / numberOfPeopleInputValue;

  totalAmountSection.innerText = `$${totalAmountPerPerson.toFixed(2)}`;
}



/** TO CLEANUP start **/

function resetButtonActiveClass() {

  if (inputElements[0].value !== "" || inputElements[1].value !== "" || inputElements[2].value !== "")  {
    resetButton.classList.add("active");
  } else {
    resetButton.classList.remove("active");
  }

  for (let percentClassElement of allPercentClassElements) {

    if (percentClassElement.classList.contains("active")) {
      resetButton.classList.add("active");
      return;
    }
  }

}

resetButton.addEventListener("click", function reset() {

  for (let input of inputElements) {
    input.value = "";
    input.classList.remove("invalid-input-value");

    tipAmountSection.innerText = "$0.00";
    totalAmountSection.innerText = "$0.00";

    for (let thisPercent of allPercentClassElements) {
      thisPercent.classList.remove("active");
    }

    for (let thisPercent of document.querySelectorAll(".validation")) {
      thisPercent.innerText = "";
    }
  }
});

/** TO CLEANUP end **/
