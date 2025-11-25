export default class HumanChoice {
    constructor(humanScore = 0, computerScore = 0) {
        this.humanScore = humanScore;
        this.computerScore = computerScore;
    }
    playRound(humanChoice, computerChoice) {
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
         
    }
    playGame(humanChoiceInstance, computerChoiceInstance) {
        while(this.roundCounter <= 5) {
            var counter =1
            this.playRound(humanChoiceInstance, computerChoiceInstance);
            counter++;
        }
        if (counter == 5 && this.humanScore > this.computerScore) {
            return "Congratulations! You won the game!";
        } else if (counter == 5 && this.humanScore < this.computerScore) {
            return "Sorry! The computer won the game.";
        } else {
            return "The game is a tie!";
        }

    }     
}