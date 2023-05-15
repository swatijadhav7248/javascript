
console.log(`No 1`);

var square = function (num) {
    var result = num*num;
    console.log(`square of given number is: ${result} `);
 }
 square(5);
 square(6);
 square(25);
 square(100);

 console.log("--------------------------------------------------------------------------------------------");

console.log(`No 2`);

console.log("Type of function--> square:", typeof square);

console.log("--------------------------------------------------------------------------------------------");

console.log(`No 3`);

var areaOfRectangle = function(num1,num2) {
var result=num1*num2;
console.log(`Area of Rectangle:${result}`);
}
areaOfRectangle(499,917);


console.log("--------------------------------------------------------------------------------------------");



console.log(`No 4`);


var valueOne="Virat";
var valueTwo="Anushka";


var swapValues = function (valueOne,valueTwo){  //Arguments: valueOne=Virat valueTwo=Anushka var valueThree;
   
    console.log("Before Swap:",valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo; 
    valueTwo = temp;
    console.log ("After Swap:",valueOne, valueTwo);
}
swapValues(valueOne,valueTwo);



console.log("---------------------------------------------------------------------------------------------------");







var valueOne=1000;
var valueTwo=2000;

 var swapValues=function (valueOne,valueTwo) {//Arguments: valueOne=1000 valueTwo=2000 var valueThree;
    console.log("Before Swap:",valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo; 
    valueTwo = temp;
    console.log ("After Swap:",valueOne, valueTwo);
}
swapValues(valueOne,valueTwo);



console.log("---------------------------------------------------------------------------");


console.log(`No 5`);


var string ="JS the most popular language of internet";
var stringLength=string.length;
console.log("Total number of character:",stringLength);


console.log("--------------------------------------------------------------------------");




var trimmedString = string.trim();
var lengthAfterTrim = trimmedString.length;
console.log("After removing leading and trailing extra spaces length is:",lengthAfterTrim);


console.log("--------------------------------------------------------------------------");



var charAtIndex = trimmedString.charAt(6);
console.log("Character at index 6:", charAtIndex);


console.log("--------------------------------------------------------------------------");


var charAtIndex = trimmedString.charAt(11);
console.log("Character at index 11:", charAtIndex);


console.log("--------------------------------------------------------------------------");



var charAtLastIndex = string.charAt(string.length-1);
console.log("Last character of string:",charAtLastIndex);

console.log("------------------------------------------------------------------------");


var charAtZeroIndex = string.charAt(0);
console.log("First character of string:",charAtZeroIndex);



console.log("------------------------------------------------------------------------");


var resultSplit = trimmedString.split("");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);




var square =  function (num) {
    var result = num*num;
    console.log(`square of given number is: ${result} `);
 }
 square(40);















 
