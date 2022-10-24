const gameBoard = (function () {
    board = ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"];
    const sqrClicked = () => {
        let boardSquares = Array.from(document.querySelectorAll('.boardSqr'));
        boardSquares.forEach(drawSign)
    };

    const drawSign = (boardSquare) => {
        let arraySign = 0;
        boardSquare
    }
    return {board};
})();



// Player object (factory function)
const player = (playerSign, name, turn) => {

}

function renderBoard(board = gameBoard.board) {

}