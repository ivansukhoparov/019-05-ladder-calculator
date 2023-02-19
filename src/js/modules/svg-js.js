const MULTYPLICATOR = 3;
const BASE_HEIGHT = 200 / MULTYPLICATOR;
const BASE_DEPTH = 250 / MULTYPLICATOR;
const BASE_WIDTH = 50 / MULTYPLICATOR;

const FILL_COLOR_BOARD = '#b79055';
const FILL_COLOR_FOUND = '#c3c3c3';
const STROKE_COLOR = '#000';

let ns = 'http://www.w3.org/2000/svg'
let drawingAreaSide = document.querySelector('#side-view');
let drawingAreaFront = document.querySelector('#front-view');
let blueprintSide = document.createElementNS(ns, 'svg');
let blueprintFront = document.createElementNS(ns, 'svg');

// Set one board
const createBoardSide = function (x, y) {
    let board = document.createElementNS(ns, 'rect')
    board.setAttributeNS(null, 'width', BASE_DEPTH / 1.65)
    board.setAttributeNS(null, 'height', BASE_HEIGHT / 5)
    board.setAttributeNS(null, 'x', x)
    board.setAttributeNS(null, 'y', y)
    board.setAttributeNS(null, 'fill', FILL_COLOR_BOARD)
    board.setAttributeNS(null, 'stroke', STROKE_COLOR)
    blueprintSide.appendChild(board)
};

const createBoardFront = function (x, y, length) {
    let board = document.createElementNS(ns, 'rect');
    board.setAttributeNS(null, 'width', length + BASE_WIDTH * 3);
    board.setAttributeNS(null, 'height', BASE_HEIGHT / 5);
    board.setAttributeNS(null, 'x', x);
    board.setAttributeNS(null, 'y', y);
    board.setAttributeNS(null, 'fill', FILL_COLOR_BOARD);
    board.setAttributeNS(null, 'stroke', STROKE_COLOR);
    blueprintFront.appendChild(board);
}

//  draw support
const createSupportSide = function (path) {
    let support = document.createElementNS(ns, 'polygon')
    support.setAttributeNS(null, 'points', path)
    support.setAttributeNS(null, 'fill', FILL_COLOR_BOARD)
    support.setAttributeNS(null, 'stroke', STROKE_COLOR)
    blueprintSide.appendChild(support)
};

const createSupportFront = function (x, y) {
    let board = document.createElementNS(ns, 'rect');
    board.setAttributeNS(null, 'width', BASE_WIDTH);
    board.setAttributeNS(null, 'height', BASE_HEIGHT - BASE_HEIGHT / 5);
    board.setAttributeNS(null, 'x', x);
    board.setAttributeNS(null, 'y', y);
    board.setAttributeNS(null, 'fill', FILL_COLOR_BOARD);
    board.setAttributeNS(null, 'stroke', STROKE_COLOR);
    blueprintFront.appendChild(board);
}

//  draw foundation block
const createFoundationSide = function (x, y) {
    let board = document.createElementNS(ns, 'rect')
    board.setAttributeNS(null, 'width', BASE_DEPTH / 0.83)
    board.setAttributeNS(null, 'height', BASE_HEIGHT)
    board.setAttributeNS(null, 'x', x)
    board.setAttributeNS(null, 'y', y)
    board.setAttributeNS(null, 'fill', FILL_COLOR_FOUND)
    board.setAttributeNS(null, 'stroke', STROKE_COLOR)
    blueprintSide.appendChild(board)
};

const createFoundationFront = function (x, y) {
    let board = document.createElementNS(ns, 'rect');
    board.setAttributeNS(null, 'width', BASE_HEIGHT);
    board.setAttributeNS(null, 'height', BASE_HEIGHT);
    board.setAttributeNS(null, 'x', x);
    board.setAttributeNS(null, 'y', y);
    board.setAttributeNS(null, 'fill', FILL_COLOR_FOUND);
    board.setAttributeNS(null, 'stroke', STROKE_COLOR);
    blueprintFront.appendChild(board);
}

//  draw line
const createLine = function (x1, y1, x2, y2, area) {
    let board = document.createElementNS(ns, 'line')
    board.setAttributeNS(null, 'x1', x1)
    board.setAttributeNS(null, 'y1', y1)
    board.setAttributeNS(null, 'x2', x2)
    board.setAttributeNS(null, 'y2', y2)
    board.setAttributeNS(null, 'stroke', STROKE_COLOR)
    area.appendChild(board)
};

