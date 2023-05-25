

var arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`Given array is: ["Banana","Orange","Apple","Mango","Water Melon"]`);
const zerothIndexValue = arrayFruits[0];
console.log(`First Element: ${zerothIndexValue}`);


let arrayLength = arrayFruits.length;
const lastElement = arrayFruits[arrayLength-1];
console.log(`Last element: ${lastElement}`);


console.log("--------------------------------------------------------------------------------");


// Adding element in the first position
arrayFruits.unshift("Papaya");
console.log(`Add "Papaya" element  the array is: ${arrayFruits}`);



console.log("--------------------------------------------------------------------------------");

let arrSpliced = arrayFruits.splice(4,1);
console.log( `Remove Mango from the array: ${arrayFruits}`);






console.log("--------------------------------------------------------------------------------");

arrayFruits.push("Pineapple");
console.log(`Add element or insert an element Pineapple at the last position: ${arrayFruits}`);




console.log("--------------------------------------------------------------------------------");


arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`Insert an element -Dragon Fruit before "Water Melon": ${arrayFruits}`);



console.log("--------------------------------------------------------------------------------");


arrayFruits.splice(2,1,"Kiwi");
console.log(`Replace an element orange with Kiwi: ${arrayFruits}`);


console.log("--------------------------------------------------------------------------------");


const sliceArr = arrayFruits.slice(1, 5);
console.log( `Elements at index 1 to 4: ${sliceArr}`);




console.log("--------------------------------------------------------------------------------");


 const spliceArr=arrayFruits.splice(4,6);
console.log(`Only select last 3 elements: ${spliceArr}`);






