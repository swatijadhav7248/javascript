function maleMarriageEligibility() { //Arguments gender age and boyName
    var boyName = "Billgates";
    var age = 21
    var gender = "male";
    
var result = (gender=="male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : `Hey ${boyName} you are not eligible for marriage`;
console.log(`${result}`);
}



console.log("----------------------------------Male Marriage Eligibility-------------------------------------------------");


var boyName = "Stew Jobs";
var age = 17
var gender = "male";
var result = (gender=="male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : `Hey ${boyName} you are not eligible for marriage`;
console.log(`${result}`);
 
    

console.log("-----------------------------------------------------------------------------------");



maleMarriageEligibility("Male",17,"Stew Jobs");


console.log("----------------------------------Female Marriage Eligibility-------------------------------------------------");




function femaleMarriageEligibility() { //gender age and girlName
    var girlName = "Jenifier";
    var age = 16
    var gender = "Female";
    var result = (gender=="Female" && age>=18) ? `Hey ${girlName} you are eligible for marriage` : `Hey ${girlName} you are not eligible for marriage`;
    console.log(`${result}`);

}
femaleMarriageEligibility("Female",16,"Jenifier");




console.log("-----------------------------------------------------------------------------------");

var girlName = "Malinda Gates";
    var age = 27
    var gender = "Female";
    var result = (gender=="Female" && age>=18) ? `Hey ${girlName} you are eligible for marriage` : `Hey ${girlName} you are not eligible for marriage`;
    console.log(`${result}`);




