function stringHandsOn() {
    console.log("Given String is:    Hey you are doing good,keep it up  ");
}
stringHandsOn();



console.log("/-------------------------------------------------------------------------------/");




var string ="    Hey you are doing good,keep it up  ";
var stringLength=string.length;
console.log("Total number of character:",stringLength);



console.log("/-------------------------------------------------------------------------------/");



var trimmedString = string.trim();
var lengthAfterTrim = trimmedString.length;
console.log("After removing leading and trailing extra spaces length is:",lengthAfterTrim);



console.log("/-------------------------------------------------------------------------------/");




console.log("Total number of extra spaces:", stringLength-lengthAfterTrim);

console.log("/-------------------------------------------------------------------------------/");

var charAtZeroIndex = trimmedString.charAt(0);
var charAtLastIndex = trimmedString.charAt(trimmedString.length-1);
console.log("First character of string:",charAtZeroIndex,"last character of string:",charAtLastIndex);


console.log("/-------------------------------------------------------------------------------/");


var trimmedString = string.split(" ");
console.log(trimmedString);
console.log("Total number of words:",trimmedString.length);



console.log("/-------------------------------------------------------------------------------/");

var searchResult = string.search("good");
console.log("Index of good in given string is: ", searchResult);



console.log("/-------------------------------------------------------------------------------/");



var subStringResult = string.substring(22);
console.log("Substring result is: ", subStringResult);


var sliceResult = string.slice(22);
console.log("Slice Result is: ", sliceResult);


console.log("/-------------------------------------------------------------------------------/");



var trimmedString="up";
var result = trimmedString.endsWith("up");
console.log(` Checked is string ${trimmedString} ends with character "up" : ${result}`);

console.log("/-------------------------------------------------------------------------------/");

var trimmedString="Hey";
var result = trimmedString.startsWith("Hey");
console.log(` Checked is string ${trimmedString} starts with character "Hey" : ${result}`);




