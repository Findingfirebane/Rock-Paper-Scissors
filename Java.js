const randomNumber = Math.random()
const computerSelection = '';

function getComputerChoice() {
    if (randomNumber >= 0 && randomNumber < 1/3){
        computerSelection ='rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){ 
        computerSelection = 'paper';
    } else if(randomNumber >= 2/3){
        computerSelection = 'scissors' ;}
    }




//const playerMove = prompt('Rock,Paper or Scissors?')
const playerMove = ''

function playRound(){ 
    const playerMove = prompt('Rock,Paper or Scissors?')

    if(playerMove === computerSelection){
        return 'you tied';
    } else if (playerMove === 'rock' && computerSelection === 'scissors'){
        return 'Rock beats Scissors, you win!';
    } else if (playerMove === 'paper' && computerSelection === 'rock'){
        return 'Paper beats Rock, you win!';
    } else if( playerMove === 'scissors' && computerSelection === 'paper'){//need to fix scisossors returning undefined
        return 'Scissors beats Paper, you win!';
    }else if (computerSelection === 'paper' && playerMove === 'rock'  ){
        return 'Computer Picked Paper ,you lost fucking idiot';
    } else if (computerSelection === 'scissors' && playerMove ==='paper'){
        return 'Computer Picked Scissors,you lost fucking idiot.';
    } else if(computerSelection === 'rock' && playerMove === 'scissors'){
        return 'Computer Picked Rock, you lost you fucking idiot.';
    } 
}

//console.log(playRound(playerMove, computerSelection))

playRound()
playRound()
playRound()


