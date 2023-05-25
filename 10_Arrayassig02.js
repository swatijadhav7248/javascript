
var  arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given Array:[20,31,40,25,23,11,29,9,60,2,11]`);

console.log("---------------------------------------------------------------------------");


let lengthOfArray = arrayNumbers.length;
console.log(`Total number of elements in given array : ${lengthOfArray}`);


console.log("---------------------------------------------------------------------------");


const zerothIndexValue = arrayNumbers[0];
console.log(`First element: ${zerothIndexValue}`);   

let arrayLength = arrayNumbers.length;
const lastElement = arrayNumbers[arrayLength-1];
console.log(`Last element: ${lastElement}`);



console.log("---------------------------------------------------------------------------");



const thirdLastElement = arrayNumbers[arrayLength-3];
console.log(`Third Last element in array: ${thirdLastElement}`);



console.log("---------------------------------------------------------------------------");


var  arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
for (const element  of arrayNumbers) {
    if(element %2 ==0) {
     console.log(`EVEN numbers: ${element}`);
    }
 }
 


 console.log("---------------------------------------------------------------------------");





for (const element  of arrayNumbers) {
    if (element %2==1) {
     console.log(`Odd numbers: ${element}`);
    }
 }



 console.log("---------------------------------------------------------------------------");





 var sum=0;
    for (const index in arrayNumbers) {
       if (index%2==0) {
        var sum = 20+40+23+29+60+11;
        console.log(` Even Positioned numbers addition is: ${sum}`);
       }
    }


    console.log("---------------------------------------------------------------------------");






var sum=0;
 for (const index in arrayNumbers) {
    if (index%2==1) {
     var sum = 31+25+11+9+2;
     console.log(` Odd Positioned numbers addition is: ${sum}`);
    }
 }



console.log("---------------------------------------------------------------------------");

 var sum=0
for (const element of arrayNumbers) {
  sum = 20+31+40+25+23+11+29+9+60+2+11;
 console.log(` Sum of all elements from arrayNumbers: ${sum}`);
    
}


console.log("---------------------------------------------------------------------------");




for (const numbers of arrayNumbers) {
if(numbers%5==0) {
    console.log(`${numbers} is multiple of 5`);
}
}


 console.log("---------------------------------------------------------------------------");




 var element= arrayNumbers.includes(115);//output:false
 console.log(`115 is present in array: ${element}`);


 console.log("---------------------------------------------------------------------------");

 var element= arrayNumbers.includes(23);//output:true
 console.log(`23 is present in array: ${element}`);




 
console.log("---------------------------------------------------------------------------");


arrayNumbers.splice(3, 0, 55, 66)
console.log( `Insert 55 and 66 before index 3: ${arrayNumbers}`);





console.log("---------------------------------------------------------------------------");









const sliceArr = arrayNumbers.slice(3,6);
var arrayNumbers = sliceArr;
console.log(`Delete 3 elements from index 4: ${arrayNumbers}`);





