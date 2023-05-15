function squareOfWordLength (word) { //Hello
   
   var len=word.length;
   
   console.log("length of word:",len );
   
}
var square = function(num){
   var result=num*num;
   console.log(`square of given number is: ${result} `);
}
console.log("Given Word:Javascript");
squareOfWordLength("Javascript"); square(10);

console.log("-------------------------------------------------------------------------------------");


console.log("Given Word:Google chrome");
squareOfWordLength("Google chrome");square(13);

console.log("-------------------------------------------------------------------------------------");


console.log("Given Word: Developer Smart");
squareOfWordLength("Developer Smart");square(15);

console.log("-------------------------------------------------------------------------------------");

function arithmeticOperation() {

    console.log("Given a string: I am Angular Developer");
    var str= "I am Angular Developer";
    var lengthstr=str.length;
   console.log("Length of string:",lengthstr);

   var wordsCount = str.split(" ");
console.log("No of words: ",wordsCount.length);

var num1 = 22;
var num2 = 4;
var result = num1 / num2;
console.log(`Division of  length of string to the count of string words is: ${result}`);


var num1 = 22;
var num2 = 4;
var result = num1 * num2;
console.log(`Multiplication of length of string with the count of string words is: ${result}`);

} 
   
arithmeticOperation() 

