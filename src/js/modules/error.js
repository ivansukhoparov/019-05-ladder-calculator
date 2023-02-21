const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const setCloseButton = function (element, submitButton, closeButton) {
	element.querySelector('button').addEventListener('click', () => {
		element.remove();
	});
	submitButton.addEventListener('click', () => {
		element.remove();
	});

	if (closeButton) {
		closeButton.addEventListener('click', () => {
			element.remove();
		});
	}
};

const showErrorTip = function (message, target, submitButton, closeButton) {
	if (message != true) {
		const errorTip = errorTemplate.cloneNode(true);

		errorTip.querySelector('span').textContent = message;
		setCloseButton(errorTip, submitButton, closeButton);
		document.querySelector('body').appendChild(errorTip);

		const messageBox = errorTip.getBoundingClientRect();
		const targetCoords = target.getBoundingClientRect();
		errorTip.style.left = targetCoords.x + targetCoords.width - messageBox.width + 'px';
		errorTip.style.top = targetCoords.y + targetCoords.height + 18 + 'px';
	}
};

export default { showErrorTip };
