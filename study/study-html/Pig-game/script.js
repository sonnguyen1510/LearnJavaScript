'use strict';

const scorePL1 = document.getElementById('score--0');
const scorePL2 = document.getElementById('score--1');

scorePL1.textContent = 0;
scorePL2.textContent = 0;

const winScore = 100;

const randomNum = (min, max) => Math.trunc(Math.random() * (max - min)) + min;

let isWinner = false;

function roll() {
    const getRandomNum = randomNum(1, 6);
    const dice = document.querySelector('.dice');

    switch (getRandomNum) {
        case 1:
            {
                dice.src = 'dice-1.png';
                break;
            }
        case 2:
            {
                dice.src = 'dice-2.png';
                break;
            }
        case 3:
            {
                dice.src = 'dice-3.png';
                break;
            }

        case 4:
            {
                dice.src = 'dice-4.png';
                break;
            }
        case 5:
            {
                dice.src = 'dice-5.png';
                break;
            }
        case 6:
            {
                dice.src = 'dice-6.png';
                break;
            }
    }

    return getRandomNum;
}

function updateScore(ID, pointAdd) {
    const currentScore = document.getElementById(ID);

    currentScore.textContent = Number(currentScore.textContent) + pointAdd;
}

function getCurrentScore(ID) {
    return document.getElementById(ID).textContent;
}

function resetScore(ID) {
    document.getElementById(ID).textContent = 0;
}

function getTotalScore(ID) {
    return document.getElementById(ID).textContent;
}

function changePlayer(currentPlayerID, changeToPlayerID) {
    const player1 = document.querySelector(currentPlayerID);
    const player2 = document.querySelector(changeToPlayerID);

    player1.classList.remove('player--active');
    player2.classList.add('player--active');
}

function winner(classname) {
    document.querySelector(classname).classList.add('player--winner');
    isWinner = true;
}

///////////////////////////////////////////////////////////////////////////////

document.querySelector('.btn--roll').addEventListener('click', () => {
    if (!isWinner) {
        const currentPlayer = document.querySelector('.player--0');
        const player2Section = document.querySelector('.player--1');

        const point = roll();
        if (currentPlayer.classList.contains('player--active')) {
            if (point === 1) {
                resetScore('current--0');
                changePlayer('.player--0', '.player--1');
            } else {
                updateScore('current--0', point);
            }
        } else {
            if (point === 1) {
                resetScore('current--1');
                changePlayer('.player--1', '.player--0');
            } else {
                updateScore('current--1', point);
            }
        }
    }
});

document.querySelector('.btn--hold').addEventListener('click', () => {
    if (!isWinner) {
        const currentPlayer = document
            .querySelector('.player--0')
            .classList.contains('player--active') ?
            '.player--0' :
            '.player--1';
        if (currentPlayer === '.player--0') {
            let totalScore =
                Number(getTotalScore('score--0')) +
                Number(getCurrentScore('current--0'));
            resetScore('current--0');
            document.getElementById('score--0').textContent = totalScore;
            if (totalScore >= winScore) {
                winner('.player--0');
            } else {
                changePlayer(
                    currentPlayer,
                    currentPlayer !== '.player--0' ? '.player--0' : '.player--1'
                );
            }
        } else {
            let totalScore =
                Number(getTotalScore('score--1')) +
                Number(getCurrentScore('current--1'));
            resetScore('current--1');
            document.getElementById('score--1').textContent = totalScore;

            if (totalScore >= winScore) {
                winner('.player--1');
            } else {
                changePlayer(
                    currentPlayer,
                    currentPlayer !== '.player--0' ? '.player--0' : '.player--1'
                );
            }
        }
    }
});

document.querySelector('.btn--new').addEventListener('click', () => {
    scorePL1.textContent = 0;
    scorePL2.textContent = 0;

    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;

    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');

    isWinner = false;
});