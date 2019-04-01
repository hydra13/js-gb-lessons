'use strict'

const BLACK_FL = 1;
const WHITE_FL = 2;
const LETTER_FL = 3;

function createCell(type, value) {
    let tagType = 'div';
    if (type === 3) {
        tagType = 'span';
    }
    let cell = document.createElement(tagType);
    switch (type) {
        case BLACK_FL:
            cell.classList.add('black-cell');
            break;
        case WHITE_FL:
            cell.classList.add('white-cell');
            break;
        case LETTER_FL:
            cell.classList.add('header-symbol');
            cell.innerHTML = value;
            break;
        default:
            console.log('Undefined type of cell!')
            break;
    }

    return cell;
}

function drawChessBoard(element) {
    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            if (i == 0) {
                let letter = j == 0 ? '' : String.fromCharCode(65 + (j - 1));
                element.appendChild(createCell(LETTER_FL, letter));
            } else if (j == 0) {
                element.appendChild(createCell(LETTER_FL, i));
            } else if ((i + j) % 2 == 0) {
                element.appendChild(createCell(WHITE_FL));
            } else if ((i + j) % 2 != 0) {
                element.appendChild(createCell(BLACK_FL));
            }
        }
    }
}

function testTask1() {
    let boardElement = document.querySelector('.chess-board')
    while (boardElement.hasChildNodes()) {
        boardElement.removeChild(boardElement.firstChild);
    }
    drawChessBoard(boardElement);
    boardElement.classList.remove('hidden');
}