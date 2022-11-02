const gameBoard = (function () {
    
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

    let gameCounter = 0;

    const sqrClicked = () => {
        let boardSquares = Array.from(document.querySelectorAll('.boardSqr'));
        boardSquares.forEach(square => {
            
            square.addEventListener('click', () => {
                if (gameCounter < 9 && !firstPlayer.win && !secondPlayer.win && !secondPlayer.AI) {
                    if (square.innerHTML == "" && firstPlayer.turn) {
                        square.innerHTML = firstPlayer.sign;
                        gameCounter += 1;
                        console.log("Player vs player");
                        firstPlayer.turn = false;
                        secondPlayer.turn = true;
                        checkForWin();
                        if(checkForWin()) {
                            winMessage();
                            gameCounter = 0;
                        }
                        checkForDraw();
                        playSound();
                    }else if (square.innerHTML == "" && secondPlayer.turn) {
                        square.innerHTML = secondPlayer.sign;
                        gameCounter += 1;
                        firstPlayer.turn = true;
                        secondPlayer.turn = false;
                        checkForWin();
                        if(checkForWin()) {
                            winMessage();
                            gameCounter = 0;
                        }
                        checkForDraw();
                        playSound();
                    }  
                }
                if ((gameCounter < 9 && !firstPlayer.win && !secondPlayer.win && secondPlayer.AI)) {
                    if (square.innerHTML == "" && firstPlayer.turn) {
                        square.innerHTML = firstPlayer.sign;
                        gameCounter += 1;
                        console.log("Player vs AI");
                        if(checkForWin()) {
                            winMessage();
                            gameCounter = 0;
                        }
                        checkForDraw();
                        playSound();
                        if(!checkForWin()) {
                            // Set 700 millisecond delay for compTurn function to run
                            setTimeout(()=> {compTurn();}, 700);
                            checkForDraw();
                            if(checkForWin()) {
                                winMessage();
                                gameCounter = 0;
                            };
                        }
                        
                    } 
                }
            })
        })
    }

    const compTurn = () => {

        board = [];
        const addEmptySquares = (square) => {
            if (square.innerHTML == "") {
                board.push(square);
            }
        }
        let gameBoardSquares = Array.from(document.querySelectorAll('.boardSqr'));
        gameBoardSquares.forEach(addEmptySquares);
        (board[Math.floor(Math.random() * board.length)]).innerHTML = secondPlayer.sign;
        console.log(Math.floor(Math.random() * board.length));
    }

    const gameStartBtn = () => {
        let gameStartBtns = Array.from(document.querySelectorAll('.newGame'));
        gameStartBtns.forEach( button => {
            button.addEventListener('click', gamePlay.newGame);
        })
    }

    const checkForWin = () => {
        switch(true) {
            case (sqrOne.innerHTML!="" && sqrOne.innerHTML == sqrTwo.innerHTML && sqrTwo.innerHTML == sqrThree.innerHTML):
                if (sqrOne.innerHTML == firstPlayer.sign) {
                    firstPlayer.win = true;
                    return true;
                } else {
                    secondPlayer.win = true;
                    return true;
                }; 
            case (sqrFour.innerHTML != "" && sqrFour.innerHTML == sqrFive.innerHTML && sqrFive.innerHTML == sqrSix.innerHTML):
                if (sqrFour.innerHTML == firstPlayer.sign) {
                    firstPlayer.win = true;
                    return true;
                } else {
                    secondPlayer.win = true;
                    return true;
                };              
            case (sqrSeven.innerHTML != "" && sqrSeven.innerHTML == sqrEight.innerHTML && sqrEight.innerHTML == sqrNine.innerHTML):
                if (sqrSeven.innerHTML == firstPlayer.sign) {
                    firstPlayer.win = true;
                    return true;
                } else {
                    secondPlayer.win = true;
                    return true;
                };               
            case (sqrOne.innerHTML != "" && sqrOne.innerHTML == sqrFour.innerHTML && sqrFour.innerHTML == sqrSeven.innerHTML):
                if (sqrOne.innerHTML == firstPlayer.sign) {
                    firstPlayer.win = true;
                    return true;
                } else {
                    secondPlayer.win = true;
                    return true;
                };                   
            case (sqrTwo.innerHTML != "" && sqrTwo.innerHTML == sqrFive.innerHTML && sqrFive.innerHTML == sqrEight.innerHTML):
                if (sqrTwo.innerHTML == firstPlayer.sign) {
                    firstPlayer.win = true;
                    return true;
                } else {
                    secondPlayer.win = true;
                    return true;
                };              
            case (sqrThree.innerHTML != "" && sqrThree.innerHTML == sqrSix.innerHTML && sqrSix.innerHTML == sqrNine.innerHTML):
                if (sqrThree.innerHTML == firstPlayer.sign) {
                    firstPlayer.win = true;
                    return true;
                } else {
                    secondPlayer.win = true;
                    return true;
                };               
            case (sqrOne.innerHTML != "" && sqrOne.innerHTML == sqrFive.innerHTML && sqrFive.innerHTML == sqrNine.innerHTML):
                if (sqrOne.innerHTML == firstPlayer.sign) {
                    firstPlayer.win = true;
                    return true;
                } else {
                    secondPlayer.win = true;
                    return true;
                };                
            case (sqrThree.innerHTML != "" && sqrThree.innerHTML == sqrFive.innerHTML && sqrFive.innerHTML == sqrSeven.innerHTML):
                if (sqrThree.innerHTML == firstPlayer.sign) {
                    firstPlayer.win = true;
                    return true;
                } else {
                    secondPlayer.win = true;
                    return true;
                };
                
        }
        
    return false;

    }

    const winMessage = () => {
        const winMessage = document.querySelector('.victory');
        const winner = document.getElementById('winner');

        // Insert winning players name into victory message
        if (firstPlayer.win == true) {
            winner.innerHTML = firstPlayer.name;
        } else if (secondPlayer.win == true) {
            winner.innerHTML = secondPlayer.name;
        }

        if (winMessage.classList.contains("victory-active")) {
        //hide
        winMessage.classList.remove("victory-active");
        winMessage.classList.add("victory-transition");
        winMessage.classList.add('victory-hidden');
        } else {
        //show
        winMessage.classList.add('victory-visible');
        winMessage.clientWidth;
        winMessage.classList.add('victory-transition');
        winMessage.classList.add('victory-active');
        }
        winMessage.addEventListener('transitionend', function () {
        winMessage.classList.remove('victory-transition');
        winMessage.classList.remove('victory-visible');
        winMessage.classList.remove('victory-hidden');
    })} 

    const checkForDraw = () => {
        if (gameCounter == 9 && !firstPlayer.win && !secondPlayer.win) {
            drawMessage();
            gameCounter = 0;
        };
    }

    const drawMessage = () => {
        const drawMessage = document.querySelector('.draw');
        if (drawMessage.classList.contains("draw-active")) {
            //hide
            drawMessage.classList.remove("draw-active");
            drawMessage.classList.add("draw-transition");
            drawMessage.classList.add('draw-hidden');
            } else {
            //show
            drawMessage.classList.add('draw-visible');
            drawMessage.clientWidth;
            drawMessage.classList.add('draw-transition');
            drawMessage.classList.add('draw-active');
            }
            drawMessage.addEventListener('transitionend', function () {
            drawMessage.classList.remove('draw-transition');
            drawMessage.classList.remove('draw-visible');
            drawMessage.classList.remove('draw-hidden');
        })
    }

    const playSound = () => {
        const soundOne = document.getElementById('soundOne');
        const soundTwo = document.getElementById('soundTwo');
        if (Math.random() < 0.5) {
            soundOne.play();
        } else {
            soundTwo.play();
        }
    }

    return {sqrClicked, gameStartBtn};
})();


