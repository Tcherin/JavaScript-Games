// run with 'node game.js' in terminal

const prompt = require("prompt-sync")()

const name = prompt("What is your name?")
console.log("Greetings " + name);

const randomNumber = Math.floor(Math.random() * 100) + 1;
const numberOfGuesses = 10;

const previousGuesses = []

while(true){
    if (previousGuesses.length >= numberOfGuesses) {
        console.log("you lose!")
        break
    }

    let userGuess = prompt("Enter a number between 1 and 100......")
    userGuess = Number(userGuess)

    if (userGuess === randomNumber){
        console.log("Congrats! You win, you lucky so and so");                              
        break
    } else if (previousGuesses.includes(userGuess)) {
        console.log("you already tried that");
    } else if (userGuess < randomNumber){
        console.log("Too Low!");
        previousGuesses.push(userGuess)
    } else if (userGuess > randomNumber){
        console.log("too high!");
        previousGuesses.push(userGuess)
    }

    console.log(`Previous guesses: ${previousGuesses}`);
    console.log("----------------------------------------")
}    