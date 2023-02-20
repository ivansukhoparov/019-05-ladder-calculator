import { CURRENCY } from './dataSet.js';

const rowTemplate = document.querySelector('#estimate-table-row').content.querySelector('.table__row');
const targetTable = document.querySelector('#estimate-table').querySelector('tbody');

const renderRow = function (number, materialName, amount, units, cost, special) {
	const row = rowTemplate.cloneNode(true);
	row.querySelector('.table__col--number').textContent = number;
	row.querySelector('.table__col--name').textContent = materialName;
	row.querySelector('.table__col--amount').textContent = amount + ' ' + units;
	row.querySelector('.table__col--cost').textContent = cost + ' ' + CURRENCY;
	if (special) {
		row.querySelector('.table__col--number').classList.add(special);
		row.querySelector('.table__col--name').classList.add(special);
		row.querySelector('.table__col--amount').classList.add(special);
		row.querySelector('.table__col--cost').classList.add(special);
	}
	return row;
};

const renderTable = function (data) {
	const materialNames = data.materialName;
	const amounts = data.amounts;
	const units = data.units;
	const costs = data.costs;
	let row;

	targetTable.textContent = '';

	materialNames.forEach((element, index) => {
		row = renderRow(index + 1, element, amounts[index], units[index], costs[index]);
		targetTable.appendChild(row);
	});

	const totalMaterial = data.costs.slice().reduce((a, b) => a + b);
	row = renderRow('', 'Итого по материалам', '', '', totalMaterial, 'table__col--mat');
	targetTable.appendChild(row);

	const totalWork = Math.ceil(totalMaterial * 0.9);
	row = renderRow('', 'Итого по монтажу', '', '', totalWork, 'table__col--work');
	targetTable.appendChild(row);

	const total = totalMaterial + totalWork;
	row = renderRow('', '', 'ИТОГО:', '', total, 'table__col--total');
	targetTable.appendChild(row);
};

export default { renderTable };
