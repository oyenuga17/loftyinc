const prompt = require( "prompt-sync")({sigint:true})
//Types of data types
/*let x =3;
console.log (x);
let myNumb=8;
let myNumb2= 4;
let newResult= myNumb + myNumb / myNumb2
console.log (newResult);
let kelvin = 45;
let  fahrenheit = 59
let celsius = (32*fahrenheit-32)*(5/9);
console.log (celsius);
let  name1= "SEUN";
let name2= "seun";
if (name1 == name2){
    console.log("same");
}
else { console.log ("not same")};*/
// test for room temperature
let temp1=  12

if ( temp1 <= 38){
    console.log ( "good to go");
}
else if(temp1 >= 38) {
    console.log ("too hot");
}
else if ( temp1 > 38)
{console.log ("extremely hot");}
/*
 let names =  [ "seun", "tosin", "tope"];
 let games =  {name1 :"candycrush", name2 :"psa" };
  for (name in names) {
      console.log (name);
  }
  */
 /*
 let  r = false
 let  i = 1
 while(i< 10) {
     if ( i===5){
     console.log ("thankyou");
     break;
 }
}
*/
/*

let name =prompt ( "what is your name:");
*/
/*
let input1 = prompt("num1") ;
let input2 = prompt( "num2");
let input = input1 + input2
let x= parseInt(input1);
let y= parseInt(input2);
console.log (input)
*/


let guessNumber = 4;
let userGuessNumber = parseInt (prompt ("what is the number ?"));
if ( guessNumber === userGuessNumber){
    console.log ( "you are right!");
    
}
else {console.log("you are wrong!")}







