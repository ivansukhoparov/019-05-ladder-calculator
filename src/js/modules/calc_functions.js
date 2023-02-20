const SUPPORT_PITCH = 0.6;
const SUPPORT_MIN_LENGTH = 0.3;
const DECKING_BOARD_PER_STEP = 2;
const METAL_CORNERS_PER_SUPPORT = 2;
const SCREWS_PER_DECKING = 2;
const SCREWS_PER_CORNER = 8;

/*  Group of functions that calculate amount of material for ladder
    All functions received one or two parameters:
    ladderLength : length of step in meters, number
    ladderHeight : count of steps, number
*/

const calculateFoundations = function (ladderLength) {
	return Math.ceil(ladderLength / SUPPORT_PITCH + 1);
	//  return count of foundation blocks in units
};

const calculateSupports = function (ladderLength, ladderHeight) {
	return Math.ceil((SUPPORT_MIN_LENGTH * ladderHeight) * calculateFoundations(ladderLength));
	//  return total length for all ladder supports in meters
};

const calculateDecking = function (ladderLength, ladderHeight) {
	return Math.ceil((ladderLength * DECKING_BOARD_PER_STEP) * ladderHeight);
	//  return total length for decking boards in meters
};

const calculateCorners = function (ladderLength) {
	return Math.ceil((calculateFoundations(ladderLength) * METAL_CORNERS_PER_SUPPORT) - 2);
	//  return total count for metal corners in units
};

const calculateScrews = function (ladderLength, ladderHeight) {
	const supportsCount = calculateFoundations(ladderLength);
	const boardsCount = ladderHeight * DECKING_BOARD_PER_STEP;
	const cornersCount = calculateCorners(ladderLength);

	return Math.ceil((boardsCount * supportsCount * SCREWS_PER_DECKING) + (cornersCount * SCREWS_PER_CORNER));
	//  return total count of screws for whole ladder
};

export default { calculateFoundations, calculateSupports, calculateDecking, calculateCorners, calculateScrews };
