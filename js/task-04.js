const form = document.querySelector(".login-form");
form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const emailInput = form.elements["email"].value.trim();
  const passwordInput = form.elements["password"].value.trim();

  if (emailInput === "" || passwordInput === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: emailInput,
      password: passwordInput,
    };
    console.log(formData);
    form.reset();
  }
}
