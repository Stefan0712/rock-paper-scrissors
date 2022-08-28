let playerScore = 0;
let aiScore = 0;
let playerMove;
let aiMove;
let winner;
let gameWinner;
let isGameStarted = false;





const addToHistory = (option, p) =>{
    const historyDiv = document.querySelector(".history");
    const el = document.createElement("img");
    el.classList.add("history-item")
    if(p==="ai"){
        el.classList.add("ai-item")
    }else if(p==="player"){
        el.classList.add("player-item")
    }
    el.setAttribute('src',option)
    historyDiv.appendChild(el)

}
const showPlayerChoice = (img) =>{
    let playerBoard = document.querySelector(".player-move");
    if(playerBoard.children.length  >  0){  
        playerBoard.removeChild(document.querySelector(".player-choice"))
    }
    let playerEl = document.createElement("img");
    playerEl.classList.add("player-choice")
    playerEl.setAttribute('src',img)
    playerBoard.appendChild(playerEl)
 
   

   


 }
 const showAiChoice = (aiImg) =>{
    let aiBoard = document.querySelector(".ai-move");
    
    
    if(aiBoard.children.length  >  0){  
        aiBoard.removeChild(document.querySelector(".ai-choice"))
    }
    let aiEl = document.createElement("img");
    aiEl.classList.add("ai-choice")
    aiEl.setAttribute('src',aiImg)
    aiBoard.appendChild(aiEl)
   
 }

const handleRock = () => {
    let img = "./imgs/rock.jpg"
    playerMove = "rock";
    showPlayerChoice(img);
    addToHistory(img,"player")
    handleAi();
    compare();

}
const handlePaper = () => {
    let img = "./imgs/paper.svg";
    playerMove = "paper";
    showPlayerChoice(img);
    addToHistory(img,"player")
    handleAi();
    compare();
}
const handleScissors = () => {
     let img = "./imgs/scissors.svg"
    playerMove = "scissors";
    showPlayerChoice(img);
    addToHistory(img,"player")
    handleAi();
    compare();
}

const handleAi = () =>{
    let nr = Math.round(Math.random()*5)
    if(nr === 0 || nr===3){
        let aiImg = "./imgs/rock.jpg"
        showAiChoice(aiImg)
        setTimeout(()=>{
            addToHistory(aiImg,"ai")
        },300)
        aiMove="rock"
    }else if(nr === 1 || nr===4){
        let aiImg = "./imgs/paper.svg";
        showAiChoice(aiImg)
        setTimeout(()=>{
            addToHistory(aiImg,"ai")
        },300)
        aiMove="paper"

    }else if(nr===2 || nr===5){
        let aiImg = "./imgs/scissors.svg"
        showAiChoice(aiImg)
        setTimeout(()=>{
            addToHistory(aiImg,"ai")
        },300)
        aiMove="scissors";
    }
}

const compare = () =>{
    if(playerMove==="rock" && aiMove==="paper"){
        winner = "Ai";
    }else if(playerMove==="rock" && aiMove==="rock"){
        winner = "Tie";
    }else if(playerMove==="rock" && aiMove==="scissors"){
        winner = "Player";
    }else if(playerMove==="paper" && aiMove==="paper"){
        winner = "Tie";
    }else if(playerMove==="paper" && aiMove==="rock"){
        winner = "Player";
    }else if(playerMove==="paper" && aiMove==="scissors"){
        winner = "Ai";
    }else if(playerMove==="scissors" && aiMove==="paper"){
        winner = "Player";
    }else if(playerMove==="scissors" && aiMove==="rock"){
        winner = "Ai";
    }else if(playerMove==="scissors" && aiMove==="scissors"){
        winner = "Tie";
    }
    handleGame(winner);
    document.querySelector(".result").innerHTML = winner
}


 const startGame = () =>{
    if(!isGameStarted){
        document.querySelector(".start-screen").classList.remove("show")
        document.querySelector(".game").classList.remove("hidden")
    }
    document.querySelector(".result").innerHTML = "Please pick an option!"
 }

 const handleGame = () =>{
    let player1Score = document.querySelector(".player-score")
    let player2Score = document.querySelector(".ai-score")
    if(winner==="Player"){
        playerScore++;
        player1Score.textContent = playerScore
        
    }else if(winner==="Ai"){
        aiScore++;
        player2Score.textContent = aiScore
    }
    checkScore();
    
 }

 const checkScore = () =>{
    if(playerScore===5){
        gameWinner = "Player"
        endGame(gameWinner);
    }
    if(aiScore===5){
        gameWinner = "AI"
        endGame(gameWinner);
    }
 }

 const endGame = (winner) =>{
    document.querySelector(".endScreen").classList.remove("hidden")

    document.querySelector("#winner-name").innerHTML = winner;
    
 }


 