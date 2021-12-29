Start();

var buttons = document.getElementsByClassName("Answers");
var buttonA = document.getElementById("A");
var buttonB = document.getElementById("B");
var buttonC = document.getElementById("C");
var buttonD = document.getElementById("D");
var answer = getRandomQuestion();
//add onclick event for every button
buttonA.onclick = function () {
    checkCorrectAnswer(0);
}
buttonB.onclick = function () {
    checkCorrectAnswer(1);
}
buttonC.onclick = function () {
    checkCorrectAnswer(2);
}
buttonD.onclick = function () {
    checkCorrectAnswer(3);
}

function getRandomQuestion() {
    var randomQuestion = Math.floor(Math.random() * 4);
    return randomQuestion;
}

function checkCorrectAnswer(guess) {
    if(guess == answer) {
        if(guess == 0) {buttonA.style.backgroundColor = "green";}
        else if(guess == 1) {buttonB.style.backgroundColor = "green";}
        else if(guess == 2) {buttonC.style.backgroundColor = "green";}
        else if(guess == 3) {buttonD.style.backgroundColor = "green";}
        setTimeout(() => {
            for(let button of buttons) {button.style.backgroundColor = "white";}
            answer = getRandomQuestion();}, 1000);
        
    }else {
        if(guess == 0) {buttonA.style.backgroundColor = "red";}
        else if(guess == 1) {buttonB.style.backgroundColor = "red";}
        else if(guess == 2) {buttonC.style.backgroundColor = "red";}
        else if(guess == 3) {buttonD.style.backgroundColor = "red";}
        
    }
}

function Start() {
    document.getElementById("demo").innerHTML = "Work In Progress";
}


