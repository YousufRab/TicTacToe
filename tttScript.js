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


// Gameplay module for controlling various aspects of the game
const gamePlay = (function () {
    
    const newGame = () => {
        clearBoard();
        playerSignSelect();
    }

    const clearBoard = () => { 
        let boardSquares = Array.from(document.querySelectorAll('.boardSqr'));
        boardSquares.forEach(square => {
            square.innerHTML = "";
        });
    }

    const createPlayers = () => {
        
    }

    const playerSignSelect = () => {
        const signSelector = document.querySelector('.signSelect');
        const signX = document.getElementById('X');
        const signO = document.getElementById('O');
        let player1Sign = "";
        let player2Sign = "";

        let tempOneName = "";
        let tempTwoName = "";

        const hideSelector = () => {
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

        hideSelector();

        signX.addEventListener('click', () => {
            player1Sign = "X";
            player2Sign = "O";
            const playerOneName = document.getElementById('playerOneName').value;
            const playerTwoName = document.getElementById('playerTwoName').value;

            if (playerOneName == "" || playerTwoName == "") {
                alert("Please enter player names");
                return;
            }
            tempOneName = playerOneName;
            tempTwoName = playerTwoName;
            hideSelector();
        })

        signO.addEventListener('click', ()=> {
            player1Sign = "O";
            player2Sign = "X";
            const playerOneName = document.getElementById('playerOneName').value;
            const playerTwoName = document.getElementById('playerTwoName').value;

            if (playerOneName == "" || playerTwoName == "") {
                alert("Please enter player names");
                return;
            }
            tempOneName = playerOneName;
            tempTwoName = playerTwoName;
            hideSelector();
        })
        
        return {tempOneName, tempTwoName, player1Sign, player2Sign}
        
    }


    return {newGame, playerSignSelect};

})();

// Player object (factory function)
const player = (playerName, playerSign) => {
    let name = playerName;
    let sign = playerSign;
    return {name, sign};
}


// Test function
function testing () {
    console.log(firstPlayer, secondPlayer);
}