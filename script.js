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
function checkGame(playScore,computerScore){
        const winContainer = document.querySelector('.win');
        const content = document.createElement("h1");
        content.classList.add('winContent');
        const btns = document.querySelector(".btns");
        
    if(playScore==5){
        
        content.textContent = "Player wins!";
        document.getElementById("rock").setAttribute('disabled', 'disabled');
        document.getElementById("paper").setAttribute('disabled', 'disabled');
        document.getElementById("scissors").setAttribute('disabled', 'disabled');

        
    }
    if(computerScore==5){
       
        content.textContent = "Computer wins!";
        document.getElementById("rock").setAttribute('disabled', 'disabled');
        document.getElementById("paper").setAttribute('disabled', 'disabled');
        document.getElementById("scissors").setAttribute('disabled', 'disabled');
    }
    winContainer.appendChild(content);

}

function playRound(playerSelection){

    var computer  = computerSelection();
    var player = playerSelection;

    if(computer=="scissors" && player=="paper"){
        computerScore++;
        const container = document.querySelector('.result');
        const content = document.createElement("p");
        content.classList.add('content');
        content.textContent = "You lose! Scissors beats paper";
        container.appendChild(content);
        document.getElementById('playerScore').innerHTML = playerScore;
        document.getElementById('computerScore').innerHTML = computerScore;
        checkGame(playerScore,computerScore);
    } else if(computer=="rock" && player=="paper"){
        playerScore++;
        const container = document.querySelector('.result');
        const content = document.createElement("p");
        content.classList.add('content');
        content.textContent = "You win! Paper beats rock";
        container.appendChild(content);
        document.getElementById('playerScore').innerHTML = playerScore;
        document.getElementById('computerScore').innerHTML = computerScore;
        checkGame(playerScore,computerScore);

    } else if(computer=="paper" && player=="rock"){
        computerScore++;
        const container = document.querySelector('.result');
        const content = document.createElement("p");
        content.classList.add('content');
        content.textContent = "You lose! Paper beats rock";
        container.appendChild(content);
        document.getElementById('playerScore').innerHTML = playerScore;
        document.getElementById('computerScore').innerHTML = computerScore;
        checkGame(playerScore,computerScore);

    } else if(computer=="scissors" && player=="rock"){
        playerScore++;
        const container = document.querySelector('.result');
        const content = document.createElement("p");
        content.classList.add('content');
        content.textContent = "You win! Rock beats scissors";
        container.appendChild(content);
        document.getElementById('playerScore').innerHTML = playerScore;
        document.getElementById('computerScore').innerHTML = computerScore;
        checkGame(playerScore,computerScore);

    } else if(computer=="paper" && player=="scissors"){
        playerScore++;
        const container = document.querySelector('.result');
        const content = document.createElement("p");
        content.classList.add('content');
        content.textContent = "You win! Scissors beats paper";
        container.appendChild(content);
        document.getElementById('playerScore').innerHTML = playerScore;
        document.getElementById('computerScore').innerHTML = computerScore;
        checkGame(playerScore,computerScore);

    } else if(computer=="rock" && player=="scissors"){
        computerScore++;
        const container = document.querySelector('.result');
        const content = document.createElement("p");
        content.classList.add('content');
        content.textContent ="You lose! Rock beats scissors";
        container.appendChild(content);
        document.getElementById('playerScore').innerHTML = playerScore;
        document.getElementById('computerScore').innerHTML = computerScore;
        checkGame(playerScore,computerScore);

    }else {
        const container = document.querySelector('.result');
        const content = document.createElement("p");
        content.classList.add('content');
        content.textContent = "It's a Draw!";
        container.appendChild(content);
        checkGame(playerScore,computerScore);

    }
    
}


/*function game(){
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
*/

