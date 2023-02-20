const openButton = document.querySelector('#open-settings');
const closeButton = document.querySelector('#close-settings');
const modalWindow = document.querySelector('#settings-window');
const page = document.querySelector('.page');

const openModal = function () {
	modalWindow.classList.remove('modal--closed');
	page.classList.add('modal--open');
};

const closeModal = function () {
	modalWindow.classList.add('modal--closed');
	page.classList.remove('modal--open');
};

openButton.addEventListener('click', (evt) => {
	evt.preventDefault();
	openModal();
});

closeButton.addEventListener('click', (evt) => {
	evt.preventDefault();
	closeModal();
});
