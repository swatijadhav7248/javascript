function countCharA() {


     console.log("-----------------------------------Count Characters in String---------------------------------");

     
    var string = "I Am Learning JavaScript,The Language of internet";
    var count=0;

for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index); // 
    if (char == 'a' || char == 'A' ) {
        count++;
    }
    
}
console.log("Given String: I Am Learning JavaScript,The Language of internet");
console.log(`Total character ['a' or 'A'] in string is: ${count}`);

console.log("---------------------------------------------------------------------------------------");

var string = "My favourite movie is LAggAn";
    var count=0;

for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index); // 
    if (char == 'a' || char == 'A' ) {
        count++;
    }
    
}
console.log("Given String: My favourite movie is LAggAn");
console.log(`Total character ['a' or 'A'] in string is: ${count}`);

}

countCharA();