var greaterNumber = function (num1,num2) {
var result = num1>=num2 ?`${num1} is greater` : `${num2} is greater`
console.log("Greatest number is :",result);
}
console.log("Given numbers are 10,-10");
greaterNumber(10,-10);


console.log("--------------------------------------------------------------------------------");


console.log("Given numbers are 800,899");
greaterNumber(800,899);


console.log("--------------------------------------------------------------------------------");



var isEvenOrOddNum = function(num) { // Arguments true or false
     var result = num%2 == 0 ? true : false;
     return result;
}
var result = isEvenOrOddNum(29);
 var  res = (result == true)? "29 is even Number": "29 is odd Number";
console.log("The given number 29 is:",res);



console.log("--------------------------------------------------------------------------------");

var result = isEvenOrOddNum(44);
 var  res = (result == true)? "44 is even Number": "44 is odd Number";
console.log("The given number 44 is:",res);



console.log("--------------------------------------------------------------------------------");





var result = isEvenOrOddNum(0);
 var  res = (result == true)? "0 is even Number": "0 is odd Number";
console.log("The given number 0 is:",res);




console.log("--------------------------------------------------------------------------------");


var result = isEvenOrOddNum(101);
 var  res = (result == true)? "101 is even Number": "101 is odd Number";
console.log("The given number 101 is:",res);


console.log("--------------------------------------------------------------------------------");



var wordLength = function (word) {
   var len =word.length;
    var result= len %2 == 0 ?"Even" :"Odd";
    return result;
}
var returnValue = wordLength("JavaScript");
console.log(` Given Word JavaScript has  -> ${returnValue}`);


console.log("--------------------------------------------------------------------------------");




var returnValue = wordLength("Developer");
console.log(` Given Word Developer has  -> ${returnValue}`);


console.log("--------------------------------------------------------------------------------");


var returnValue = wordLength("Google");
console.log(` Given Word Google has  -> ${returnValue}`);






