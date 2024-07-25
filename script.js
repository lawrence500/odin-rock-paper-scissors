let round = 0
let choices = [
  {choice : 'rock', img : 'images/rock.png'},
  {choice : 'paper', img : 'images/paper.png'},
  {choice : 'scissors', img : 'images/scissors.png'}
]
let playerHealth = 5
let computerHealth = 5

let gameOver = false

const healthBars = document.querySelectorAll('.healthbar')
const [playerHealthBar, computerHealthBar] = healthBars

const playersBars = playerHealthBar.children
const computerBars = computerHealthBar.children

const roundText = document.getElementById('current-round')
roundText.textContent = round
const resultText = document.getElementById('result-text')
resultText.textContent = ''

const playerDisplay = document.querySelector('#playersChoiceImg')
const computerDisplay = document.querySelector('#computersChoiceImg')


const gameDisplay = document.querySelector('.game-section')
const restartDisplay = document.querySelector('.restart-game')
const winnerResultText = document.getElementById('winner-text')

const choiceBtns = document.querySelectorAll('.option')

function checkWinner(){
  if(playerHealth < 1) {
    winnerResultText.textContent = ('computer wins')
    gameOver = true
  }
  
  if(computerHealth < 1) {
    winnerResultText.textContent = ('player wins')
    gameOver = true
  }

}

function gameFinsided(){

  if(gameOver){
    console.log('game over', checkWinner())

    choiceBtns.forEach(button => button.disabled = true)

    gameDisplay.classList.add('hide')
    restartDisplay.classList.remove('hide')
  }

}

function restartGame(){
  gameOver = false
  playerHealth = 5 
  computerHealth = 5
  round = 0
  resultText.textContent = ''


  for(let bar of playersBars){
    bar.classList.remove('losthealth')
  }

  for(let bar of computerBars){
    bar.classList.remove('losthealth')
  }


  choiceBtns.forEach(button => button.disabled = false)

  restartDisplay.classList.add('hide')
  gameDisplay.classList.remove('hide')

  roundText.textContent = round
}

function playGame(playersChoice, image){
  const getComputerChoice = choices[Math.floor(Math.random() * choices.length)]
  const computerChoice = getComputerChoice.choice
  computerDisplay.src = getComputerChoice.img

  const playerChoice = playersChoice
  playerDisplay.src = image

  checkWinner()
  gameFinsided()

  round++
  roundText.textContent = round


  if(playerChoice === computerChoice) {
    resultText.textContent = 'draw'
  }

  if(playerChoice === 'rock' && computerChoice === 'scissors'){
    computerHealth -= 1
    computerBars[computerHealth].classList.add('losthealth')
    resultText.textContent = 'rock beats scissors'
  } else if(playerChoice === 'scissors' && computerChoice === 'rock'){
    playerHealth -= 1
    playersBars[playerHealth].classList.add('losthealth')
    resultText.textContent = 'rock beats scissors'
  }


  if(playerChoice === 'paper' && computerChoice === 'rock'){
    computerHealth -= 1
    computerBars[computerHealth].classList.add('losthealth')
    resultText.textContent = 'paper beats rock'
  } else if(playerChoice === 'rock' && computerChoice === 'paper'){
    playerHealth -= 1
    playersBars[playerHealth].classList.add('losthealth')
    resultText.textContent = 'paper beats rock'

  }


  if(playerChoice === 'scissors' && computerChoice === 'paper'){
    computerHealth -= 1
    computerBars[computerHealth].classList.add('losthealth')
    resultText.textContent = 'scissors beats paper'
  } else if(playerChoice === 'paper' && computerChoice === 'scissors'){
    playerHealth -= 1
    playersBars[playerHealth].classList.add('losthealth')
    resultText.textContent = 'scissors beats paper'
  }

  console.log(playerHealth, computerHealth)
}