const bodyElement = document.querySelector("body");

const startContainerElement = document.querySelector(".start_container");

const welcomeSectionElement = document.querySelector(".welcome");

const gameContainerElement = document.querySelector(".game_container");
const scoresSectionElement = document.querySelector("#scores");
const selectSectionContainer = document.querySelector(".select");
const rockBtnElement = document.querySelector("#rock");
const paperBtnElement = document.querySelector("#paper");
const scissorsBtnElement = document.querySelector("#scissors");
const computerScoreElement = document.querySelector("#computer-score");
const roundCounterElement = document.querySelector("#round-counter");
const playerScoreElement = document.querySelector("#player-score");
const roundReportElement = document.querySelector("#round-report");

const finalSectionElement = document.querySelector(".final");
const finalReportElement = document.querySelector("#final-report");
const tryAgainBtnElement = document.querySelector("#new-game");

let computerScore = 0;
let playerScore = 0;
let roundCounter = 5;

startContainerElement.removeChild(gameContainerElement);
startContainerElement.removeChild(finalSectionElement);

const startBtnElement = document.querySelector("#start");

const makeRandomChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
};

const startNewGame = () => {
    startContainerElement.appendChild(gameContainerElement);
    startContainerElement.removeChild(welcomeSectionElement);
};

startBtnElement.addEventListener("click", startNewGame);

const finishFiveRound = () => {
    if (roundCounter <= 0) {
        startContainerElement.appendChild(finalSectionElement);
        startContainerElement.removeChild(gameContainerElement);
        if (computerScore > playerScore) {
            finalReportElement.textContent = "Sorry, You Loose The Game!";
        } else {
            finalReportElement.textContent =
                "Congratulations, You Won The Game!";
        }
    }
};

const checkSelectionRock = () => {
    const playerSelection = "rock";
    const computerSelection = makeRandomChoice();
    let report = "";
    switch (true) {
        case playerSelection === computerSelection:
            report = "Rock And Rock, It's Tie!";
            break;
        case computerSelection === "paper":
            report = "Paper Beats Rock, You Loose This Round!";
            computerScore++;
            roundCounter--;
            computerScoreElement.textContent = `${computerScore}`;
            roundCounterElement.textContent = `${roundCounter}`;
            break;
        case computerSelection === "scissors":
            report = "Rock Beats Scissors, You Win This Round!";
            playerScore++;
            roundCounter--;
            playerScoreElement.textContent = `${playerScore}`;
            roundCounterElement.textContent = `${roundCounter}`;
            break;
    }
    roundReportElement.textContent = report;
    finishFiveRound();
};

rockBtnElement.addEventListener("click", checkSelectionRock);

const checkSelectionPaper = () => {
    const playerSelection = "paper";
    const computerSelection = makeRandomChoice();
    let report = "";
    switch (true) {
        case playerSelection === computerSelection:
            report = "Paper And Paper, It's Tie!";
            break;
        case computerSelection === "rock":
            report = "Paper Beats Rock, You Win This Round!";
            playerScore++;
            roundCounter--;
            playerScoreElement.textContent = `${playerScore}`;
            roundCounterElement.textContent = `${roundCounter}`;
            break;
        case computerSelection === "scissors":
            report = "Scissors Beats Paper, You Loose This Round!";
            computerScore++;
            roundCounter--;
            computerScoreElement.textContent = `${computerScore}`;
            roundCounterElement.textContent = `${roundCounter}`;
            break;
    }
    roundReportElement.textContent = report;
    finishFiveRound();
};

paperBtnElement.addEventListener("click", checkSelectionPaper);

const checkSelectionScissors = () => {
    const playerSelection = "scissors";
    const computerSelection = makeRandomChoice();
    let report = "";
    switch (true) {
        case playerSelection === computerSelection:
            report = "Scissors And Scissors, It's Tie!";
            break;
        case computerSelection === "rock":
            report = "Rock Beats Scissors, You Loose This Round!";
            computerScore++;
            roundCounter--;
            computerScoreElement.textContent = `${computerScore}`;
            roundCounterElement.textContent = `${roundCounter}`;
            break;
        case computerSelection === "paper":
            report = "Scissors Beats Paper, You Win This Round!";
            playerScore++;
            roundCounter--;
            playerScoreElement.textContent = `${playerScore}`;
            roundCounterElement.textContent = `${roundCounter}`;
            break;
    }
    roundReportElement.textContent = report;
    finishFiveRound();
};

scissorsBtnElement.addEventListener("click", checkSelectionScissors);

const tryAgain = () => {
    startContainerElement.appendChild(gameContainerElement);
    startContainerElement.removeChild(finalSectionElement);
    computerScore = 0;
    playerScore = 0;
    roundCounter = 5;
    computerScoreElement.textContent = `${computerScore}`;
    playerScoreElement.textContent = `${playerScore}`;
    roundCounterElement.textContent = `${roundCounter}`;
    roundReportElement.textContent = "";
};

tryAgainBtnElement.addEventListener("click", tryAgain);
