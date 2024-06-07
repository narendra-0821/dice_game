var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomdice = "dice"+randomNumber1+".png";

var diceselector = "images/"+randomdice;



var image1 = document.querySelectorAll("img")[0].setAttribute("src" , diceselector);



var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomdice2 = "dice"+randomNumber2+".png";

var diceselector2 = "images/"+randomdice2;



var image1 = document.querySelectorAll("img")[1].setAttribute("src" , diceselector2);
 
if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins";
} 
else if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins"
} 
else{
    document.querySelector("h1").innerHTML = "Draw";
}