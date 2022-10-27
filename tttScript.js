const gameBoard = (function () {
    board = [];
    const sqrClicked = () => {
        let boardSquares = Array.from(document.querySelectorAll('.boardSqr'));
        boardSquares.forEach(square => {
            let gameCounter = 0;
            square.addEventListener('click', () =>{
                if (gameCounter < 9) {
                    if (square.innerHTML == "" && firstPlayer.turn) {
                    square.innerHTML = firstPlayer.sign;
                    gameCounter += 1;
                    firstPlayer.turn = false;
                    secondPlayer.turn = true;
                } else if (square.innerHTML == "" && secondPlayer.turn) {
                    square.innerHTML = secondPlayer.sign;
                    gameCounter += 1;
                    firstPlayer.turn = true;
                    secondPlayer.turn = false;
                }  
            }
                  
            })
        })
    }

    return {board, sqrClicked};
})();

gameBoard.sqrClicked();


// Gameplay module for controlling various aspects of the game
const gamePlay = (function () {
    
    const newGame = () => {
        clearBoard();
        openSelector();
        playerSignSelect();
    }

    const clearBoard = () => { 
        let boardSquares = Array.from(document.querySelectorAll('.boardSqr'));
        boardSquares.forEach(square => {
            square.innerHTML = "";
        });
    }

    const openSelector = () => {
        const signSelector = document.querySelector('.signSelect');
        if (signSelector.classList.contains("signSelect-active")) {
        //hide
        signSelector.classList.remove("signSelect-active");
        signSelector.classList.add("signSelect-transition");
        signSelector.classList.add('signSelect-hidden');
    } else {
        //show
        signSelector.classList.add('signSelect-visible');
        signSelector.clientWidth;
        signSelector.classList.add('signSelect-transition');
        signSelector.classList.add('signSelect-active');
    }
    signSelector.addEventListener('transitionend', function () {
        signSelector.classList.remove('signSelect-transition');
        signSelector.classList.remove('signSelect-visible');
        signSelector.classList.remove('signSelect-hidden');
    })} 

    const playerSignSelect = () => {
        const signSelector = document.querySelector('.signSelect');
        const signX = document.getElementById('X');
        const signO = document.getElementById('O');
        let player1Sign = "";
        let player2Sign = "";

        const createPlayers = () => {
            const playerOneName = document.getElementById('playerOneName').value;
            const playerTwoName = document.getElementById('playerTwoName').value;
            firstPlayer = player(playerOneName, player1Sign, true);
            secondPlayer = player(playerTwoName, player2Sign, false);
            return {firstPlayer, secondPlayer};
        }
        const hideSelector = () => {
            signSelector.classList.remove("signSelect-active");
            signSelector.classList.add("signSelect-transition");
            signSelector.classList.add('signSelect-hidden');
        }

        signX.addEventListener('click', () => {
            player1Sign = "X";
            player2Sign = "O";
            const playerOneName = document.getElementById('playerOneName').value;
            const playerTwoName = document.getElementById('playerTwoName').value;

            if (playerOneName == "" || playerTwoName == "") {
                alert("Please enter player names");
                return;
            }
            hideSelector();
            createPlayers();
            return {firstPlayer, secondPlayer};
        })

        signO.addEventListener('click', () => {
            player1Sign = "O";
            player2Sign = "X";
            const playerOneName = document.getElementById('playerOneName').value;
            const playerTwoName = document.getElementById('playerTwoName').value;

            if (playerOneName == "" || playerTwoName == "") {
                alert("Please enter player names");
                return;
            }
            hideSelector();
            createPlayers();
            return {firstPlayer, secondPlayer};
        })   
    }
    return {newGame};
})();

// Player object (factory function)
const player = (playerName, playerSign, playerTurn) => {
    let name = playerName;
    let sign = playerSign;
    let turn = playerTurn;
    return {name, sign, turn};
}


// Test function
function testing () {
    console.log(firstPlayer, secondPlayer);
}