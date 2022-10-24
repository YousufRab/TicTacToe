const gameBoard = (function () {
    board = ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"];
    const sqrClicked = () => {
        let boardSquares = Array.from(document.querySelectorAll('.boardSqr'));
        let arraySign = 0;
        boardSquares.forEach(square => {
            square.addEventListener('click', () =>{
                square.innerHTML = board[arraySign];
                arraySign += 1;
            })
        })
    }
    return {board, sqrClicked};
})();



// Player object (factory function)
const player = (playerSign, name, turn) => {

}

function renderBoard(board = gameBoard.board) {

}
