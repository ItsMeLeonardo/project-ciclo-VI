/* ========== Show form of pay ========== */
const btnShowForm = document.querySelector('#show-form'),
  formPay = document.querySelector('#pay-view'),
  btnCloseForm = document.querySelector('#close-form');

btnShowForm.addEventListener('click', () => {
  formPay.classList.toggle('pay--active');
});
btnCloseForm.addEventListener('click', () => {
  formPay.classList.remove('pay--active');
});

/* ========== Change img of card ========== */
const iconCards = document.querySelectorAll('.pay__card-icon'),
  cardImg = document.querySelector('#card-img'),
  svgCards = document.querySelectorAll('.pay__card-icon svg path');

iconCards.forEach( i => {
  i.addEventListener('click', () => {
    cardImg.src = `assets/img/target-${i.dataset.card}.webp`;
    svgCards.forEach( j => {
      j.classList.remove('pay__icon--active');
    });
    i.firstElementChild.firstElementChild.classList.add('pay__icon--active');
  });
});

/* ==========the user want delivery? ========== */
const delivery = document.querySelector('#delivery'),
  formDelivery = document.querySelector('.form__delivery'),
  btnPickOnSite = document.querySelector('#btn-alternate');

delivery.addEventListener('change', (e) => {
  if (e.target.checked) {
    formDelivery.classList.add('form__disabled')
    btnPickOnSite.classList.remove('hidden')
  }else{
    formDelivery.classList.remove('form__disabled')
    btnPickOnSite.classList.add('hidden')
  }
});
