
var number1 = Math.floor(Math.random()*6)+1;

var img1 = "images/dice" + number1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",img1);

var number2 = Math.floor(Math.random()*6)+1;

var img2 = "images/dice" + number2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",img2);

if(number1>number2)
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 wins";
else if(number1<number2)
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 wins";
else
    document.querySelectorAll("h1")[0].innerHTML = "Draw";