const img = document.getElementById('fire');
const timer = document.querySelector('#time');
let chack = false // this variable was criated so afeter event is executed do not execut it again;

img.addEventListener('click', () =>{
    if(chack == false){
         let count = 10;

         let timer1 = setInterval(() =>{
        saundBeep()
        timer.innerHTML = count;
        if(count == 0){
            clearInterval(timer1);
            timer.innerHTML = "Game Over";
            saundThunder();
            img.src = '../imagens/explosion.gif';
        }
        count --;
       },1000) 

       let timer2 = setTimeout(function(){end()},13200) // 13200ms equals 13s that is value of the timer plus the gif
       
        chack = true;
    }
    
});

function saundThunder(){
    let beep = new Audio()
    beep.src = '../audio/Thunder_Crack.mp3';
    beep.play();
}
function saundBeep(){
    let beep = new Audio()
    beep.src = '../audio/Beep_Short.mp3';
    beep.play();
}
function end(){
    img.src = '../imagens/clean.png'; 
}

