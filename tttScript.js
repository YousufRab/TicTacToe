const gameBoard = (function () {
    board = ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"];
    const sqrClicked = () => {
        let boardSquares = Array.from(document.querySelectorAll('.boardSqr'));
        let arraySign = 0;
        boardSquares.forEach(square => {
            square.addEventListener('click', () =>{
                if (square.innerHTML == "") {
                    square.innerHTML = board[arraySign];
                    arraySign += 1;
                }    
            })
        })
    }

    return {board, sqrClicked};
})();

gameBoard.sqrClicked();

const gamePlay = function () {
    
    const playerSignSelect = () => {

    }
}

// Player object (factory function)
const player = (playerSign, name) => {


}
