function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElem = document.querySelector(".change-color");
const spanElem = document.querySelector(".color");
const bodyElem = document.querySelector("body");

btnElem.addEventListener("click", () => {
  bodyElem.style.background = getRandomHexColor();
  spanElem.textContent = getRandomHexColor();
});