//  renderBlueprints (BP)
const renderSideBP = function (ladderHeight) {
    const canvasHeight = ladderHeight * BASE_HEIGHT + BASE_HEIGHT * 3;
    const canvasWidth = ladderHeight * BASE_DEPTH + BASE_DEPTH * 3;
    const basePoint = [BASE_DEPTH, (canvasHeight - BASE_HEIGHT)];
    let support_200_Path, support_100_Path;
    blueprintSide.textContent = '';
    blueprintSide.setAttributeNS(null, 'viewBox', '0 0 ' + canvasWidth + ' ' + canvasHeight)
    drawingAreaSide.appendChild(blueprintSide)

    // Set support 200 mm path
    // Set start point to base point
    let pathPoint = basePoint.slice()
    support_200_Path = basePoint[0] + ',' + basePoint[1] + ' ';
    // Draw steps 
    for (let i = 0; i < ladderHeight; i++) {
        pathPoint[1] = pathPoint[1] - BASE_HEIGHT;
        support_200_Path = support_200_Path + pathPoint[0] + ',' + pathPoint[1] + ' ';
        pathPoint[0] = pathPoint[0] + BASE_DEPTH;
        support_200_Path = support_200_Path + pathPoint[0] + ',' + pathPoint[1] + ' ';
    }
    // set upper support point
    pathPoint[1] = pathPoint[1] + BASE_HEIGHT / 4;
    support_200_Path = support_200_Path + pathPoint[0] + ',' + pathPoint[1] + ' ';
    //  set lower support point
    pathPoint[1] = basePoint[1];
    pathPoint[0] = basePoint[0] + BASE_DEPTH / 4;
    support_200_Path = support_200_Path + pathPoint[0] + ',' + pathPoint[1] + ' ';
    //  draw support 200 mm
    createSupportSide(support_200_Path)

    // Set support 100 mm path
    //  set first lower support point
    pathPoint = basePoint.slice()
    pathPoint[0] = pathPoint[0] + BASE_DEPTH / 4;
    support_100_Path = (pathPoint[0]) + ',' + pathPoint[1] + ' ';
    //  set secont lower support point
    pathPoint[0] = pathPoint[0] + BASE_DEPTH / 1.64;
    support_100_Path = support_100_Path + pathPoint[0] + ',' + pathPoint[1] + ' ';
    //  set first upper support point
    pathPoint[0] = basePoint[0] + BASE_DEPTH * ladderHeight;
    pathPoint[1] = basePoint[1] - BASE_HEIGHT * ladderHeight + BASE_HEIGHT / 1.17;
    support_100_Path = support_100_Path + pathPoint[0] + ',' + pathPoint[1] + ' ';
    //  set second upper support point
    pathPoint[1] = basePoint[1] - BASE_HEIGHT * ladderHeight + BASE_HEIGHT / 4;
    support_100_Path = support_100_Path + pathPoint[0] + ',' + pathPoint[1] + ' ';
    //  draw support 100 mm
    createSupportSide(support_100_Path)

    //  calculate base point for each steps and offset for second decking board
    let xBoard = basePoint[0] - BASE_DEPTH / 5;
    let yBoard = basePoint[1] - BASE_HEIGHT - BASE_HEIGHT / 5;
    let xOffsetSecondBoard = BASE_DEPTH / 1.66;
    //  draw two decking boards for each step
    for (let i = 0; i <= ladderHeight; i++) {
        let xOffset = BASE_DEPTH * i;
        let yOffset = BASE_HEIGHT * i;
        let lastOffset = BASE_HEIGHT / 5;
        // check number of step, and if it's over last step (terrase decking) add adittional offset
        if (i != ladderHeight) {
            createBoardSide(xBoard + xOffset, yBoard - yOffset)
            createBoardSide(xBoard + xOffset + xOffsetSecondBoard, yBoard - yOffset)
        } else {
            createBoardSide(xBoard + xOffset + lastOffset, yBoard - yOffset)
            createBoardSide(xBoard + xOffset + lastOffset + xOffsetSecondBoard, yBoard - yOffset)
        }

    }
    //  draw foundation block
    createFoundationSide(basePoint[0], basePoint[1] - BASE_HEIGHT / 5);

    //  draw ground
    //  draw ground first line
    let x1 = basePoint[0];
    let y1 = basePoint[1] + BASE_HEIGHT / 20;
    let x2 = x1 - BASE_DEPTH / 2;
    let y2 = y1;
    createLine(x1, y1, x2, y2, blueprintSide);
    //  draw ground second line
    x1 = basePoint[0] + BASE_DEPTH / 0.83;
    y1 = basePoint[1] + BASE_HEIGHT / 20;
    x2 = x1 + BASE_DEPTH * ladderHeight;
    y2 = y1;
    createLine(x1, y1, x2, y2, blueprintSide);

    //  draw wall line
    x1 = basePoint[0] + BASE_DEPTH * ladderHeight;
    y1 = basePoint[1] + BASE_HEIGHT / 20;
    x2 = x1;
    y2 = basePoint[1] - BASE_HEIGHT * (ladderHeight) - BASE_HEIGHT;
    createLine(x1, y1, x2, y2, blueprintSide);

};

