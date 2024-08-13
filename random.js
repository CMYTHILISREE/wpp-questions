const prompt = require('prompt-sync')({sigint:true});
let guessNo = prompt("Enter the number between 1 and 10:");
const randomNumber = Math.ceil(Math.random()*(10-1)+1);

if(guessNo == randomNumber){
    console.log("Your Guess is Correct.Good Work");
}else{
    console.log("Not matched. The Number is,", randomNumber);
}
