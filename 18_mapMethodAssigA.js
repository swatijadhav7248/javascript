const arrayNumbers =[20,11,40,25,23,11,9,31,60,2,19];


console.log(`Given array is: ${arrayNumbers}`);

let array =[];
console.log("=======================1) Add 10 into each array element==================");
 array = arrayNumbers.map( (element) => {
    
    return element+10;
} );
console.log(array);



console.log("=======================2) Square of each array element======================");

const arrayTrans = arrayNumbers.map( (element) => {
    return element*element;
} );
console.log(arrayTrans);



console.log("=======================3)Add index value into its corresponding each array element======================");


arr = arrayNumbers.map( (element,index) => {
    
    return element+index;
} );
console.log(arr);





