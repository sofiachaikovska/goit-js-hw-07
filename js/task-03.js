const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (evt) => {
  const trimmedValue = evt.target.value.trim();
  if (trimmedValue === "") {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = trimmedValue;
  }
});
