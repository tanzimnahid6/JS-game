const player1Score=document.getElementById('player1')
const player2Score=document.getElementById('player2')
const winingScoreDisplay=document.querySelector('.win')
const inputScore=document.getElementById('inputScroe')
const player1=document.getElementById('p1btn')
const player2=document.getElementById('p2btn')
const reset=document.getElementById('rstbtn')

//functionality for wining score
function getValue(){
    let txt=document.getElementById('inputScroe');
    let textValue=txt.value;
    winingScoreDisplay.innerHTML=textValue;
}

//functionality for player 1
let num1=0
player1.addEventListener('click',()=>{
   if(num1<winingScoreDisplay.innerHTML){
    num1=num1+1;
    player1Score.innerHTML=num1 
   }
     
})

//functionality for player 2
let num2=0;
player2.addEventListener('click',()=>{
    if(num2<winingScoreDisplay.innerHTML){
        num2=num2+1;
        player2Score.innerHTML=num2;
    }
});

//functionality for reset button
reset.addEventListener('click',()=>{ 
   window.location.reload()
})





