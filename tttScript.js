const gameBoard = (function () {
    board = [];
    //Assign all squares in html doc to their own variable
    let sqrOne = document.getElementById('1Sqr');
    let sqrTwo = document.getElementById('2Sqr');
    let sqrThree = document.getElementById('3Sqr');
    let sqrFour = document.getElementById('4Sqr');
    let sqrFive = document.getElementById('5Sqr');
    let sqrSix = document.getElementById('6Sqr');
    let sqrSeven = document.getElementById('7Sqr');
    let sqrEight = document.getElementById('8Sqr');
    let sqrNine = document.getElementById('9Sqr');

    const sqrClicked = () => {
        let boardSquares = Array.from(document.querySelectorAll('.boardSqr'));
        boardSquares.forEach(square => {
            let gameCounter = 0;
            square.addEventListener('click', () => {
                if (gameCounter < 9) {
                    if (square.innerHTML == "" && firstPlayer.turn) {
                    square.innerHTML = firstPlayer.sign;
                    gameCounter += 1;
                    firstPlayer.turn = false;
                    secondPlayer.turn = true;
                    checkForWin();
                } else if (square.innerHTML == "" && secondPlayer.turn) {
                    square.innerHTML = secondPlayer.sign;
                    gameCounter += 1;
                    firstPlayer.turn = true;
                    secondPlayer.turn = false;
                    checkForWin();
                }  
            }
            })
        })
    }

    const checkForWin = () => {
        switch(true) {
            case (sqrOne.innerHTML!="" && sqrOne.innerHTML == sqrTwo.innerHTML && sqrTwo.innerHTML == sqrThree.innerHTML):
                if (sqrOne.innerHTML == firstPlayer.sign) {
                    console.log("Player one wins!");
                } else {
                    console.log("Player two wins!");
                };
                break;
            case (sqrFour.innerHTML != "" && sqrFour.innerHTML == sqrFive.innerHTML && sqrFive.innerHTML == sqrSix.innerHTML):
                if (sqrFour.innerHTML == firstPlayer.sign) {
                    console.log("Player one wins!");
                } else {
                    console.log("Player two wins!");
                };
                break;
            case (sqrSeven.innerHTML != "" && sqrSeven.innerHTML == sqrEight.innerHTML && sqrEight.innerHTML == sqrNine.innerHTML):
                if (sqrSeven.innerHTML == firstPlayer.sign) {
                    console.log("Player one wins!");
                } else {
                    console.log("Player two wins!");
                };
                break;
            case (sqrOne.innerHTML != "" && sqrOne.innerHTML == sqrFour.innerHTML && sqrFour.innerHTML == sqrSeven.innerHTML):
                if (sqrOne.innerHTML == firstPlayer.sign) {
                    console.log(firstPlayer.name + " wins!");
                } else {
                    console.log(secondPlayer.name + " wins!");
                };
                break;    
            case (sqrTwo.innerHTML != "" && sqrTwo.innerHTML == sqrFive.innerHTML && sqrFive.innerHTML == sqrEight.innerHTML):
                if (sqrTwo.innerHTML == firstPlayer.sign) {
                    console.log(firstPlayer.name + " wins!");
                } else {
                    console.log(secondPlayer.name + " wins!");
                };
                break;
            case (sqrThree.innerHTML != "" && sqrThree.innerHTML == sqrSix.innerHTML && sqrSix.innerHTML == sqrNine.innerHTML):
                if (sqrThree.innerHTML == firstPlayer.sign) {
                    console.log(firstPlayer.name + " wins!");
                } else {
                    console.log(secondPlayer.name + " wins!");
                };
                break;
            case (sqrOne.innerHTML != "" && sqrOne.innerHTML == sqrFive.innerHTML && sqrFive.innerHTML == sqrNine.innerHTML):
                if (sqrOne.innerHTML == firstPlayer.sign) {
                    console.log(firstPlayer.name + " wins!");
                } else {
                    console.log(secondPlayer.name + " wins!");
                };
                break;
        }
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

        const chooseSignX = () => {
            player1Sign = "X";
            player2Sign = "O";
            const playerOneName = document.getElementById('playerOneName').value;
            const playerTwoName = document.getElementById('playerTwoName').value;

            if (playerOneName == "" || playerTwoName == "") {
                alert("Please enter player names");
                signX.addEventListener('click', chooseSignX, {once: true});
                return;
            }
            hideSelector();
            createPlayers();
            signO.removeEventListener('click', chooseSignO, {once:true});
            document.getElementById('playerOneName').value = "";
            document.getElementById('playerTwoName').value = "";
            return {firstPlayer, secondPlayer};
        }

        const chooseSignO = () => {
            player1Sign = "O";
            player2Sign = "X";
            const playerOneName = document.getElementById('playerOneName').value;
            const playerTwoName = document.getElementById('playerTwoName').value;

            if (playerOneName == "" || playerTwoName == "") {
                alert("Please enter player names");
                signO.addEventListener('click', chooseSignO, {once:true});
                return;
            }
            hideSelector();
            createPlayers();
            signX.removeEventListener('click', chooseSignX, {once:true}); 
            document.getElementById('playerOneName').value = "";
            document.getElementById('playerTwoName').value = "";
            return {firstPlayer, secondPlayer};
        }
        signX.addEventListener('click', chooseSignX, {once: true});
        signO.addEventListener('click', chooseSignO, {once:true});  
    }
    return {newGame, playerSignSelect};
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