const rowTemplate = document.querySelector('#estimate-table-row').content.querySelector('.table__row');
const targetTable = document.querySelector("#estimate-table").querySelector('tbody');

const renderRow = function (number, materialName, amount, units, cost) {
    const row = rowTemplate.cloneNode(true);
    row.querySelector('.table__col--number').textContent = number;
    row.querySelector('.table__col--name').textContent = materialName;
    row.querySelector('.table__col--amount').textContent = amount + ' ' + units;
    row.querySelector('.table__col--cost').textContent = cost;
    return row;
}

const renderTable = function (data) {
    const materialNames = data.materialName;
    const amounts = data.amounts;
    const units = data.units;
    const costs = data.costs;
    console.log(amounts);
    targetTable.textContent = '';

    materialNames.forEach((element, index) => {
        const row = renderRow(index + 1, element, amounts[index], units[index], costs[index]);
        targetTable.appendChild(row);
    });
}

export default { renderTable }
