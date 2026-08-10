const menuKnap = document.querySelector(".menu-knap");
const nav = document.querySelector("nav");

menuKnap.addEventListener("click", function () {
  nav.classList.toggle("vis");
});
