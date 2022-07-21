const arr = ["rock", "paper", "scissor"]
let winners = []

function resetgame() {
    winners = []
    document.querySelector('.playerScore').textContent="Score: 0";
    document.querySelector('.computerScore').textContent="Score: 0";
    document.querySelector('.ties').textContent="Ties: 0";
    document.querySelector('.winner').textContent="";
    document.querySelector('.playerChoice').textContent="";
    document.querySelector('.computerChoice').textContent="";
    document.querySelector('.reset').style.display = "none"
}


function game() {
    //play the game until someone wins 5 times
let imgs = document.querySelectorAll('img')
    imgs.forEach((img) =>
    img.addEventListener(('click'), () => {
        if (img.id){
            playRound(img.id);
        }
    }))
}


function playRound (playerChoice) {
    let wins = checkWins();
      if(wins >=5){
        return
      }

    const computerChoice = computerSelection();
    let winner = checkWinner(playerChoice,computerChoice)
    winners.push(winner)
    playersWins()
    displayRound(playerChoice,computerChoice,winner);
    wins = checkWins();
      if (wins == 5)
      //display end results
      //change the button to visible,
      //change the text to display winner
      displayEnd()
}

function computerSelection() {  
    const choice = arr[Math.floor(Math.random()*arr.length)]
   
    return choice;
}

function displayEnd() {
let playerWins = winners.filter((item) => item == 'Player').length;

if (playerWins == 5){
    document.querySelector('.winner').textContent = 'You won 5 games, congratz.'
} else {
    document.querySelector('.winner').textContent = 'Sorry, the computer won 5 times'
} 
    document.querySelector('.reset').style.display = "flex"
}


function playersWins() {
    let pWinCount = winners.filter((item) => item == 'Player').length;
    let cWinCount = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`
    document.querySelector('.ties').textContent = `Score: ${ties}`
    
}


function displayRound(playerChoice,computerChoice,winner) {
    document.querySelector('.playerChoice').textContent=`You chose ${ playerChoice.charAt(0) + playerChoice.slice (1)}`;
    document.querySelector('.computerChoice').textContent=`The computer chose ${ computerChoice.charAt(0) + computerChoice.slice (1)}`;
    document.querySelector('.winner').textContent = `Round winner: ${winner}`; 
}

function checkWins() {
    let pWinCount = winners.filter((item) => item == 'Player').length;
    let cWinCount = winners.filter((item) => item == 'Computer').length;
    return Math.max(pWinCount,cWinCount)
}

function checkWinner (choice1, choice2) {
    if ((choice1 == 'rock' && choice2 == 'scissor') || 
    (choice1 == 'paper' && choice2 == 'rock') ||
    (choice1 == 'scissor' && choice2 == 'paper')) {
        return 'Player'
    } else if (choice1 == choice2) {
        return 'Tie' }
    else {
        return 'Computer'
    }
}
function logWins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let Tie = winners.filter((item) => item == 'Tie').length
}


game()