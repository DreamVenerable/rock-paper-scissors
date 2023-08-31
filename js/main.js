let playerScore = 0
let computerScore = 0



function disableBtn() {
    btn.forEach(button => {
        button.disabled = true
    })
}

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerChoice){
    let computerChoice = getComputerChoice()
    playerChoice = playerChoice.toLowerCase()
    let result = ''

    if(playerChoice === computerChoice){
        result = `Draw!\n 
                  Your score: ${playerScore}\n 
                  Computer score: ${computerScore}`
    }
    else if(
        (playerChoice === 'rock' && computerChoice === 'scissors') || 
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
        ){
        playerScore = ++playerScore
        result = `You Win!\n 
                  Your score: ${playerScore}\n 
                  Computer score: ${computerScore}`

        if(playerScore === 5){
            result = `You are the first to reach 5 points, you win!\nReload the page to play again`
            disableBtn()
        }
    }
    else{
        computerScore = ++computerScore
        result = `You Lose!\n 
                  Your score: ${playerScore}\n 
                  Computer score: ${computerScore}`

        if(computerScore === 5){
            result = `Computer was the first to reach 5 points, you lose!\nReload the page to play again, better luck next time!`
            disableBtn()
        }
    }

    document.getElementById('result').innerText = result
}

const btn = document.querySelectorAll('button')

btn.forEach(button =>{
    button.addEventListener('click', () => {
        playRound(button.value)
    })
})
