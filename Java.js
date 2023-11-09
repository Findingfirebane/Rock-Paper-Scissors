//const randomNumber = Math.random()
let computerSelection = '';

function getComputerChoice() {
    const randomNumber = Math.random()


    if (randomNumber >= 0 && randomNumber < 1/3){
        computerSelection ='rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){ 
        computerSelection = 'paper';
    } else if(randomNumber >= 2/3){
        computerSelection = 'scissors' ;}
    }



const playerMove = ''

function playRound(){
   getComputerChoice()
    
    
     // have to make prompt input case insensitive
    const playerMove = prompt('rock, paper, scissors')

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
}//create a function to determine if win, lose, or tie
 



// game fucntion
function game(){
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());

}
game()



//win counter
function scoreTracker(){
    let playerScore = '0'
    let computerScore = '0'
    let tie = '0'
if(playerMove == computerSelection){
    console.log(tie++)
} 
else if (playerMove === 'rock'){
    if(computerSelection ==='scissors'){
        console.log('Player won');
        playerScore++;
    }
    else{
        console.log('Computer Won womp womp');
        computerScore++
    }
} 
else if (playerMove === 'scissors'){
    if(computerSelection === 'paper'){
        console.log('You Win muddersucker');
        playerScore++;
    }
    else(computerSelection === 'rock'){
        console.log('You lost again?');
        computerScore++;
    }
else if (playerMove === 'paper'){
    if (computerSelection === 'rock'){
        console.log('You done won son!');
        playerScore++;
    } else (computerSelection === 'scissors'){
        console.log('you lost fuck boi');
        computerScore++;

    }
}
}




}