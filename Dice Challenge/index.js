//Selecting random number for dice image1
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

//Selecting dice image1 and changing its number
var diceImage1 = "dice" + randomNumber1  + ".png";
var diceImageSource1 = "images/" + diceImage1;
document.querySelector(".img1").setAttribute("src", diceImageSource1);


//Selecting random number for dice image2
var randomNumber2 = Math.floor((Math.random()*6) + 1);

//Selecting dice image2 and changing its number
var diceImage2 = "dice" + randomNumber2 + ".png";
var diceImageSource2 = "images/" + diceImage2;
document.querySelector(".img2").setAttribute("src", diceImageSource2);


//Display Winner
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else{
  document.querySelector("h1").innerHTML = "Draw!";
}
