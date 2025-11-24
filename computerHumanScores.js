export default class HumanChoice {
    constructor(humanScore = 0, computerScore = 0) {
        this.humanScore = humanScore;
        this.computerScore = computerScore;
    }
    playRound(humanChoice, computerChoice) {
        var roundCounter = 1;
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "SCISSORS") ||
            (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "ROCK") ||
            (humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "PAPER")
        ) {
            this.humanScore++;
            return "You win! " + humanChoice + " beats " + computerChoice + ".";
        } else {
            this.computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
        roundCounter++;
    }
    playGame(humanChoiceInstance, computerChoiceInstance) {
        while(this.roundCounter <= 5) {
            this.playRound(humanChoiceInstance, computerChoiceInstance);
        }
        if (this.humanScore > this.computerScore) {
            return "Congratulations! You won the game!";
        } else if (this.humanScore < this.computerScore) {
            return "Sorry! The computer won the game.";
        } else {
            return "The game is a tie!";
        }

    }     
}