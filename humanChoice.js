export default class HumanChoice {
    getHumanChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        let userInput = prompt("Enter Rock, Paper, or Scissors: ");
        while (!choices.includes(userInput)) {
            userInput = prompt("Invalid choice. Please enter Rock, Paper, or Scissors:");
        }
        return userInput;
    }
}   