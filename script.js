let playerScore = 0;
let computerScore = 0;
function computerSelection(){
    let computerChoice;
    var nr = Math.floor(Math.random(1)*3)+1;
    switch(nr){
    case 1:
        return "scissors";
        break;
    case 2:
        return "paper";
        break;
    case 3:
        return "rock";
        break;
    }
    
}
function playerSelection(){
    let selection = prompt("Enter your choice: ");
    return selection;
}

function playRound(computerSelection, playerSelection){

    var computer  = computerSelection;
    var player = playerSelection;

    if(computer=="scissors" && player=="paper"){
        computerScore++;
        return "You lose! Scissors beats paper";
    } else if(computer=="rock" && player=="paper"){
        playerScore++;
        return "You win! Paper beats rock";
    } else if(computer=="paper" && player=="rock"){
        computerScore++;
        return "You lose! Paper beats rock";
    } else if(computer=="scissors" && player=="rock"){
        playerScore++;
        return "You win! Rock beats scissors";
    } else if(computer=="paper" && player=="scissors"){
        playerScore++;
        return "You win! Scissors beats paper";
    } else if(computer=="rock" && player=="scissors"){
        computerScote++;
        return "You lose! Rock beats scissors";
    }else {
        return "It's a Draw!";
    }
    
}

function game(){
    for(let i=0;i<10;i++){
        let computerS = computerSelection();
        let playerS = playerSelection();
        console.log(playRound(computerS, playerS));
        if(playerScore==5){
            console.log("Player won!");
            break;
        } else if(computerScore==5){
            console.log("Computer won!");
            break;
        }
    }
}
game();

