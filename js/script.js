const myModal = document.getElementById('myModal');
const myInput = document.getElementById('modalContactForm');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
