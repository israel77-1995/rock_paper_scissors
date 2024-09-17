
// Function to get computer's random choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3);
    if (randomNumber == 0) {
        return "rock";
    } else if (randomNumber == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}



// Function to get humans's random choice
function getHumanChoice() {
    user_choice = (prompt("Enter rock, paper or scissors: "));
    return user_choice;

}

console.log("Computer chose:", getComputerChoice());
console.log("Human chose:", getHumanChoice());

//Declare the players score variables

let humanScore = 0;      // This will keep track of the human player's score
let computerScore = 0;   // This will keep track of the computer's score

//Step 5: Write the logic to play a single round

function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive by converting it to lowercase
    humanChoice = humanChoice.toLowerCase();
  
    // Check for a tie
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
        return;
    }

    // Define the winning conditions for the human player
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        // Human wins
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        // Computer wins
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    // Display the current scores
    console.log(`Score: Human ${humanScore}, Computer ${computerScore}`);
}

// Test the function
const humanSelection = getHumanChoice();  // Prompt user for input
const computerSelection = getComputerChoice();  // Random computer choice

playRound(humanSelection, computerSelection);  // Play one round


function playGame() {
    // Declare score variables inside the playGame function
    let humanScore = 0;
    let computerScore = 0;

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        // Check for a tie
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
            return;
        }

        // Define winning conditions for the human player
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            // Human wins
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            // Computer wins
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }

        // Display the current scores
        console.log(`Score: Human ${humanScore}, Computer ${computerScore}`);
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();  // Prompt user for input
        const computerSelection = getComputerChoice();  // Random computer choice

        playRound(humanSelection, computerSelection);  // Play one round
    }

    // Declare the overall winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Sorry, the computer wins. Better luck next time!");
    } else {
        console.log("The game is a tie!");
    }
}

// Call playGame to start the game
playGame();





