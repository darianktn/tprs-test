const loginButton = document.querySelector('.login-button');
const modalOverlay = document.querySelector('.modal__overlay');
const body = document.body;

const openModal = () => {
	modalOverlay.classList.add('modal__overlay--visible');
	body.style.overflow = 'hidden';
};

const closeButton = document.querySelector('.modal__close');

const closeModal = () => {
	modalOverlay.classList.remove('modal__overlay--visible');
	body.style.overflow = 'auto';
};

loginButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		closeModal();
	}
});
