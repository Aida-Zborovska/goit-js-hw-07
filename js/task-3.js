const inputElem = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");
inputElem.addEventListener("input", () => {
  const name = inputElem.value.trim();
  if (name === "") {
    spanElem.textContent = "Anonymous";
  } else {
    spanElem.textContent = name;
  }
});
