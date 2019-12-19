
let plrScore = 0;
let compScore = 0;

function computerPlay(){
  //Return a random number between 1 and 3
  let choice = Math.floor((Math.random() * 3) + 1);
  switch (choice) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissor';
    default:
      return 'Invalid computerPlay()';
  }
}

function playRound(playerSelection, computerSelection){
  let plrSelection = playerSelection.toLowerCase();
  let compSelection = computerSelection.toLowerCase();
  const tie = "It's a tie."
  const plrWin = "You won this round."
  const plrLose = "You lost this round."

  if(plrSelection === compSelection){
    return tie
  }
  if(compSelection === 'rock'){
    switch (plrSelection){
      case 'paper':
        plrScore++;
        return plrWin;
      case 'scissor':
        compScore++;
        return plrLose;
      default:
        return "Invalid Player's input."
    }
  } else if(compSelection === 'paper'){
    switch (plrSelection) {
      case 'rock':
        compScore++;
        return plrLose
      case 'scissor':
        plrScore++;
        return plrWin
      default:
        return "Invalid Player's input."
    }
  } else if(compSelection === 'scissor'){
    switch (plrSelection) {
      case 'rock':
        plrScore++;
        return plrWin;
      case 'paper':
        compScore++;
        return plrLose;
      default:
        return "Invalid Player's input."
    }
  } else {
    return "Invalid Computer's Input"
  }
}

function game(){
  const numOfRounds = 3;
  let winner = "";

  for (let i=0; i<numOfRounds; i++){
    const computerSelection = computerPlay();
    const playerSelection = prompt("Write rock, paper or scissor");
    let result = playRound(playerSelection, computerSelection);
  }
  if(plrScore > compScore){
    winner = "You won this game"
  }else if( plrScore === compScore){
    winner ="This game is a tie"
  }else{
    winner = "Computer won this game"
  }
  return winner;

}

console.log('WORKING')
console.log(game());
