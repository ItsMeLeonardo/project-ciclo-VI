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
/* ========== Chat show ========== */
const chatShow = document.querySelector("#chat__show"),
  chatClose = document.querySelector("#chat__close"),
  chat = document.querySelector("#chat");
if (chatShow && chatClose) {
  chatShow.addEventListener("click", () => {
    chat.classList.toggle("chat__visible");
  });
  chatClose.addEventListener("click", () => {
    chat.classList.remove("chat__visible");
  });

  // writer in chat
  const chatWriter = document.querySelector("#chat-writer"),
    sendBtn = document.querySelector('#send-message'),
    boxMessage = document.querySelector('#box-message'),
    d = document.querySelector('#d');
    
  const classRequest = 'chat__box chat__message--request',
    classResponse = 'chat__box chat__message--response',
    classMessage = 'chat__message';

  sendBtn.addEventListener("click", () => {
    let message = chatWriter.value;
    d.textContent = message;
  })
}
