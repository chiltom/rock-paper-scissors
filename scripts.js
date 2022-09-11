/* Pseudocode

- Begin with function getComputerChoice() that takes an array
['Rock', 'Paper', 'Scissors'] and selects one of the choices at random.
- Follow up with a function capitalize(string) that will take string input
(the user's) and capitalize the first letter and lowercase the rest.
- Write a function playRound(playerSelection, computerSelection) that takes
the user's input and compares it against the computer's selection. The function
will return a string letting the user know if they won, the computer won, or
they entered an invalid string.
- Write a function game() that calls the playRound function multiple times and
keeps a score, reporting/returning if the user is a winner or loser in the end.
This is the culmination of the program, and what is ultimately run with a prompt
to gather input from the user.

*/

// Gathering computer's choice
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
function playRound(playerSelection, computerSelection) {
    let pS = capitalize(playerSelection);
    let cS = computerSelection
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

// Playing a game
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?', '');
        let computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);
        console.log(round);
        if(round === 'You Win! Paper beats Rock' || round === 'You Win! Rock beats Scissors' || round === 'You Win! Scissors beats Paper') {
            playerScore += 1;
        } else {
            computerScore += 1;
        };
    };
    if (playerScore > computerScore) {
        return `You Win! Your score: ${playerScore}, Computer score: ${computerScore}`;
    } else {
        return `You Lose! Your score: ${playerScore}, Computer score: ${computerScore}`;
    };
};