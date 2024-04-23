let userScore = 0 ;
let compSocre = 0 ;
// select the element
const choices = document.querySelectorAll(".choice") ;
const msg = document.querySelector("#msg") ;

const userScorePara = document.querySelector("#user-score") ;
const compScorePara = document.querySelector("#comp-score") ;


// generate random computer choice 
const genComChoice = () => {
    const options = ["paper" , "rock" , "scissors" ] ;
    const randIdx = Math.floor(Math.random() * 3) ;
    return options[randIdx] ;
};

// when game was draw 
const drawGame = () => {
    msg.innerText = "Game was Draw! , Play again. " ;
    msg.style.backgroundColor = "#081b31" ;

} ;

const showWinner = (userWin , userChoice,comChoice) => {
    if(userWin){
        userScore++ ;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ! Your ${userChoice} beats ${comChoice}` ;
        msg.style.backgroundColor = "green" ;
    }else {
        compSocre++;
        compScorePara.innerText = compSocre;
        msg.innerText = `You lose ! ${comChoice} beats Your ${userChoice}` ;
        msg.style.backgroundColor = "red" ;

    }
}

// Play game function 
const playGame = (userChoice) => {
console.log("user choice = ", userChoice) ;
// Genrate computer choice 
const comChoice = genComChoice() ;
console.log("comp choice = ",comChoice) ;



if(userChoice === comChoice) {
    // Draw game 
    drawGame();
} else {
let userWin = true ;
    if(userChoice ==="rock") {
        // scissors , paper
       userWin =  comChoice === "paper" ? false : true ;

    } else if (userChoice === "paper") {
        // rock , scissors 
        userWin = comChoice == "scissors" ? false : true ;
    } else {
        //  rock , paper 
      userWin =   comChoice === "rock" ? false : true ;

    }
    showWinner(userWin,userChoice,comChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});