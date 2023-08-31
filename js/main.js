let playerChoice
let computerChoice
let playerScore = 0
let computerScore = 0

const choices = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    const choice = choices[Math.floor(Math.random() * choices.length)]
    return choice
}

function playRound(playerChoice, computerChoice){
    playerChoice = prompt('Choose: rock, paper, or scissors').toLowerCase()
    computerChoice = getComputerChoice()

    if(!((playerChoice.includes('rock')) || (playerChoice.includes('paper')) || (playerChoice.includes('scissors')))){
        console.log(playRound())
    }
    else if(playerChoice === computerChoice){
        return 'Draw'
    }
    else if(
        (playerChoice === 'rock' && computerChoice === 'scissors') || 
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
        ){
        playerScore = ++playerScore
        return 'You Win!'
    }
    else{
        computerScore = ++computerScore
        return 'You Lose!'
    }
}

function game(){

    console.log(playRound(playerChoice, computerChoice))
    console.log(playRound(playerChoice, computerChoice))
    console.log(playRound(playerChoice, computerChoice))
    console.log(playRound(playerChoice, computerChoice))
    console.log(playRound(playerChoice, computerChoice))

    return `Your score is ${playerScore}, computer score is ${computerScore}`
}

console.log(game());