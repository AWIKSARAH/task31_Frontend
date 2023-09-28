const navLinks = document.querySelectorAll(".nav > .link ");
const navToggle = document.querySelector(".toggle");

navToggle.addEventListener("click", function () {
  navLinks.forEach(function (navLink) {
    navLink.style.display = navLink.style.display === "none" ? "flex" : "none";
  });
});
