import dataSet from './dataSet.js';
const data = dataSet.dataSet;

const rowTemplate = document.querySelector('#settings-table-row').content.querySelector('.table__row');
const targetTable = document.querySelector("#settings-table").querySelector('tbody');
const setButton = document.querySelector('#set-settings');

const renderRow = function (number, materialName, price, unit) {
    const row = rowTemplate.cloneNode(true);
    row.querySelector('.table__col--number').textContent = number + '.';
    row.querySelector('.table__col--name').textContent = materialName;
    row.querySelector('.settings__input').value = price;
    row.querySelector('.settings__input').id = 'material-' + number;
    return row;
}

const renderTable = function (data) {
    const materialNames = data.materialName;
    const prices = data.prices;

    targetTable.textContent = '';

    materialNames.forEach((element, index) => {
        const row = renderRow(index + 1, element, prices[index]);
        targetTable.appendChild(row);
    });
}

const setSettinds = function () {
    const prices = targetTable.querySelectorAll('.settings__input');
    prices.forEach((element, index) => {
        data.prices[index] = element.value;
    });
    renderTable(data);
};

setButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    setSettinds();
})

renderTable(data);

