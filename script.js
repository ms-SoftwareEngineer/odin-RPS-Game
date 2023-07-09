function getComputerChoice(){
    const choice = ['rock','paper','scissor']
    const length = choice.length
    return choice[Math.floor(Math.random() * length)]
}
const choicesImage = document.querySelectorAll('.choice img')
const choices = document.querySelectorAll('.choice')
const container = document.querySelector('.container')
const playerResult = document.querySelector('.playerChoice')
const computerResult = document.querySelector('.computerChoice')
const innerContent = container.innerHTML
const status = document.querySelector('.status')
let playerCurrentScore = 0 , computerCurrentScore = 0
function declareResult(){
    if(playerCurrentScore === 5){
        container.classList.add('new')
        const newContent = document.querySelector('.container.new')
        newContent.textContent = "Player Wins!"
        newContent.style.fontSize = "35px"
        newContent.style.textAlign = "center"
        const btn = document.createElement('button')
        btn.textContent = "Play Again"
        newContent.append(btn)
        btn.addEventListener('click',() => {
            container.classList.remove('new')
            newContent.innerHTML = innerContent
        })
    } 
    else if(computerCurrentScore === 5){
        container.classList.add('new')
        const newContent = document.querySelector('.new')
        newContent.textContent = "Computer Wins!"
        newContent.style.fontSize = "35px"
        newContent.style.textAlign = "center"
        const btn = document.createElement('button')
        btn.textContent = "Play Again"
        newContent.append(btn)
        btn.addEventListener('click',() => {
            container.classList.remove('new')
            newContent.innerHTML = innerContent
        })
    } 
}

choicesImage.forEach((choice,index) => {
    choice.addEventListener('click',(e) => {
        choices[index].classList.add('active')
        choicesImage.forEach((others,indices) => {
            if(index !== indices) choices[indices].classList.remove('active')
        });
        container.classList.add('start')
        status.textContent = "Loading.."
        setTimeout(() => {
            container.classList.remove('start')
            let user = choice.alt
            let computer= getComputerChoice()
            console.log(user,'Vs',computer)
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
        },2500)
    })
})