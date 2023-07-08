function getComputerChoice(){
    const choice = ['rock','paper','scissor']
    const length = choice.length
    return choice[Math.floor(Math.random() * length)]
}

let playerCurrentScore = 0, computerCurrentScore = 0
function playRound(e){
    let user = e.target.textContent.toLowerCase()
    let computer = getComputerChoice()
    let status = document.querySelector('.status')
    let playerScore = document.querySelector('.playerScore')
    let computerScore = document.querySelector('.computerScore')
    if(user === 'rock' && computer === 'scissor' || user === 'paper' && computer === 'rock' || 
    user === 'scissor' && computer === 'paper'){
        status.textContent = `You win! ${user} beats  ${computer}`
        playerCurrentScore++
        playerScore.textContent = playerCurrentScore
        computerScore.textContent = computerCurrentScore
    }else if(user === computer){
        status.textContent = `Draw Match...`
        playerScore.textContent = playerCurrentScore
        computerScore.textContent = computerCurrentScore
    }else{
        status.textContent = `You Lose! ${computer} beats ${user}`
        computerCurrentScore++
        playerScore.textContent = playerCurrentScore
        computerScore.textContent = computerCurrentScore
    }
    declareResult()
}

function declareResult(){
    const finalResult = document.querySelector('.announce')
    if(playerCurrentScore === 5) finalResult.textContent = "Player Wins!"
    else if(computerCurrentScore === 5) finalResult.textContent = "Computer Wins!!"
    else if(computerCurrentScore === 5 && playerCurrentScore === 5) finalResult.textContent ='Draw...' 
}
const btn = document.querySelectorAll('button')
btn.forEach((button) => {
    button.addEventListener('click',playRound)
})