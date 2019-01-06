let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function win(userChoice, computerChoice) {
    const userSub = 'user'.fontsize('3');
    const compSub = 'comp'.fontsize('3');
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    
    result_div.innerHTML = `${convertToWord(userChoice)}${userSub} beats 
     ${convertToWord(computerChoice)}${compSub} . You win`;

    document.getElementById(userChoice).classList.add('green-glow');

    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('green-glow');
    }, 2000);
}

function loose(userChoice, computerChoice) {
    const userSub = 'user'.fontsize('3');
    const compSub = 'comp'.fontsize('3');
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    
    result_div.innerHTML = `${convertToWord(userChoice)}${userSub} looses to 
     ${convertToWord(computerChoice)}${compSub} . You lost.`;

    document.getElementById(userChoice).classList.add('red-glow');

    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('red-glow');
    }, 2000);
}

function draw(userChoice, computerChoice) {
    const userSub = 'user'.fontsize('3');
    const compSub = 'comp'.fontsize('3');
    result_div.innerHTML = `${convertToWord(userChoice)}${userSub} draws to 
     ${convertToWord(computerChoice)}${compSub} . Its a draw.`;
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)];
}

function convertToWord(letter) {
    switch (letter) {
        case 'r': return 'Rock';
        case 'p': return 'Paper';
        case 's': return 'Scissors';
    }
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;

        case 'rp':
        case 'ps':
        case 'sr':
            loose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);

    }
}

function main() {
    rock_div.addEventListener('click', () => {
        game('r');
    });

    paper_div.addEventListener('click', () => {
        game('p');
    });

    scissors_div.addEventListener('click', () => {
        game('s');
    });
}


main();
