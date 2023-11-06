'use strict';

let body = document.querySelector('body')
let againBtn = document.querySelector('.again');
let number = document.querySelector('.number');
let guess = document.querySelector('.guess');
let checkBtn = document.querySelector('.check');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

// console.log(againBtn,number,guess,checkBtn,message,score,highScore);

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
// number.textContent = secreteNumber;

function displayMessage(messages) {
    message.textContent = messages;
}

let scoreNum = 20;
let highScoreNum = 0;

checkBtn.addEventListener('click', ()=>{
    const guessNum = Number(guess.value);
    console.log(guessNum, typeof guessNum);

    if (!guessNum) {
        displayMessage('⛔ No number');
    } else if (guessNum === secreteNumber) {
        displayMessage('🎉 Correct number!');
        number.textContent = secreteNumber;

        body.style.backgroundColor = '#60b347'
        number.style.width = '30rem'

        if (scoreNum > highScoreNum){
            highScoreNum = scoreNum;
            highScore.textContent = highScoreNum;
        }
    } else if (guessNum !== secreteNumber) {
        if(scoreNum > 1) {
            displayMessage(guessNum > secreteNumber ? '📈 Too High' : '📉 Too Low')
            scoreNum--;
            score.textContent = scoreNum;
        } else {
            displayMessage('💥 You lost the game!')
            score.textContent = 0;
            body.style.backgroundColor = 'red'
        }
    }
})

againBtn.addEventListener('click', ()=>{
    console.log('Clicked');
    scoreNum = 20;

    secreteNumber = Math.trunc(Math.random() * 20) + 1;
    number.textContent = '?';

    score.textContent = scoreNum;

    body.style.backgroundColor = '#222'
    number.style.width = '15rem'

    displayMessage('Start guessing...')
    guess.value = '';
})