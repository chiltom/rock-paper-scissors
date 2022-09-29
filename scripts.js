// Game of Rock Paper Scissors with a UI

// Computer choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return (choices[random])
};

// Making input case-insensitive
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
};

// Playing a round
function playRound(playerSelection) {
    let pS = capitalize(playerSelection);
    let cS = getComputerChoice();
    if (pS === 'Rock' && cS === 'Paper') {
        return 'You Lose! Paper beats Rock';
    } else if (pS === 'Paper' && cS === 'Rock') {
        return 'You Win! Paper beats Rock';
    } else if (pS === 'Rock' && cS === 'Scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (pS === 'Scissors' && cS === 'Rock') {
        return 'You Lose! Rock beats Scissors';
    } else if (pS === 'Paper' && cS === 'Scissors') {
        return 'You Lose! Scissors beats Paper';
    } else if (pS === 'Scissors' && cS === 'Paper') {
        return 'You Win! Scissors beats Paper';
    } else if (pS === cS) {
        return "It's a tie!"
    } else {
        return 'Invalid entry!';
    }
};

// Interactive buttons
let playerScore = 0;
let computerScore = 0;
const results = document.querySelector('.results');
const content = document.createElement('div');
    content.classList.add('content');
const scores = document.createElement('div');
    scores.classList.add('scores');
const winner = document.createElement('div');
    winner.classList.add('winner');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let result = playRound(e.target.id);
        content.textContent = `${result}`;
        results.appendChild(content);
        if(result === 'You Win! Paper beats Rock' ||
            result === 'You Win! Rock beats Scissors' ||
            result === 'You Win! Scissors beats Paper') {
                playerScore += 1;
            } else {
            computerScore += 1;
            };
        scores.textContent = `Your Score: ${playerScore}. Computer Score: ${computerScore}`;
        results.appendChild(scores);
        if (playerScore === 5) {
            winner.textContent = `You Won! Your Score: ${playerScore}. Computer Score: ${computerScore}`;
            results.appendChild(winner);
        } else if (computerScore === 5) {
            winner.textContent = `You Lost. Your Score: ${playerScore}. Computer Score: ${computerScore}`;
            results.appendChild(winner);
        }
    })
});


// Playing a game
/*
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?', '');
        let computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);
        console.log(round);
        if(round === 'You Win! Paper beats Rock' ||
         round === 'You Win! Rock beats Scissors' ||
         round === 'You Win! Scissors beats Paper') {
            playerScore += 1;
        } else {
            computerScore += 1;
        };
    };
    if (playerScore > computerScore) {
        return `You Win! Your score: ${playerScore},
         Computer score: ${computerScore}`;
    } else {
        return `You Lose! Your score: ${playerScore},
         Computer score: ${computerScore}`;
    };
};
*/