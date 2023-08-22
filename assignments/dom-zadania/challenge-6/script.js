/** Stwórz program, który będzie po kliknięciu przycisku Change losował dowolny kolor RGB i na podstawie wylosowanej wartości, zmieniał tło strony. **/

function changeBackgroundColor() {

  const x = Math.round(Math.random() * 255);
  const y = Math.round(Math.random() * 255);
  const z = Math.round(Math.random() * 255);

  const color = `rgb(${x}, ${y}, ${z})`

  document.querySelector("body").style.backgroundColor = color;

}

const button = document.querySelector("input");
button.addEventListener("click", changeBackgroundColor)
