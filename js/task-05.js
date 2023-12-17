function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  const body = document.body;
  const span = document.querySelector(".color");
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
});
