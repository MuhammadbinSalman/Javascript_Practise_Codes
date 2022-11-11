import PromptSync from "prompt-sync";
import randomInteger from "random-int";
//Prompt Sync And Random Integer Included
var count=0
function rps() {
    const prompt = PromptSync();
    const choices = ["rock", "paper", "scissor"]
    const botChoice = randomInteger(0, 2)
    const botChoiceChk = choices[botChoice]
    const userChoice = prompt("0 for Rock, 1 for paper, 2 for scissor  ")
    const userChoiceChk = choices[userChoice]
    let outcome = ""
    if (userChoiceChk == botChoiceChk) {
        outcome = "Draw"
    }
    else if (botChoiceChk == "rock" && userChoiceChk == "paper") {
        outcome = "You Win :)"
    }
    else if (botChoiceChk == "rock" && userChoiceChk == "scissor") {
        outcome = "Bot Win :("
    }
    else if (botChoiceChk == "paper" && userChoiceChk == "rock") {
        outcome = "Bot Win :("
    }
    else if (botChoiceChk == "paper" && userChoiceChk == "scissor") {
        outcome = "You Win :)"
    }
    else if (botChoiceChk == "scissor" && userChoiceChk == "rock") {
        outcome = "You Win :)"
    }
    else if (botChoiceChk == "scissor" && userChoiceChk == "paper") {
        outcome = "Bot Win :("
    }
    console.log(`\nBot choosed ${botChoiceChk}`)
    console.log(`You Choosed ${userChoiceChk}`)
    console.log(outcome)
    if (outcome=="Draw"){
        rps();
    }
}
rps();