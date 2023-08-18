function getComputerChoice(){
    const choice = ['rock','paper','scissor']
    const length = choice.length
    return choice[Math.floor(Math.random() * length)]
}
let choicesImage = document.querySelectorAll('.choice img')
let choices = document.querySelectorAll('.choice')
let container = document.querySelector('.container')
let playerResult = document.querySelector('.playerChoice')
let computerResult = document.querySelector('.computerChoice')
let innerContent = container.innerHTML
let status = document.querySelector('.status')
let playerCurrentScore = 0 , computerCurrentScore = 0

function declareResult(){
    if(playerCurrentScore === 5 || computerCurrentScore === 5 ){
        container.classList.add('new')
        let newContent = document.querySelector('.new')
        newContent.textContent = playerCurrentScore === 5 ? 'Player Wins!':'Computer Wins!'
        newContent.style.fontSize = "35px"
        newContent.style.textAlign = "center"
        let btn = document.createElement('button')
        btn.textContent = "Play Again"
        newContent.append(btn)
        btn.addEventListener('click',changeContent)
    }  
}

function changeContent(){
    container.classList.remove('new')
    container.innerHTML = innerContent
    attachEvents();
}

function attachEvents(){
    choicesImage = document.querySelectorAll('.choice img');
    playerCurrentScore = 0 , computerCurrentScore = 0
    choices = document.querySelectorAll('.choice')
    container = document.querySelector('.container')
    playerResult = document.querySelector('.playerChoice')
    computerResult = document.querySelector('.computerChoice')
    innerContent = container.innerHTML
    status = document.querySelector('.status')
    choicesImage.forEach((choice) => {
        choice.addEventListener('click',game,true);
    });
}

attachEvents();

function game(e){
    let index = -Infinity
    if(e.target.alt === 'rock') index = 0
    else if(e.target.alt === 'paper') index = 1
    else if(e.target.alt === 'scissor') index = 2
    choices[index].classList.add('active')
        choicesImage.forEach((others,indices) => {
            if(index !== indices) choices[indices].classList.remove('active')
        });
        playerResult.src = 'images/rock.svg'
        computerResult.src = 'images/rock.svg'
        container.classList.add('start')
        status.textContent = "Loading.."
        setTimeout(() => {
            container.classList.remove('start')
            let user = e.target.alt
            let computer= getComputerChoice()
            if(user === 'scissor'){
                playerResult.src = `images/${user}.png`
            }else{
                playerResult.src = `images/${user}.svg`
            }
            if(computer === 'scissor'){
                computerResult.src = `images/${computer}.png`
            }else{
                computerResult.src = `images/${computer}.svg`
            }
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
        },500)
}