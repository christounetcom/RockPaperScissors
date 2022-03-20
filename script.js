// Function to randomise rock paper or scissors 
function computerPlay () {
    let optionsArray = ['rock', 'paper', 'scissors'];
    return optionsArray[Math.floor(Math.random()*optionsArray.length)];
};

// function to play 1 round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    let comp = computerSelection.toLowerCase();
    let player = playerSelection.toLowerCase();

    if (player === "rock" && comp == "scissors") {
        return "win";
    } else if (player === "scissors" && comp === "paper") {
        return "win";
    } else if (player === "paper" && comp === "rock") {
        return "win";
    } else if (player === comp) {
        return "draw";
    } else {
        return "loose";
    };
};

// Function to play rock paper scissors
function game() {
    let score = 0;
    const games = 5;

    for (let i = 0; i < games; i++)
    {
        let playerSelection = prompt("Please enter Rock, Paper or Scissors");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(`You ${result} this round.`);
        
        if (result === "win") {
            score ++;
        };
    }
    //console.log(score);
    if (score > 2) {
        return `You win the score was ${score} to ${games - score}!`;
    } else {
        return `You loose the score was ${score} to ${games - score}.`;
    }
}

console.log(game());