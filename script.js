const choices = ['rock', 'paper', 'scissors']

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * choices.length)
    return choices[computerChoice]
}

const getHumanChoice = prompt('choose (rock, paper, scissors)')

