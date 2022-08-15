let totalScore={playerScore: 0, computerScore: 0}
function botChoose(){
    const botC=["Scissors", "Rock", "Paper"]
    const ranBotC=Math.floor(Math.random()*3)
    const randomBotC=botC[ranBotC]
    return randomBotC
}
function Result(playerChoose, computerChoose){
    let score
    if(playerChoose==computerChoose){
        score=0
    }
    if(playerChoose=="Rock"&& computerChoose=="Scissors"){
        score=1
    }else if(playerChoose=="Paper"&& computerChoose=="Rock"){
        score=1
    }else if(playerChoose=="Scissors"&& computerChoose=="Paper"){
        score=1
    };
    if(playerChoose=="Rock"&& computerChoose=="Paper"){
        score=-1
    }else if(playerChoose=="Paper"&& computerChoose=="Scissors"){
        score=-1
    }else if(playerChoose=="Scissors"&& computerChoose=="Rock"){
        score=-1
    }
    return score
}
function onClick(playerChoose){
    console.log(playerChoose)
    const computerChoose=botChoose()
    console.log(computerChoose)
    const scores= Result(playerChoose, computerChoose)
    console.log(scores)
    totalScore['playerScore']+=scores
    console.log(totalScore)
    let showPoint=document.getElementById("point")
    showPoint.innerText=`Your Score: ${totalScore['playerScore']}`
    let showWin=document.getElementById("Result")
    showWin.innerText=showResult(scores)
    let showVs=document.getElementById("vs")
    showVs.innerText=`Player: ${playerChoose} vs Bot: ${computerChoose}`
    let btnExit=document.getElementById("exit")
    btnExit.onclick=()=>endGame(showPoint, showWin, showVs)
}
function showResult(score){
    let scores=score
    if (scores==0){
        return "Result: Tie!"
    }
    else if(scores==-1){
        return "Result: You Lost!"
    }
    else if (scores==1){
        return "Result: You Win!"
    }
    
}
function playGame(){
    let pChooses=document.querySelectorAll(".choose")
    pChooses.forEach(pChoose=>{
        pChoose.onclick=()=>onClick(pChoose.value)
    })
}
function endGame(showPoint, showWin, showVs){
    totalScore={playerScore: 0, computerScore: 0}
    showPoint.innerText=""
    showVs.innerText=""
    showWin.innerText=""
}
playGame()