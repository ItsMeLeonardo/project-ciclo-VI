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
/* ========== recent products ========== */
let offerSwiper = new Swiper(".offer", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".offer__btn-next",
    prevEl: ".offer__btn-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
