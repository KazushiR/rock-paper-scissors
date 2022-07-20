function getcomputerchoice(){
    const options = ["rock", "paper", "scissors"];
    const computerpicked = Math.floor(Math.random()*options.length);
    const getcomputerchoice = options[computerpicked];
    return getcomputerchoice;
}



function playRound(playerselection, computerselection){
        if ((playerselection === "rock" && computerselection ==="rock" ) ||  (playerselection === "paper" && computerselection ==="paper" ) || (playerselection === "scissors" && computerselection ==="scissors" )) {
            result = `It\'s a tie!! computer picked ${computerselection}`;
            return result
        } else if ((playerselection === "rock" && computerselection ==="scissors") || (playerselection === "scissors" && computerselection ==="paper") ||(playerselection === "paper" && computerselection ==="rock") ) {
            result =  `Player wins! Computer picked ${computerselection}`;
            return result;
        }else if ( (playerselection === "scissors" && computerselection ==="rock") ||(playerselection === "paper" && computerselection ==="scissors") ||(playerselection === "rock" && computerselection ==="paper")){
            result = `Computer wins! Computer picked ${computerselection}`;
            return result;
    }
}

function game() {  
    for (let i=1; i<6; i++){
        console.log(`It is round number ${i}`);
        player_result = prompt("Please choose rock, paper, or scissors").toLowerCase();
        if (player_result === "rock" || player_result === "paper" || player_result === "scissors"){
            let final_result = playRound(player_result, getcomputerchoice());
            console.log(final_result)
        }else{
            console.log("You did not choose rock, paper, or scissors!")
        }
        if (i===5){
                console.log("Game is done!");
            }
    }
}
            