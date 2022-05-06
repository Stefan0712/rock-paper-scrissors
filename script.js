const playerMove = document.querySelector('.playerMove')
const computerMove = document.querySelector('.computerMove')



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
        showPlayerMove(player)
        showComputerMove(computer)
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
        showPlayerMove(player)
        showComputerMove(computer)
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
        showPlayerMove(player)
        showComputerMove(computer)
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
        showPlayerMove(player)
        showComputerMove(computer)
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
        showPlayerMove(player)
        showComputerMove(computer)
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
        showPlayerMove(player)
        showComputerMove(computer)
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
        showPlayerMove(player)
        showComputerMove(computer)
        const container = document.querySelector('.result');
        const content = document.createElement("p");
        content.classList.add('content');
        content.textContent = "It's a Draw!";
        container.appendChild(content);
        checkGame(playerScore,computerScore);

    }
    
}
function showPlayerMove(move){
    let firstMove = true;
    if(firstMove==true){
        firstMove=false;
        
    }else {
        document.querySelector('.moveImg').remove();
    }
    if(move=='rock'){
        
        const img = document.createElement('div')
        img.classList.add('moveImg');
        img.style.cssText = "background-image: url('./imgs/rock.jpg')"
        playerMove.appendChild(img);
    }else if(move=='paper'){
        const img = document.createElement('div')
        img.classList.add('moveImg');
        img.style.cssText = "background-image: url('./imgs/paper.svg')"
        playerMove.appendChild(img);
    }else if(move=='scrissors'){
        const img = document.createElement('div')
        img.classList.add('moveImg');
        img.style.cssText = "background-image: url('./imgs/scissors.svg')"
        playerMove.appendChild(img);
    } 
}
function showComputerMove(move){
    let firstMove = true;
    if(firstMove==true){
        firstMove=false;
        
    }else {
        document.querySelector('.moveImg').remove();
    }
    if(move=='rock'){
        const img = document.createElement('div')
        img.classList.add('moveImg');
        img.style.cssText = "background-image: url('./imgs/rock.jpg')"
        computerMove.appendChild(img);
    }else if(move=='paper'){
        const img = document.createElement('div')
        img.classList.add('moveImg');
        img.style.cssText = "background-image: url('./imgs/paper.svg')"
        computerMove.appendChild(img);
    }else if(move=='scrissors'){
        const img = document.createElement('div')
        img.classList.add('moveImg');
        img.style.cssText = "background-image: url('./imgs/scissors.svg')"
        computerMove.appendChild(img);
    } 
} 

