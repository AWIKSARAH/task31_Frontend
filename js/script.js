const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");

signInForm.classList.add("active");
signUpForm.classList.add("inactive");

const signInButton = document.querySelector(".sign-in-form button");
const signUpButton = document.querySelector(".sign-up-form button");

signInButton.addEventListener("click", () => {
  signInForm.classList.add("active");
  signUpForm.classList.add("inactive");
});

signUpButton.addEventListener("click", () => {
  signInForm.classList.remove("active");
  signUpForm.classList.remove("inactive");
});
