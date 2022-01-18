let num1 = 0;
let num2 = 0;
let workNum = 1;
let magic = "+";

//get all the buttons and add the click event
var button1 = document.getElementById("Button1");
var button2 = document.getElementById("Button2");
var button3 = document.getElementById("Button3");
var button4 = document.getElementById("Button4");
var button5 = document.getElementById("Button5");
var button6 = document.getElementById("Button6");
var button7 = document.getElementById("Button7");
var button8 = document.getElementById("Button8");
var button9 = document.getElementById("Button9");
var button0 = document.getElementById("Button0");
var buttonDot = document.getElementById("ButtonDot");
var ButtonEqual = document.getElementById("ButtonEqual");
//make the buttons clickable

button1.addEventListener("click", function() {
    numberMagic(1);
});if(true){
    
    button2.addEventListener("click", function(){          
        numberMagic(2);
    });
    button3.addEventListener("click", function(){
        numberMagic(3);
    });
    button4.addEventListener("click", function(){
        numberMagic(4);
    });
    button5.addEventListener("click", function(){
        numberMagic(5);
    });
    button6.addEventListener("click", function(){
        numberMagic(6);
    });
    button7.addEventListener("click", function(){
        numberMagic(7);
    });
    button8.addEventListener("click", function(){
        numberMagic(8);
    });
    button9.addEventListener("click", function(){
        numberMagic(9);
    });
    button0.addEventListener("click", function(){
        numberMagic(0);
    });
    buttonDot.addEventListener("click", function(){
        
    });
}
function numberMagic(number){
    console.log(number);
    if(workNum == 1){
        if(num1 > 999999999999999){return;}
        num1 = num1*10 + number;
        document.getElementById("NumDisplay").innerHTML = num1;
    }
}