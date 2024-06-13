#! /usr/bin/env node

import inquirer from "inquirer"
// computer will generate a random number //2:user input for guessing number
//  3:compare user input with computer generated number

const randomNumber = Math.floor(Math.random()*6+1)
// console.log(randomNumber)
const answers = await inquirer.prompt([
    {
        name :"userguessednumber",
        type :"number",
        message :"please guess a number between 1_6:" ,
    }
])

if (answers.userguessednumber ===randomNumber){
  console.log("congratulation you guessed right number.")
}else {
    console.log("you guessed wrong number")
}