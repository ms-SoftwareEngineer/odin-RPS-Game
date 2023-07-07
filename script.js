function getComputerChoice(){
    const choice = ['rock','paper','scissor']
    const length = choice.length
    return choice[Math.floor(Math.random() * length)]
}

let flag = -Infinity
function playRound(userSelection,computerSelection){
    let user = userSelection.toLowerCase()
    let computer = computerSelection
    let status = ""
    if(user === 'rock' && computer === 'scissor' && user === 'paper' && computer === 'scissor' && 
    user === 'scissor' && computer === 'paper'){
        status = `You win! ${user} beats  ${computer}`
        flag = 1
    }else if(user === computer){
        status = `Draw Match...`
        flag = 0
    }else{
        status = `You Lose! ${computer} beats ${user}`
        flag = -1
    }
    return status
}


let userScore = 0, computerScore = 0
function game(){
    for(let i = 1; i <= 5; i++){
        let userSelection = prompt('Enter you choice:\nRock\nPaper\nScissor')
        let computerSelection = getComputerChoice()
        let status = playRound(userSelection,computerSelection)
        if(flag === 1){
            console.log(status)
            userScore++
        } 
        else if(flag === -1){
            console.log(status)
            computerScore++
        }else{
            console.log(status)
        }
    }
}

function declareResult(){
    game()
    if(userScore > computerScore) console.log('You Won the Game !!!')
    else if(computerScore > userScore) console.log('You Lose the Game...')
    else console.log('Draw Match')
    console.log(userScore)
    console.log(computerScore)
}

declareResult()
