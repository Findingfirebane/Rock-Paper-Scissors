let  computerSelection = ''
//computers move fucntion
function getComputerChoice() {
    const randomNumber = Math.random()

    if (randomNumber >= 0 && randomNumber < 1/3){
       computerSelection ='rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){ 
       computerSelection = 'paper';
    } else if(randomNumber >= 2/3){
       computerSelection = 'scissors' ;}
     }
     getComputerChoice()
     console.log(computerSelection)
    
     let playerScore = '0'
     let computerScore = '0'
     let tie = '0'
function roundOne(){
   let playerMove= prompt('rock, paper, scissors').toLowerCase();
   getComputerChoice()
   
    
    
if(playerMove === computerSelection){
    console.log(`You both Picked ${playerMove} Tied. I guess we have two idiots.`)
    tie++
    
    
} 
else if (playerMove === 'rock'){
    if(computerSelection ==='scissors'){
        console.log(`You picked ${playerMove} Computer Picked ${computerSelection}. Player wins`);
       playerScore++;
    }
    else{
        console.log(`Computer picked ${computerSelection}  Player picked ${playerMove} Won, womp womp`);
        computerScore++
    }
} 
else if (playerMove === 'scissors'){
    if(computerSelection === 'paper'){
        console.log(`Player Picked ${playerMove}, Computer Picked ${computerSelection} Win muddersucker`);
        playerScore++;
    }
    else(computerSelection === 'rock')
        console.log(`Player Picked ${playerMove}, Computer picked ${computerSelection},You lost again? Jackass.`);
        computerScore++;
    }
else if (playerMove === 'paper'){
    if (computerSelection === 'rock'){
        console.log(`Player Picked ${playerMove}, Computer Picked ${computerSelection} You done won son!`);
        playerScore++;
    } else (computerSelection === 'scissors')
        console.log(`Computer Picked${computerSelection},Player Picked ${playerMove}You lose fuck boi`);
       computerScore++;
        }
        console.log(playerScore, computerScore, tie)
        if(playerScore === 5){
            return 'You done won home boi';
        }else (computerScore === 5)
            return 'You lost you fucking pleab';
        } 



// Game Function
function game(){
    win()
    roundOne();
    roundOne();
    roundOne();
    roundOne();
    roundOne();
    roundOne();
    roundOne();
    roundOne();
    roundOne();
    roundOne();
    roundOne();
    roundOne();
    roundOne();
    roundOne();
    roundOne();
    roundOne();

}
game()

function win(){
if(playerScore === 5 && computerScore < 5){
    return 'You done won home boi';
}else (computerScore === 5 && playerScore < 5)
    return 'Computer won you fucking pleab';
}
console.log(win())