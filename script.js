let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        default:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
};

const singleRound = (computerSelection, playerSelection) => {
    switch (true) {
        case playerSelection === "rock" && computerSelection === "paper":
            computerScore++;
            alert(`${computerSelection} beats ${playerSelection}, You loose this round!
            
                  player score: ${playerScore}
                  computer score: ${computerScore}`);
            break;
        case playerSelection === "rock" && computerSelection === "scissors":
            playerScore++;
            alert(
                `${playerSelection} beats ${computerSelection}, You win this round.

                player score: ${playerScore}
                computer score: ${computerScore}`
            );
            break;
        case playerSelection === "paper" && computerSelection === "rock":
            playerScore++;
            alert(
                `${playerSelection} beats ${computerSelection}, You win this round.

                player score: ${playerScore}
                computer score: ${computerScore}`
            );
            break;
        case playerSelection === "paper" && computerSelection === "scissors":
            computerScore++;
            alert(
                `${computerSelection} beats ${playerSelection}, You loose this round!

                player score: ${playerScore}
                computer score: ${computerScore}`
            );
            break;
        case playerSelection === "scissors" && computerSelection === "rock":
            computerScore++;
            alert(
                `${computerSelection} beats ${playerSelection}, You loose this round!

                player score: ${playerScore}
                computer score: ${computerScore}`
            );
            break;
        case playerSelection === "scissors" && computerSelection === "paper":
            playerScore++;
            alert(
                `${playerSelection} beats ${computerSelection}, You win this round.

                player score: ${playerScore}
                computer score: ${computerScore}`
            );
            break;
        default:
            alert(`${computerSelection} and ${playerSelection}, It's tie!

                  player score: ${playerScore}
                  computer score: ${computerScore}`);
            break;
    }
};

const playGame = () => {
    while (playerScore < 5 && computerScore < 5) {
        let userInput = prompt(
            `Enter Your Choice:  rock  /  paper  /  scissors

            player score: ${playerScore}
            computer score: ${computerScore}`
        );
        userInput = userInput.toLowerCase();
        if (
            userInput === "rock" ||
            userInput === "paper" ||
            userInput === "scissors"
        ) {
            singleRound(getComputerChoice(), userInput);
        } else {
            alert("Your Input is Invalid! Try Again");
        }
    }
    if (playerScore === 5) {
        alert("Congrats!, You Won This Game!");
    } else {
        alert("Sorry, You Loose This Game!");
    }
    playerScore = 0;
    computerScore = 0;
    playGame();
};

playGame();
