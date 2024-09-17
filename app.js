
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

console.log(getComputerChoice());
console.log(getComputerChoice());

// Function to get humans's random choice
function getHumanChoice() {
    user_choice = parseInt(prompt("Enter your choice: "))

}

