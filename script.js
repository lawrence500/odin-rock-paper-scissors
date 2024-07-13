const choices = ['rock', 'paper', 'scissors']
let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * choices.length)
    return choices[computerChoice]
}

const getHumanChoice = prompt('choose (rock, paper, scissors)')

