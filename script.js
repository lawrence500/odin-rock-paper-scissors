const choices = ['rock', 'paper', 'scissors']

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * choices.length)
    return choices[computerChoice]
}

console.log(getComputerChoice())