const renderFrontBP = function (ladderHeight, ladderLength) {
    const canvasHeight = ladderHeight * BASE_HEIGHT + BASE_HEIGHT * 3;
    const canvasWidth = ladderLength * BASE_WIDTH * 20 + BASE_WIDTH * 6;
    const basePoint = [BASE_WIDTH * 3, (canvasHeight - BASE_HEIGHT)];

    blueprintFront.textContent = '';
    blueprintFront.setAttributeNS(null, 'viewBox', '0 0 ' + canvasWidth + ' ' + canvasHeight);
    drawingAreaFront.appendChild(blueprintFront);

    // set base point for steps
    const xBoard = basePoint[0] - BASE_WIDTH;
    const yBoard = basePoint[1] - BASE_HEIGHT - BASE_HEIGHT / 5;
    //  draw steps
    for (let i = 0; i <= ladderHeight; i++) {
        const yOffset = BASE_HEIGHT * i;
        createBoardFront(xBoard, yBoard - yOffset, ladderLength * BASE_WIDTH * 20)
    }

    //calculatenumber of supports
    const supportsCount = Math.ceil(ladderLength / 0.6) + 1;
    const supportsOffset = ladderLength * BASE_WIDTH * 20 / (supportsCount - 1);
    //draw supports
    for (let i = 0; i < supportsCount; i++) {
        const xOffset = supportsOffset * i;
        const x = basePoint[0] + xOffset;
        for (let j = 0; j < ladderHeight; j++) {
            const yOffset = BASE_HEIGHT * j;
            const y = basePoint[1] - BASE_HEIGHT - yOffset;
            createSupportFront(x, y);
        }
    }

    //draw foundations
    for (let i = 0; i < supportsCount; i++) {
        const xOffset = supportsOffset * i;
        const x = basePoint[0] - BASE_HEIGHT / 2 + BASE_WIDTH / 2 + xOffset;
        const y = basePoint[1] - BASE_HEIGHT / 5;
        createFoundationFront(x, y)
    }

    //  draw ground
    //  draw ground first line
    for (let i = -1; i < supportsCount; i++) {
        const xOffset = supportsOffset * i;

        let x1 = basePoint[0] + xOffset + BASE_HEIGHT / 2 + BASE_WIDTH / 2;
        let x2 = x1 + supportsOffset - BASE_HEIGHT;

        let y1 = basePoint[1] + BASE_HEIGHT / 20;
        let y2 = y1;
        createLine(x1, y1, x2, y2, blueprintFront);
    }

    //  draw wall line
    let x1 = basePoint[0];
    let x2 = x1;
    let y1 = basePoint[1] - BASE_HEIGHT * (ladderHeight) - BASE_HEIGHT / 5
    let y2 = y1 - BASE_HEIGHT + BASE_HEIGHT / 5;
    createLine(x1, y1, x2, y2, blueprintFront);

    x1 = basePoint[0] + ladderLength * BASE_WIDTH * 20 + BASE_WIDTH;
    x2 = x1;
    y1 = basePoint[1] - BASE_HEIGHT * (ladderHeight) - BASE_HEIGHT / 5
    y2 = y1 - BASE_HEIGHT + BASE_HEIGHT / 5;
    createLine(x1, y1, x2, y2, blueprintFront);

}

const draw = function (ladderHeight, ladderLength) {
    renderSideBP(ladderHeight);
    renderFrontBP(ladderHeight, ladderLength);
}

export default { draw }