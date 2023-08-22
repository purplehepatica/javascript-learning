let mainTabElement = null;
let tabElementHeadPart = null;
let tabDataObject = null;
let mainContent = null;

function setElementHTMLStructure() {

  tabElementHeadPart = document.createElement("div");
  tabElementHeadPart.classList.add("tabs-head-part");
  mainTabElement.appendChild(tabElementHeadPart);

  Object.keys(tabDataObject).forEach((key, index) => {

    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.classList.add(`tab-${index}`);

    const tabHeading = document.createElement("h2");
    tabHeading.textContent = key;
    tab.appendChild(tabHeading);

    const tabContent = document.createElement("p");
    tabContent.classList.add("content");
    tabContent.textContent = tabDataObject[key];
    tab.appendChild(tabContent);

    tabElementHeadPart.appendChild(tab);

  });

  mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  mainTabElement.appendChild(mainContent);

}

function addEventListeners() {

  document.querySelectorAll(".tab").forEach((tab, index) => {
    tab.addEventListener("click", function() {
      const tabs = document.querySelectorAll(".tab");
      for (let tab of tabs) {
        tab.classList.remove("active")
      };
      tab.classList.add("active");
      mainContent.textContent = tab.querySelector("p").textContent;
    });
  })

}

function setFirstTabAndContent() {
  const firstTab = document.querySelector(".tab:first-of-type");
  firstTab.classList.add("active");
  document.querySelector(".main-content").textContent = firstTab.querySelector("p").textContent;
}

function createTabsComponent(container, config) {

  mainTabElement = document.querySelector(container);
  tabDataObject = config;

  setElementHTMLStructure();
  addEventListeners();
  setFirstTabAndContent();

};
