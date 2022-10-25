const rockbutton = document.querySelector("#rock");
const paperbutton = document.querySelector("#paper");
const scissorsbutton = document.querySelector("#scissors");
const result_container = document.querySelector("#container")
let result_para = document.createElement("p");
let score_para = document.createElement("p")
let Round_number = document.createElement("p")
let final_score = document.createElement("p");


rounds = 0;
playerwins = 0;
computerwins=0;

rockbutton.addEventListener("click", () => {
    game("rock",result_para);
})

paperbutton.addEventListener("click", () => {
    game("paper",result_para);
})

scissorsbutton.addEventListener("click", () =>{
    game("scissors", result_para)
})


function getcomputerchoice(){
    const options = ["rock", "paper", "scissors"];
    const computerpicked = Math.floor(Math.random()*options.length);
    const getcomputerchoice = options[computerpicked];
    return getcomputerchoice;
}


function playRound(result_para ,playerselection, computerselection, score_para, Round_number, final_score){
    final_score.textContent = ""    
    rounds += 1
        if ((playerselection === "rock" && computerselection ==="rock" ) ||  (playerselection === "paper" && computerselection ==="paper" ) || (playerselection === "scissors" && computerselection ==="scissors" )) {
            result_para.textContent = `It was a tie! Computer chose ${computerselection} and you chose ${playerselection}`;
        } else if ((playerselection === "rock" && computerselection ==="scissors") || (playerselection === "scissors" && computerselection ==="paper") ||(playerselection === "paper" && computerselection ==="rock") ) {
            result_para.textContent = `Player won!  Computer Chose ${computerselection} and you chose ${playerselection}`
            playerwins += 1;
        }else if ( (playerselection === "scissors" && computerselection ==="rock") ||(playerselection === "paper" && computerselection ==="scissors") ||(playerselection === "rock" && computerselection ==="paper")){
            computerwins += 1;
            result_para.textContent = `computer won! Computer Chose ${computerselection} and you chose ${playerselection}`    
    }
    if (rounds ===5){
        if (playerwins > computerwins){
            final_score.textContent = "Congradulations! You won!"
        }else if (computerwins > playerwins){
            final_score.textContent = "The computer wins. Better luck next time!"
        }
        else if (computerwins === playerwins){
            final_score.textContent = "Too bad, No one won!"
        }
        rounds = 0;
        playerwins = 0;
        computerwins = 0;
    } 

    Round_number.textContent = `Round number ${rounds}`;
    score_para.textContent = `Computer: ${computerwins} Players_score:${playerwins}`;
    document.getElementById("container").appendChild(Round_number)
    document.getElementById("container").appendChild(result_para);
    document.getElementById("container").appendChild(score_para);
    document.getElementById("container").appendChild(final_score)

}


function game(player_selection, result_para) {  
    let final_result = playRound(result_para, player_selection, getcomputerchoice(), score_para, Round_number, final_score);
}
            