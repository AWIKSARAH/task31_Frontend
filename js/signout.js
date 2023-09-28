const signOutBtn = document.querySelector(".logout");

signOutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.replace("/");
});
