const printButton = document.querySelector('#print-button');

printButton.addEventListener('click', (evt) => {
	evt.preventDefault();
	window.print();
});
