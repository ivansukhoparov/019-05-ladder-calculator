import calc_functions from "./calc_functions.js";
import render_estimate from "./render_estimate.js";
import dataSet from './dataSet.js';

const data = dataSet.dataSet;

//  select form elements to get information to calculate
const heightInput = document.querySelector('#number-of-steps');
const legthInput = document.querySelector('#ladder-length');
const calculateButton = document.querySelector('#parameters-submit');

//  declare variables for each material in which calculated values will be stored
let foundationBlocks, decking, support, metalCorners, screws;

//  calculate amount for each material and store value to variables
const calculateAmount = function () {
    const ladderHeight = heightInput.value;
    const ladderLength = legthInput.value;
    foundationBlocks = calc_functions.calculateFoundations(ladderLength);
    decking = calc_functions.calculateDecking(ladderLength, ladderHeight);
    support = calc_functions.calculateSupports(ladderLength, ladderHeight);
    metalCorners = calc_functions.calculateCorners(ladderLength);
    screws = calc_functions.calculateScrews(ladderLength, ladderHeight);
};

//  store amounts to object data
const writeAmounts = function () {
    data.amounts[0] = foundationBlocks;
    data.amounts[1] = decking;
    data.amounts[2] = support;
    data.amounts[3] = support;
    data.amounts[4] = metalCorners;
    data.amounts[5] = screws;
};

const calculateCosts = function () {
    data.costs.forEach((element, index) => {
        data.costs[index] = data.amounts[index] * data.prices[index];
    })
};


calculateButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    calculateAmount();
    writeAmounts();
    calculateCosts();
    render_estimate.renderTable(data);
    console.log(data);

});

