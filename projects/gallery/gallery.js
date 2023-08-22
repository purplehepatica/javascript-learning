/* Myślę, że mógłbym to od razu lepiej zapisać i to w dodatku przy użyciu const */

let currentThumbnail = null;
let arrayOfImagesLength = null;
let mainGalleryElement = null;
let imagesArray = null;
let mainImageSection = null;
let thumbnailsSection = null;
let navigationArrows = null;
let rightArrow = null;
let leftArrow = null;


const arrowColors = {
  leftGray: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='gray' class='bi bi-caret-left-fill' viewBox='0 0 16 16'%3E%3Cpath d='m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z'/%3E%3C/svg%3E")`,
  rightGray: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='gray' class='bi bi-caret-right-fill' viewBox='0 0 16 16'%3E%3Cpath d='m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z'/%3E%3C/svg%3E")`,
  leftWhite: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-caret-left-fill' viewBox='0 0 16 16'%3E%3Cpath d='m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z'/%3E%3C/svg%3E")`,
  rightWhite: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-caret-right-fill' viewBox='0 0 16 16'%3E%3Cpath d='m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z'/%3E%3C/svg%3E")`
}

function setElementHTMLStructure() {

  mainGalleryElement.classList.add("gallery-parent-element");

  thumbnailsSection = document.createElement("div");
  thumbnailsSection.classList.add("gallery-thumbnails");
  mainGalleryElement.appendChild(thumbnailsSection);

  mainImageSection = document.createElement("div");
  mainImageSection.classList.add("gallery-main-image");
  mainGalleryElement.appendChild(mainImageSection);

  imagesArray.forEach((url, index) => {

    const thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");
    thumbnail.classList.add(`thumbnail-${index}`);
    thumbnail.style.backgroundImage = `url(${url})`;
    thumbnailsSection.appendChild(thumbnail);

  });

}

function setFirstImageAndContent() {

  mainImageSection.style.backgroundImage = thumbnailsSection.querySelector(".thumbnail").style.backgroundImage;
  currentThumbnail = 0;

}

function setArrowsHTMLStructure() {

  navigationArrows = document.createElement("div");
  navigationArrows.classList.add("arrows-container");
  mainImageSection.appendChild(navigationArrows);

  leftArrow = document.createElement("div");
  leftArrow.classList.add("arrows");
  leftArrow.classList.add("left-arrow");
  navigationArrows.appendChild(leftArrow);

  rightArrow = document.createElement("div");
  rightArrow.classList.add("arrows");
  rightArrow.classList.add("right-arrow");
  navigationArrows.appendChild(rightArrow);

}

function addEventListeners() {

  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function() {
      mainImageSection.style.backgroundImage = thumbnail.style.backgroundImage;
      currentThumbnail = index;
      setArrowsPointerAndLink()
    });
  })

  mainImageSection.addEventListener("mouseenter", function() {
    navigationArrows.style.display = "flex";
  })

  mainImageSection.addEventListener("mouseleave", function() {
    navigationArrows.style.display = "none";
  })

  leftArrow.addEventListener("click", function() {
    if (currentThumbnail > 0) {
      mainImageSection.style.backgroundImage = document.querySelector(`.thumbnail-${currentThumbnail - 1}`).style.backgroundImage;
      currentThumbnail -= 1;
      setArrowsPointerAndLink();
    }
  })

  rightArrow.addEventListener("click", function() {
    if (currentThumbnail < arrayOfImagesLength - 1) {
      mainImageSection.style.backgroundImage = document.querySelector(`.thumbnail-${currentThumbnail + 1}`).style.backgroundImage;
      currentThumbnail += 1;
      setArrowsPointerAndLink();
    }
  })

}

function setArrowsPointerAndLink() {

  if (currentThumbnail === 0) {
    leftArrow.style.cursor = "not-allowed";
    leftArrow.style.backgroundImage = arrowColors["leftGray"];

    rightArrow.style.cursor = "pointer";
    rightArrow.style.backgroundImage = arrowColors["rightWhite"];
  } else if (currentThumbnail > 0 && currentThumbnail < arrayOfImagesLength - 1) {
    leftArrow.style.cursor = "pointer";
    leftArrow.style.backgroundImage = arrowColors["leftWhite"];

    rightArrow.style.backgroundImage = arrowColors["rightWhite"];
    rightArrow.style.cursor = "pointer";
  } else if (currentThumbnail === arrayOfImagesLength - 1) {
    leftArrow.style.cursor = "pointer";
    leftArrow.style.backgroundImage = arrowColors["leftWhite"];

    rightArrow.style.cursor = "not-allowed";
    rightArrow.style.backgroundImage = arrowColors["rightGray"];
  }
}

function createGallery(containerHtmlElement, arrayOfImages) {

  arrayOfImagesLength = arrayOfImages.length;

  mainGalleryElement = document.querySelector(containerHtmlElement);
  imagesArray = arrayOfImages;

  setElementHTMLStructure();
  setFirstImageAndContent();

  setArrowsHTMLStructure();
  setArrowsPointerAndLink();

  addEventListeners();

}
