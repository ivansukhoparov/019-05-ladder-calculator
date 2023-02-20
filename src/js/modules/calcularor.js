import calc_functions from "./calc_functions.js";
import render_estimate from "./render_estimate.js";
import { dataSet } from './dataSet.js';
import svgJs from "./svg-js.js";
import validation from "./validation.js";
import error from "./error.js";

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
    dataSet.amounts[0] = foundationBlocks;
    dataSet.amounts[1] = decking;
    dataSet.amounts[2] = support;
    dataSet.amounts[3] = support;
    dataSet.amounts[4] = metalCorners;
    dataSet.amounts[5] = screws;
};

const calculateCosts = function () {
    dataSet.costs.forEach((element, index) => {
        dataSet.costs[index] = dataSet.amounts[index] * dataSet.prices[index];
    })
};


calculateButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const ladderHeight = heightInput.value;
    const ladderLength = legthInput.value;
    const validationHeight = validation.validationLadderHeight(ladderHeight)
    const validationLength = validation.validationLadderLength(ladderLength)
    if (validationHeight === true && validationLength === true) {
        evt.preventDefault();
        calculateAmount();
        writeAmounts();
        calculateCosts();
        svgJs.draw(ladderHeight, ladderLength);
        render_estimate.renderTable(dataSet);
    } else {
        error.showErrorTip(validationHeight, heightInput, calculateButton)
        error.showErrorTip(validationLength, legthInput, calculateButton)
    }


});

