/* ========== Navbar show ========== */
const navToggle = document.querySelector("#nav__toggle"),
  navClose = document.querySelector("#nav__close"),
  navMenu = document.querySelector("#nav__menu");

if (navToggle && navClose && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__visible");
  });
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("nav__visible");
  });
}
