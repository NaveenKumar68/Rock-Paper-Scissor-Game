let score=JSON.parse(localStorage.getItem('score')) ||{win:0,loss:0,tie:0};

updateScore();

function playGame(PlayerMove){
    const ComputerMove=computermove();
    let result='';
    if(PlayerMove==='Rock'){
        if(ComputerMove==='Scissor'){
            result='You Win';
        }
        else if(ComputerMove==='Paper'){
            result='You Loss';
        }
        else{
            result='Score Tie';
        }
    }
    else if(PlayerMove==='Paper'){
        if(ComputerMove==='Rock'){
            result='You Win';
        }
        else if(ComputerMove==='Scissor'){
            result='You Loss';
        }
        else{
            result='Score Tie';
        }
    }
    else{
        if(ComputerMove==='Paper'){
            result='You Win';
        }
        else if(ComputerMove==='Rock'){
            result='You Loss';
        }
        else{
            result='Score Tie';
        }
    }

    if(result==='You Win'){
        score.win+=1;
    }
    else if(result==='You Loss'){
        score.loss+=1;
    }
    else{
        score.tie+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScore();
    document.getElementById("move").innerHTML=`You <img src="images/${PlayerMove}-emoji.png">  <img src="images/${ComputerMove}-emoji.png">Computer`;

    document.getElementById("result").innerHTML=result;
    
}
function updateScore(){
    document.getElementById("score").innerHTML=`Win:${score.win} Loss:${score.loss} Tie:${score.tie}`;

}
function computermove(){
    let move=Math.random();
    let ComputerMove='';
    if(move>=0&&move<1/3){
        ComputerMove='Rock';
    }
    else if(move>=1/3&&move<2/3){
        ComputerMove='Paper';
    }
    else{
        ComputerMove='Scissor';
    }
    return ComputerMove;
}
