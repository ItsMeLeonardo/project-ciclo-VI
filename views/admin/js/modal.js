const btnCancel = document.querySelectorAll('.cancel-modal'),
  btnAddProduct = document.querySelector('#add-product'),
  btnEditProduct = document.querySelectorAll('.product__edit'),
  btnRemoveProduct = document.querySelectorAll('.product__remove'),
  modalForm = document.querySelector('#modal-form'),
  modalConfirm = document.querySelector('#modal-confirm');


// show all modals
btnAddProduct.addEventListener('click', () => {
  modalForm.classList.remove('hidden');
});
btnEditProduct.forEach(btn => {
  btn.addEventListener('click', () => {
    modalForm.classList.remove('hidden');
  })
})
btnRemoveProduct.forEach(btn => {
  btn.addEventListener('click', () => {
    modalConfirm.classList.remove('hidden');
  })
})
// close modal
btnCancel.forEach(btn => {
  btn.addEventListener('click', () => {
    modalForm.classList.add('hidden');
    modalConfirm.classList.add('hidden');
  })
})