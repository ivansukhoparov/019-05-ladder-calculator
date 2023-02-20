import { HEIGHT_VALUE_ERROR, LENGTH_VALUE_ERROR, PRICE_ERROR } from "./dataSet.js";



const validationSettings = function (value) {
    if ((Number.isInteger(value * 1))) {
        return true
    } else {
        return PRICE_ERROR;
    }
}

const validationLadderLength = function (value) {
    if ((0.5 <= value) && (value <= 6)) {
        return true
    } else {
        return LENGTH_VALUE_ERROR;
    }
}

const validationLadderHeight = function (value) {
    if ((1 <= value) && (value <= 7) && (Number.isInteger(value * 1))) {
        return true
    } else {
        return HEIGHT_VALUE_ERROR;
    }
}

export default { validationLadderHeight, validationLadderLength, validationSettings }