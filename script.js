
// Getting numbers
let secretNumber = Math.trunc(Math.random() * 20) + 1; // number between 1 and 20 generated

// changing msg to be displayed
function displayMessage(msg) {
    document.querySelector('.message').textContent = msg;
}
// check button select play
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    if (!guess) {
        displayMessage('Invalid input');
    } else if (guess == secretNumber){
        displayMessage('You won');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    } else if (guess !== secretNumber){
        guess > secretNumber ?
            displayMessage('Too high') :
            displayMessage('Too low');

        if (score > 1){
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// setting things back
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('body').style.backgroundColor = '#000';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    displayMessage('Start playing');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});
