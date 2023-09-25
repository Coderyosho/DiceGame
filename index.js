var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png" ;
var randomDiceImage2 = "dice" + randomNumber2 + ".png" ;

var randomImageSoource = "images/" + randomDiceImage ;
var randomImageSoource2 = "images/" + randomDiceImage2 ;

var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src",randomImageSoource);

var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src",randomImageSoource2);



if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="Player 1 won";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML  = "Playe 2 won";
}
else{
    document.querySelector("h1").innerHTML  = "Draw";
}