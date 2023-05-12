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



