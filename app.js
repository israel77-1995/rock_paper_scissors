// Variables to keep track of the scores
let humanScore = 0;
let computerScore = 0;

// Function to get computer's random choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play a round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const roundResult = document.getElementById('round-result');
    const scoreDisplay = document.getElementById('score');
    const finalResult = document.getElementById('final-result');

    // Check for a tie
    if (humanChoice === computerChoice) {
        roundResult.textContent = `It's a tie! Both chose ${humanChoice}`;
    } 
    // Human wins
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } 
    // Computer wins
    else {
        computerScore++;
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    // Update the score display
    scoreDisplay.textContent = `Score: Human ${humanScore}, Computer ${computerScore}`;

    // Check for the final winner
    if (humanScore === 5) {
        finalResult.textContent = "Congratulations! You are the overall winner!";
        disableButtons();
    } else if (computerScore === 5) {
        finalResult.textContent = "Sorry, the computer wins. Better luck next time!";
        disableButtons();
    }
}

// Function to disable the buttons when the game is over
function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

// Add event listeners to the buttons
document.getElementById('rock').addEventListener('click', function() {
    playRound('rock');
});
document.getElementById('paper').addEventListener('click', function() {
    playRound('paper');
});
document.getElementById('scissors').addEventListener('click', function() {
    playRound('scissors');
});
