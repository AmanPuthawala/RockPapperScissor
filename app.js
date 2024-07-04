let userScroe = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPar = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}

 const drawGame = () => {
    console.log("game was draw.");
    msgPar.innerText = "Game was Draw. Play again...";
    msgPar.style.backgroundColor = "#081b31";
 }

const showWinner = (userWin) => {
    if(userWin) {
        userScroe++;
        uScore.innerText = userScroe;
        console.log("You win!");
        msgPar.innerText = "You win!";
        msgPar.style.backgroundColor = "green";
    }
    else{
        compScore++;
        cScore.innerText = compScore;
        console.log("You lose...");
        msgPar.innerText = "You lose...";
        msgPar.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false: true;
        }     
        showWinner(userWin);
    }
}


choices.forEach((Choice) => {
   // console.log(Choice);
    Choice.addEventListener("click", () => {
        const userChoice = Choice.getAttribute("id");
        playGame(userChoice);
    })
})