 function show(){
    console.log("/**********************************1******************************/");
    console.log("First function with no argument and no return type");
    console.log("Second function with no argument and no return type");
 }
 show();


 function personalDetails(){ //Arguments: firstName,lastName,collegeName;
    console.log("/*****************************************2*************************************/");
    console.log("First Name: Swati");
    console.log("Last Name:Jadhav");
    console.log("College Name: Baburaoji gholap college");
}
personalDetails();



console.log("/******************************************3********************************/");

var valueOne="Virat";
var valueTwo="Anushka";

function swapValuesDude(valueOne,valueTwo) { //Arguments: valueOne=Virat valueTwo=Anushka var valueThree;
   
    console.log("Before Swap:",valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo; 
    valueTwo = temp;
    console.log ("After Swap:",valueOne, valueTwo);
}
swapValuesDude(valueOne,valueTwo);


console.log("/------------------------------------------------------------------------------------------------------/");

var valueOne=1000;
var valueTwo=2000;

function swapValuesDude(valueOne,valueTwo) {//Arguments: valueOne=1000 valueTwo=2000 var valueThree;
    console.log("Before Swap:",valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo; 
    valueTwo = temp;
    console.log ("After Swap:",valueOne, valueTwo);
}
swapValuesDude(valueOne,valueTwo);
    
 


console.log("/*************************************************4**************************************************/");


var valueOne=10.23;
var valueTwo=600;
var valueThree=40;

function addThreeNumbers(valueOne,valueTwo,valueThree) {//Arguments: valueOne=10.23 valueTwo=600 valueThree=40;
    var result = valueOne+valueTwo+valueThree;
    console.log("Addition of three numbers:");
    console.log("valueOne=10.23,valueTwo=600,valueThree=40");
    console.log(`Result is: ${result}`);
}
addThreeNumbers(valueOne,valueTwo,valueThree);



console.log("/----------------------------------------------------------------------------------------------------/");


var valueOne="Hello";
var valueTwo="Good";
var valueThree="Morning";


function addThreeValues(valueOne,valueTwo,valueThree) { //Arguments: valueOne=Hello valueTwo=Good valueThree=Morning;
    var result=valueOne+valueTwo+valueThree;
    console.log("Addition of three values:");
    console.log("valueOne=Hello valueTwo=Good valueThree=Morning");
    console.log(`Result is= ${result}`);
}

addThreeValues(valueOne,valueTwo,valueThree);

