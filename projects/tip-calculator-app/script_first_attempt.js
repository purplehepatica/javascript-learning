


document.querySelector(".bill-input").addEventListener("input", function() {
  tipAmount(selectedTipValue)
  totalAmount(selectedTipValue)
})


const billInput = () => {
  const billValue = document.querySelector(".bill-input").value;

  if (isNaN(billValue) === true || Number(billValue < 0)) {
    return null;
  }

  return Number(billValue);
}


document.querySelector(".number-of-people-input").addEventListener("input", function() {
  tipAmount(selectedTipValue)
  totalAmount(selectedTipValue)
})




const numberOfPeople = () => {
  const numberOfPeople = document.querySelector(".number-of-people-input").value;

  if (isNaN(numberOfPeople) === true || Number(numberOfPeople < 0)) {
    return null;
  }

  return Number(numberOfPeople);
}


let selectedTipValue = 0;

const tipPercentages = document.querySelector(".tip-percentage").querySelectorAll(".percent-button");

/** W trakcie upraszania **/


tipPercentages.forEach((element, index) => {
  element.addEventListener("click", function() {

    const tipPercent = element.getAttribute("data-tip-percent");

    const allPercentItems = document.querySelectorAll(".percent");
    for (let thisPercent of allPercentItems) {
      thisPercent.classList.remove("active");
    }
    element.classList.add("active");

    selectedTipValue = tipPercent;
    tipAmount((tipPercent))
    totalAmount(tipPercent);
  })
});



/**

document.querySelector(".custom").addEventListener("click", function() {

  selectedTipValue = document.querySelector(".custom").value;

  const allPercentItems = document.querySelectorAll(".percent");
  for (let thisPercent of allPercentItems) {
    thisPercent.classList.remove("active");
  }

  document.querySelector(".custom").classList.add("active");

  const customTipValue = document.querySelector(".custom").value;
  tipAmount(customTipValue);
  totalAmount(customTipValue);

  return selectedTipValue;
})



**/


function tipAmount(tipValue) {

  if (billInput() === null || billInput() === 0) {
    document.querySelector(".tip-amount").innerText = "$0.00";
    return "$0.00"
  };

  if (numberOfPeople() === null || numberOfPeople() === 0) {
    document.querySelector(".tip-amount").innerText = "$0.00";
    return "$0.00"
  };

  if (tipValue === null || tipValue < 0) {
    document.querySelector(".tip-amount").innerText = "$0.00";
    return "$0.00"
  };

  const tipAmountPerPerson = billInput() * (tipValue / 100) / numberOfPeople();
  document.querySelector(".tip-amount").innerText = `$${tipAmountPerPerson.toFixed(2)}`;
  return `$${tipAmountPerPerson.toFixed(2)}`
}



function totalAmount(tipValue) {

  if (billInput() === null || billInput() === 0) {
    document.querySelector(".total").innerText = "$0.00";
    return "$0.00"
  };

  if (numberOfPeople() === null || numberOfPeople() === 0) {
    document.querySelector(".total").innerText = "$0.00";
    return "$0.00"
  };

  if (tipValue === null || tipValue < 0) {
    document.querySelector(".total").innerText = "$0.00";
    return "$0.00"
  };

  const totalAmountPerPerson = (billInput() + (billInput() * (tipValue / 100))) / numberOfPeople();

  document.querySelector(".total").innerText = `$${totalAmountPerPerson.toFixed(2)}`;
  return `$${totalAmountPerPerson.toFixed(2)}`
}


document.querySelector(".reset").addEventListener("click", reset);

function reset() {
  const inputs = document.querySelectorAll("input");

  for (let input of inputs) {
    input.value = "";
    document.querySelector(".tip-amount").innerText = "$0.00";
    document.querySelector(".total").innerText = "$0.00";

    const allPercentItems = document.querySelectorAll(".percent");
    for (let thisPercent of allPercentItems) {
      thisPercent.classList.remove("active");
    }
  }
}
