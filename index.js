var randomNumber1=Math.random();
randomNumber1=(randomNumber1*6)+1;
randomNumber1=Math.floor(randomNumber1);
var image1="images/dice"+randomNumber1+".png";
var image_1=document.querySelectorAll("img")[0].setAttribute("src",image1);


var randomNumber2=Math.random();
randomNumber2=(randomNumber2*6)+1;
randomNumber2=Math.floor(randomNumber2);
var image2="images/dice"+randomNumber2+".png";
var image_2=document.querySelectorAll("img")[1].setAttribute("src",image2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins!!!!! &#x1F60D";
}else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 wins!!!!! &#x1F618";
}else{
    document.querySelector("h1").innerHTML="Draw!!! &#x1F635";
}
