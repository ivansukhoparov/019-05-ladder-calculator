import { dataSet } from './dataSet.js';
import validation from './validation.js';
import error from './error.js';

const rowTemplate = document.querySelector('#settings-table-row').content.querySelector('.table__row');
const targetTable = document.querySelector('#settings-table').querySelector('tbody');
const setButton = document.querySelector('#set-settings');
const closeButton = document.querySelector('#close-settings');

const renderRow = function (number, materialName, price, units) {
	const row = rowTemplate.cloneNode(true);
	row.querySelector('.table__col--number').textContent = number + '.';
	row.querySelector('.table__col--name').textContent = materialName;
	row.querySelector('.table__col--amount').textContent = '1 ' + units;
	row.querySelector('.settings__input').value = price;
	row.querySelector('.settings__input').id = 'material-' + number;
	return row;
};

const renderTable = function (dataSet) {
	const materialNames = dataSet.materialName;
	const prices = dataSet.prices;
	const units = dataSet.units;

	targetTable.textContent = '';

	materialNames.forEach((element, index) => {
		const row = renderRow(index + 1, element, prices[index], units[index]);
		targetTable.appendChild(row);
	});
};

const setSettinds = function () {
	const prices = targetTable.querySelectorAll('.settings__input');

	prices.forEach((element, index) => {
		const price = element.value;
		const validationPrice = validation.validationSettings(price);

		if (validationPrice === true) {
			dataSet.prices[index] = price;
		} else {
			error.showErrorTip(validationPrice, element, setButton, closeButton);
		}

		console.log(validationPrice);
	});
	renderTable(dataSet);
};

setButton.addEventListener('click', (evt) => {
	evt.preventDefault();
	setSettinds();
});

renderTable(dataSet);
