
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

function plrWin(plrSelection, compSelection){
  plrScore++;
  const score = document.querySelector('#plrscore .score');
  score.textContent = plrScore;
  const container = document.querySelector('#main-container');
  const myElement = document.createElement('div');
  myElement.textContent = `Computer selected ${compSelection} | You selected ${plrSelection} | You won this round.`;
  myElement.style.cssText = "margin-top: 6px;";
  container.appendChild(myElement);
}

function plrLose(plrSelection, compSelection){
  compScore++;
  const score = document.querySelector('#compscore .score');
  score.textContent = compScore;

  const container = document.querySelector('#main-container');
  const myElement = document.createElement('div');
  myElement.textContent = `Computer selected ${compSelection} | You selected ${plrSelection} | You lost this round.`;
  myElement.style.cssText = "margin-top: 6px;";
  container.appendChild(myElement);
}

function tie(plrSelection, compSelection){
  const container = document.querySelector('#main-container');
  const myElement = document.createElement('div');
  myElement.textContent = `Computer selected ${compSelection} | You selected ${plrSelection} | It's a tie.`;
  myElement.style.cssText = "margin-top: 6px;";
  container.appendChild(myElement);
}

function playRound(playerSelection, computerSelection){
  let plrSelection = playerSelection.toLowerCase();
  let compSelection = computerSelection.toLowerCase();

  if(plrSelection === compSelection){
    return tie(plrSelection, compSelection);
  }
  if(compSelection === 'rock'){
    switch (plrSelection){
      case 'paper':
        plrWin(plrSelection, compSelection);
        return;
      case 'scissor':
        plrLose(plrSelection, compSelection);
        return;
      default:
        return "Invalid Player's input."
    }
  } else if(compSelection === 'paper'){
    switch (plrSelection) {
      case 'rock':
        plrLose(plrSelection, compSelection);
        return;
      case 'scissor':
        plrWin(plrSelection, compSelection);
        return;
      default:
        return "Invalid Player's input."
    }
  } else if(compSelection === 'scissor'){
    switch (plrSelection) {
      case 'rock':
        plrWin(plrSelection, compSelection);
        return;
      case 'paper':
        plrLose(plrSelection, compSelection);
        return;
      default:
        return "Invalid Player's input."
    }
  } else {
    return "Invalid Computer's Input"
  }
}


const rockChoice = document.querySelector(".button[data-choice='rock']");
const paperChoice = document.querySelector(".button[data-choice='paper']");
const scissorChoice = document.querySelector(".button[data-choice='scissor']");


rockChoice.addEventListener('click', selectRock);
paperChoice.addEventListener('click', selectPaper);
scissorChoice.addEventListener('click', selectScissor);

function selectRock(){
  rockChoice.classList.add('buttonTap');
  setTimeout(() => {
    rockChoice.classList.remove('buttonTap');
  }, 200);

  const computerSelection = computerPlay();
  const playerSelection = 'rock';
  playRound(playerSelection, computerSelection);
}
function selectPaper(){
  paperChoice.classList.add('buttonTap');
  setTimeout(() => {
    paperChoice.classList.remove('buttonTap');
  }, 200);

  const computerSelection = computerPlay();
  const playerSelection = 'paper';
  playRound(playerSelection, computerSelection);
}
function selectScissor(){
  scissorChoice.classList.add('buttonTap');
  setTimeout(() => {
    scissorChoice.classList.remove('buttonTap');
  }, 200);

  const computerSelection = computerPlay();
  const playerSelection = 'scissor';
  playRound(playerSelection, computerSelection);
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
