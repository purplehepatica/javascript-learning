/** Level 1 **/

  /** 1 **/
  document.getElementsByTagName("p")[0];

  /** 2 **/
  document.querySelector("#first");
  document.querySelector("#second");
  document.querySelector("#third");
  document.querySelector("#fourth");

  /** 3 **/
  document.querySelectorAll("p")

  /** 4 **/
  let paragraphs = document.querySelectorAll("p");

  for (let paragraph of paragraphs) {
    console.log(paragraph.innerText)
  };

  /** 5 **/
  document.querySelector("#fourth").innerText = "Fourth paragraph" ;

  /** 6 **/
  let paragraphs = document.getElementsByTagName("p");

  for (let paragraph of paragraphs) {
    paragraph.setAttribute("id", "notUnique");
    paragraph.classList.add("myClass");
  }

/** Level 2 **/

  /** 1 **/
  let paragraphs = document.getElementsByTagName("p");

  for (let paragraph of paragraphs) {
    paragraph.style.color = "red"
    paragraph.style.backgroundColor = "blue";
    paragraph.style.paddingTop = "20px"
  }

  /** 2 **/
  let elements = document.getElementsByTagName("p");

  for (let i = 0; i < elements.length; i++) {
  if (i === 0 || i === 2) {
    elements[i].style.color = "green";
  } else if (i === 1 || i === 3) {
    elements[i].style.color = "red";
  }
}

  /** 3 **/
  const paragraphs = document.querySelectorAll("p");

  for (let paragraph of paragraphs) {
    paragraph.innerText = "My new text";
      paragraph.setAttribute("id", "myNewID");
      paragraph.classList.add("myNewClass");
  }
