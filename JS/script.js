alert("Olá Mundo");
let btn1=0;
let btn2=0;
let btn3=0;
let btn4=0;
let btn5=0;
let btn6=0;
let btn7=0;
let btn8=0;
let btn9=0;
let controle=0;
let jogadas=0;
let finaljogo=false;

// Click botão 1 
function clickBnt1(){
    let btn = document.getElementById('btn1')

    if (btn.value == " " && !finalJogo){
        if (controle == 0){
            controle == 1;
            btn.value = "X";
            bnt1 = "X"
        } 
        else {
            controle = 0;
            btn.value = "0";
            btn1 = "O";
        }        
    }
}
