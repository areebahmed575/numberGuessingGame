import inquirer from "inquirer";

let computerGuess=Math.floor(Math.random()*10)
//console.log(computerGuess)
type ansType={
    GuessNumber:number,

    
}

let answer:ansType = await inquirer.prompt([
{
    type:"number",
    name:"GuessNumber",
    message:"Guess a number:"

}
])

while(answer.GuessNumber != computerGuess){
    message:"Guess a number!!"
    if(answer.GuessNumber == computerGuess){
       console.log("You won!")
    }
    else if(answer.GuessNumber >= computerGuess && answer.GuessNumber < 10){
        console.log("You have guess a greater number")

    }    
    else if(answer.GuessNumber <= computerGuess && answer.GuessNumber > 0){
    console.log("You have guess a lesser number")
    }
    else{
        console.log("enter a number b/w 1 to 10")

    }
}