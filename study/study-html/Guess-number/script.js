'use strict';

const randomNum = (min, max) => Math.trunc(Math.random() * (max - min)) + min;
const randomRange = () => {
    let min = randomNum(0, 100);

    while (min + 19 > 100) {
        min = randomNum(0, 100);
    }

    return [min, min + 19];
};
//Number range
let range = randomRange();
let correctNum = randomNum(range[0], range[1]);
console.log(correctNum);
document.querySelector(
    '.between'
).textContent = `(Between ${range[0]} and ${range[1]})`;

let highScore = 0;
let currentScore = 20;

//DOM

document.querySelector('.check').addEventListener('click', () => {
    const Num = document.querySelector('.guess').value;

    currentScore = getScore(document.querySelector('.label-score').textContent);
    highScore = getScore(document.querySelector('.label-highscore').textContent);

    if (!Num) {
        document.querySelector('.message').textContent = 'Pleas enter a number...';
    } else if (Num < range[0] || Num > range[1]) {
        document.querySelector('.message').textContent = 'Out of range...';
    } else {
        if (currentScore === 1) {
            document.querySelector('.message').textContent = 'You lose the game 😢';
            document.querySelector('.check').setAttribute('disabled', true);
            document.querySelector('body').style.backgroundColor = '#FF0000';
        }
        if (Num > correctNum) {
            document.querySelector('.message').textContent = 'Too high...';
            if (currentScore >= 0) {
                currentScore -= 1;
                document.querySelector('.label-score').textContent =
                    '💯 Score: ' + currentScore;
            }
        } else if (Num < correctNum) {
            document.querySelector('.message').textContent = 'Too low...';
            if (currentScore >= 0) {
                currentScore -= 1;
                document.querySelector('.label-score').textContent =
                    '💯 Score: ' + currentScore;
            }
        } else {
            document.querySelector('.message').textContent = 'Correct number 🎉';
            document.querySelector('.check').setAttribute('disabled', true);
            if (currentScore > highScore) {
                highScore = currentScore;
                document.querySelector('.label-highscore').textContent =
                    '🥇 Highscore: ' + currentScore;
            }

            document.querySelector('.number').textContent = correctNum;
            //change color
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '25rem';
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    correctNum = randomNum(1, 20);
    document.querySelector('.check').removeAttribute('disabled');
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.label-score').textContent = '💯 Score: ' + '20';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    //change number range
    range = randomRange();
    correctNum = randomNum(range[0], range[1]);
    document.querySelector(
        '.between'
    ).textContent = `(Between ${range[0]} and ${range[1]})`;
    console.log(correctNum);
});

//Function
function getScore(score) {
    let scoreRT = score.split(': ');
    return scoreRT[1];
}