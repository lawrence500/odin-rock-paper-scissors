const choices = ['rock', 'paper', 'scissors']
let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * choices.length)
    return choices[computerChoice]
}

const getHumanChoice = prompt('choose (rock, paper, scissors)')

const rewardText = (winner) => {
    return console.log(`${winner} wins 1 point`)
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
    console.log(humanChoice)

    if(humanChoice === computerChoice){
        console.log('draw...')
    }

    if(humanChoice === 'paper' && computerChoice === 'rock'){
        rewardText('human')
    } else{
        rewardText('computer')
    }

    if(humanChoice === 'scissors' && computerChoice === 'paper'){
        rewardText('human')
    } else{
        rewardText('computer')
    }

    if(humanChoice === 'rock' && computerChoice === 'scissors'){
        rewardText('human')
    } else{
        rewardText('computer')
    }
}

const computerSelection = getComputerChoice()
const humanSelection = getHumanChoice

playRound(getHumanChoice, getComputerChoice)

