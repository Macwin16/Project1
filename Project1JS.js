let userScore = 0;
let computerScore = 0;
const userScore_div = document.getElementById("user-score");
const computerScore_div = document.getElementById("computer-score");
const rock_choice = document.getElementById("rock-choice");
const paper_choice = document.getElementById("paper-choice");
const scissor_choice = document.getElementById("scissor-choice");
const message_board = document.querySelector(".message-board");

function getComputerChoice(){
    var choices = ["rock", "paper", "scissor"];
    var randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function getUserChoice(){
    rock_choice.addEventListener('click', function(){game("rock")});
    paper_choice.addEventListener('click', function(){game("paper")});
    scissor_choice.addEventListener('click', function(){game("scissor")});
}

function toUpperCase(rockPaperScissor){

    if(rockPaperScissor == "rock"){
        return "Rock";
    }

    else if(rockPaperScissor == "paper"){
        return "Paper";
    }

    else if(rockPaperScissor == "scissor"){
        return "Scissor";
    }
}

function win(a,b){
    userScore++;
    userScore_div.innerHTML = userScore;
    message_board.innerHTML = "You win! " + toUpperCase(a) + " beats " + toUpperCase(b) + ".";  
}

function lose(){
    computerScore++;
    computerScore_div.innerHTML = computerScore;
    message_board.innerHTML = "You lose! " + toUpperCase(b) + " beats " + toUpperCase(a) + ".";  
}

function tie(){
    message_board.innerHTML = "DRAW";
}

function game(userChoice){

    const computerChoice = getComputerChoice();
    
    switch(userChoice+computerChoice){
        case("rock"+"scissor"):
        case("scissor"+"paper"):
        case("paper"+"rock"):
        win(userChoice,computerChoice);
        break;
        
        case ("rock"+"paper"):
        case ("paper"+"scissor"):
        case ("scissor"+"rock"):
        lose(userChoice,computerChoice);
        break;

        case ("rock"+"rock"):
        case ("paper"+"paper"):
        case ("scissor"+"scissor"):
        tie(userChoice,computerChoice);
        break;
    }
}

function main(){
    getUserChoice();
}

main();