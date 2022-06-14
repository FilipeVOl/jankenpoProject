const arr = ["rock", "paper", "scissor"]
const winners = []

function game() {
    for (let i = 0; i < 5; i++) {
        playRound((i)+1)
    }
    logWins()
}

function playRound (round) {
    const PlayerSelection = playerChoice();
    const ComputerSelection = computerChoice();
    let winner = checkWinner(PlayerSelection,ComputerSelection)
    winners.push(winner)
    logRound (PlayerSelection, ComputerSelection, winner, round)
}



function playerChoice () {
    let input = prompt('Please write "Rock", "Paper" or "Scissor"')
    while (input===null) {
        input = prompt('Please write "Rock", "Paper" or "Scissor"')
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check==false) {
        input = prompt ('correct grammar');
    input = input.toLowerCase();
    check = validateInput(input)
    }
    return input;
}

function validateInput(choice) {
     return arr.includes(choice);
    }
function computerChoice () {
    return arr[Math.floor(Math.random()*arr.length)]
}

function checkWinner (choiceP, choiceC) {
    if ((choiceP == 'rock' && choiceC == 'scissor') || 
    (choiceP == 'paper' && choiceC == 'rock') ||
    (choiceP == 'scissor' && choiceC == 'paper')) {
        return 'Player'
    } else if (choiceP == choiceC) {
        return 'Tie' }
    else {
        return 'Computer'
    }
}
function logWins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let Tie = winners.filter((item) => item == 'Tie').length
    console.log ('results:')
    console.log ('Player wins:', playerWins)
    console.log ('Computer wins:', computerWins)
    console.log ('ties', Tie)
}

function logRound(playerChoice,computerChoice,winner,round) {
console.log ('Round:', round)
console.log ('Player chose:', playerChoice);
console.log ('Computer chose:', computerChoice);
console.log (winner, 'has won the round!')
}
