let bankSbi= {
bankName : 'SBI Bank',
accountNo: 41022454023,
ifsc: 'SBIN0000454',
interestRate: 8.5 ,
}


console.log("==================================Creating an object bankSbi=====================================");
console.table(bankSbi);


let bankLocation={
  street: 'Hinjewadi',
  city: 'Pune',
  pin: 411061,
}


console.log("====================================creating an object bankLocation=============================");
console.table(bankLocation);



Object.assign(bankSbi,bankLocation);


console.log("================================clone object bankSbi and bankLocation=============================");
console.table(bankSbi);



rateOfInterest={
    homeLoanInterest:14.5,
    personalLoanInterest:8.5,
    dueInterest:7.5,
}


console.log("===================================Creating an object rateOfInterest==================================");
console.table(rateOfInterest);




Object.assign(bankSbi,bankLocation); // Copy object - address into the person object

const sbiDetails = Object.assign(bankSbi, bankLocation,rateOfInterest); // Copy address and marks into the new object - mergedObject

  


console.log("===================================Merge step1,step2,& step4 in sbiDetails==============================");
console.table(sbiDetails);





console.log("===================================Traversing Merge(SBI Details)object===================================");

for (const key in sbiDetails) { 
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}: ${value}`);
    }
}


