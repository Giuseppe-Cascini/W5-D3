const overlay = document.querySelector('.overlay');
const scrivimi = document.querySelector('#scrivimi');
const closeModal = document.querySelector('.closeModal');

scrivimi.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.style.display = 'block';
});

closeModal.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.style.display = 'none';
});

