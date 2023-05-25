console.log(`${ '3' + 2 }`);
console.log(`${ '3' + undefined }`);

console.log(`${ '6' - true}`);

console.log(`${ 7 - false}`);

console.log(`${ false - undefined}`);

console.log("======== explicit conversion ===========");


console.log(`===== Boolean to Number Explicit conversion========`);
var num1 = true; // boolean to number ==> Number
var result = Number(num1);
console.log(`Boolean to number ${result} and it's type ${typeof result}`);

console.log(`===== String to Number Explicit conversion========`);
var num2 = "30"; // string to number ==> Number
var result = Number(num2);
console.log(`String to number ${result} and it's type ${typeof result}`);

console.log(`===== Any type to Boolean Explicit conversion========`);
var num3 = 1; // conversion number to boolean
var result =  Boolean(num3);
console.log(`number to boolean ${result} and it's type ${typeof result}`);

var num3 = 0; // conversion number to boolean
var result =  Boolean(num3);
console.log(`number to boolean ${result} and it's type ${typeof result}`);

var num4 = "Bill gates"; // conversion String to boolean
var result =  Boolean(num4);
console.log(`string to boolean ${result} and it's type ${typeof result}`);


console.log(`===== Any type to String Explicit conversion========`);
var num5 = 100; 
var result =  String(num5);
console.log(`number to string ${result} and it's type ${typeof result}`);

var num6 = true; 
var result =  String(num6);
console.log(`number to string ${result} and it's type ${typeof result}`);



var result = `3` + 2;
console.log(result); //"32"

var result = `3` + true;
console.log(result); //"3true"

var reult = `3` + undefined;
console.log(result); //"3undefined"

var reult = `3` + null;
console.log(result); //"3null"


 
 var result = `4` - true;
console.log(result); //3

var result = `4` + true;
console.log(result); //5

var result = `4` + false;
console.log(result); //4


 var result = `4` - `2`;
 console.log(result); //2


 var result = `4` - 2;
 console.log(result); //2

 var result = `4`  * `2`;
 console.log(result); //8

 var result = `4`  /  `2`;
 console.log(result); //8


 var result = 4 + undefined;
 console.log(result); //NaN

 var result = 4 - undefined;
 console.log(result); //NaN

 var result = true + undefined;
 console.log(result); //NaN


 var result = null + undefined;
 console.log(result); //NaN


 var result = Number(`324`);
 console.log(result); //324

 var result = Number(`324e-1`);
 console.log(result); //32.4


 //boolean to number

 var result = Number(true);
 console.log(result); //1


 var result = Number(false);
 console.log(result); //0

 var result = Number(`hello`);
 console.log(result); //NaN


 var numberInString = "100";
 console.log(typeof numberInString)

 var myNumber = +numberInString;
 console.log(typeof myNumber)

 var myNumber = 100;
 console.log(typeof myNumber); //number
 var afterConversion = myNumber.toString();
 console.log(typeof afterConversion); //string













