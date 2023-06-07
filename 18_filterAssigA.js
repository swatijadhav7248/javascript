const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];


console.log("===============================1) Find the numbers greater than 50=============================");
const arrayGreaterThan50 = arrayNumbers.filter( (element)=> {
    return element>50;
} );
console.log(arrayGreaterThan50);


console.log("===============================1) Find the even numbers=============================");

const arrayEvenNums = arrayNumbers.filter((element) => {
    return element%2==0;
});
console.log(arrayEvenNums);

console.log("===============================1) Find the odd numbers=============================");

const arrayOddNums = arrayNumbers.filter((element) => {
    return element%2==1;
});
console.log(arrayOddNums);

console.log("===============================1) Find the numbers which are multiple of 5=============================");

const arrayMultipleNums =arrayNumbers.filter( (element) => {
    return element%5==0;
});
console.log(arrayMultipleNums);

console.log("===============================1) Find the numbers which are in between 20 and 50=============================");



const arrayGreaterNums = arrayNumbers.filter( (element) => {
    return element>20 && element<50;
});
console.log(arrayGreaterNums);