// Gameplay module for controlling various aspects of the game
const gamePlay = (function () {
    
    const newGame = () => {
        clearBoard();
        document.getElementById('playerOneName').value = "";
        document.getElementById('playerTwoName').value = "";
        openSelector();
        playerSignSelect();
        hideWinMessage();
        hideDrawMessage();
    }

    const playVsComp = () => {
        const signSelector = document.querySelector('.signSelectVsComp');
        const signX = document.getElementById('XComp');
        const signO = document.getElementById('OComp');

        const hideSelector = () => {
            const signSelector = document.querySelector('.signSelect');
            if (signSelector.classList.contains('signSelect-active')) {
                signSelector.classList.remove("signSelect-active");
                signSelector.classList.add("signSelect-transition");
                signSelector.classList.add('signSelect-hidden');
            } 
        }

        const hideSelectorVsComp = () => {
            if (signSelector.classList.contains('signSelectVsComp-active')) {
                signSelector.classList.remove("signSelectVsComp-active");
                signSelector.classList.add("signSelectVsComp-transition");
                signSelector.classList.add('signSelectVsComp-hidden');
            } 
        }        

        const openSelectorVsComp = () => {
            const signSelectorVsComp = document.querySelector('.signSelectVsComp');
            if (signSelectorVsComp.classList.contains("signSelectVsComp-active")) {
            //hide
            signSelectorVsComp.classList.remove("signSelectVsComp-active");
            signSelectorVsComp.classList.add("signSelectVsComp-transition");
            signSelectorVsComp.classList.add('signSelectVsComp-hidden');
        } else {
            //show
            signSelectorVsComp.classList.add('signSelectVsComp-visible');
            signSelectorVsComp.clientWidth;
            signSelectorVsComp.classList.add('signSelectVsComp-transition');
            signSelectorVsComp.classList.add('signSelectVsComp-active');
        }
            signSelectorVsComp.addEventListener('transitionend', function () {
            signSelectorVsComp.classList.remove('signSelectVsComp-transition');
            signSelectorVsComp.classList.remove('signSelectVsComp-visible');
            signSelectorVsComp.classList.remove('signSelectVsComp-hidden');
    })} 
        

        const chooseSignXVsComp = () => {
            player1Sign = "X";
            player2Sign = "O";
            const playerOneName = document.getElementById('playerOneNameVsComp').value;
            if (playerOneName == "") {
                alert("Please enter player names");
                signX.addEventListener('click', chooseSignXVsComp, {once: true});
                return;            
            }
            hideSelectorVsComp();
            createAiPlayer();
            displayPlayerDetails();
            signO.removeEventListener('click', chooseSignOVsComp, {once:true});
        }

        const chooseSignOVsComp = () => {
            player1Sign = "O";
            player2Sign = "X";
            const playerOneName = document.getElementById('playerOneNameVsComp').value;
            if (playerOneName == "") {
                alert("Please enter player names");
                signO.addEventListener('click', chooseSignOVsComp, {once: true});
                return;            
            }
            hideSelectorVsComp();
            createAiPlayer();
            displayPlayerDetails();
            signX.removeEventListener('click', chooseSignXVsComp, {once:true});
        }

        const createAiPlayer = () => {
            let playerOneName = document.getElementById('playerOneNameVsComp').value;
            if (player1Sign == "X") {
                firstPlayer = player(playerOneName, 'X', true, false, false);
                secondPlayer = player('SKYNET AI', 'O', false, false, true);
            } else { 
                firstPlayer = player(playerOneName, 'O', true, false, false);
                secondPlayer = player('SKYNET AI', 'X', false, false, true);
            }
            
        }

        clearBoard();
        hideWinMessage();
        hideDrawMessage();
        hideSelector();
        signX.addEventListener('click', chooseSignXVsComp, {once: true});
        signO.addEventListener('click', chooseSignOVsComp, {once:true});  
        openSelectorVsComp();

    }

    const hideWinMessage = () => {
        const winMessage = document.querySelector('.victory');
        if (winMessage.classList.contains('victory-active')) {
                winMessage.classList.remove("victory-active");
                winMessage.classList.add("victory-transition");
                winMessage.classList.add('victory-hidden');
        }
    }

    const hideDrawMessage = () => {
        const drawMessage = document.querySelector('.draw');
        if (drawMessage.classList.contains('draw-active')) {
                drawMessage.classList.remove("draw-active");
                drawMessage.classList.add("draw-transition");
                drawMessage.classList.add('draw-hidden');
        }
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
            firstPlayer = player(playerOneName, player1Sign, true, false, false);
            secondPlayer = player(playerTwoName, player2Sign, false, false, false);
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
            displayPlayerDetails();
            signO.removeEventListener('click', chooseSignO, {once:true});
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
            displayPlayerDetails();
            signX.removeEventListener('click', chooseSignX, {once:true}); 
        }
        signX.addEventListener('click', chooseSignX, {once: true});
        signO.addEventListener('click', chooseSignO, {once:true});  
    }

    displayPlayerDetails = () => {
        (document.getElementById('playerOneDisplayName')).innerHTML = firstPlayer.name;
        (document.getElementById('playerOneDisplaySign')).innerHTML = firstPlayer.sign;
        (document.getElementById('playerTwoDisplayName')).innerHTML = secondPlayer.name;
        (document.getElementById('playerTwoDisplaySign')).innerHTML = secondPlayer.sign;
    }

    return {newGame, playVsComp};
})();

// Player object (factory function)
const player = (playerName, playerSign, playerTurn, playerWin, compPlayer) => {
    let name = playerName;
    let sign = playerSign;
    let turn = playerTurn;
    let win = playerWin;
    let AI = compPlayer;
    return {name, sign, turn, win, AI};
}


// Test function
function testing () {
    console.log(Math.random());
}

// Call gameBoard functions to give functionality to gameBoard and buttons
gameBoard.sqrClicked();
gameBoard.gameStartBtn();