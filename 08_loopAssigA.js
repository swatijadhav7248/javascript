var string = "I am very good IT Developer";
// a e i o u == A E I O U
var count = 0;
for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index); // 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        count++;
    }
    
}
console.log("Given String: I am very good IT Developer");
console.log(`Count total number of vowels in the given string: ${count}`);


console.log("------------------------------------------------------------");
  

//1*1*1 + 2*2*2 + 3*3*3 + 4*4*4 +5*5*5

var sumOfCube = function() {
    var sum = 0;
    for (let index = 1; index<=5; index++) {
        cube= index*index*index;
        sum = sum + index*index*index;//3*3*3 = 27
    }
    console.log(`cube of 1: 1`);
    console.log(`Cube of 2: 8`);
    console.log(`Cube of 3: 27`);
    console.log(`Cube of 4: 64`);
    console.log(`Cube of 5: 125`);
    console.log(`Sum of Cube of numbers from 1 to 5 is :${sum}`);
}
sumOfCube(5);


console.log("--------------------------------------------------------------------------------------------");


function oddPositionedChars(givenString){
    var str ="";
    for (let index =0;index < givenString.length; index++) {
        var char = givenString.charAt(index);
        if (index%2!=0 && char!=" ") {
            str = str + char;
        }
    }
    console.log(`Odd Positioned characters: ${str}`);


}  
console.log("Given String : Hard work always pays back");
oddPositionedChars("Hard work always pays back");
console.log("Given String: Soon I will be Angular IT Champ");
oddPositionedChars("Soon I will be Angular IT Champ");



console.log("--------------------------------------------------------------------------------------------");
















