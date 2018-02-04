const modalContainer = document.querySelector('.modal_grid')

modalContainer.addEventListener('click', e => {

  const modalTrigger = e.target.closest('.modal_trigger');
  if (! modalTrigger) return;

  const modal = modalTrigger.parentNode.nextElementSibling;
  const closeModal = modal.querySelector('.modal_close');

  modal.style.display = "block";

  closeModal.addEventListener('click', e => {
    modal.style.display = "none";
  });

  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  };
})
