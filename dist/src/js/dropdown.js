const button = document.querySelector('.header__btn-help');
const dropdown = document.querySelector('.dropdown');

button.addEventListener('click', () => {
	dropdown.classList.toggle('dropdown--visible');
});
