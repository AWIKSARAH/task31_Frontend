const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");
const signInLink = document.querySelector("#sign-in-link");
const signUpLink = document.querySelector("#sign-up-link");

signInLink.addEventListener("click", () => {
  registerForm.classList.toggle("flip");
  loginForm.classList.toggle("flip");
  registerForm.classList.add("none");
  loginForm.classList.remove("none");
});

signUpLink.addEventListener("click", () => {
  loginForm.classList.add("none");
  registerForm.classList.remove("none");
  registerForm.classList.toggle("flip");
  loginForm.classList.toggle("flip");
});

