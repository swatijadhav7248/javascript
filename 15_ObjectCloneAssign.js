const arrayNums = [20,3,4,56,90,400,49];


console.log("1) Performing Shallow Clone =>");

 const clonedArray = arrayNums; // Shallow clone
 console.log( `Original Array => [${arrayNums}]`);
 console.log(`Cloned Array => [${clonedArray}]`);
 clonedArray.push(55,66);
console.log(`Cloned array with update value 55 and 66 is: [${clonedArray}]`);

console.log("----------------------------------------------------------------------------------");

console.log("2)Perform Deep Clone Using Spread Operator=>");

 const clonnedobject = {...clonedArray};
console.log(`Original array => [${clonedArray}]`);
 clonedArray.push(10,25);
 console.log(`Cloned array with Update Value 10 and 25 is: [${clonedArray}]`);


console.log("----------------------------------------------------------------------------------");


console.log("3) Merge or Concat array=>");


const arrayEven = [2,30,14,8];
const array2 = {...clonedArray};

const concatArray = arrayEven.concat(arrayNums);
console.log( `Merge array is => [${concatArray}]`);



console.log("----------------------------------------------------------------------------------");



console.log("4) create employee details=> ");
 

const employee_info = {
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony: "OM Vrindavan Society",
            street:"Kanch Pokli,431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800-4567 32","+91- 9096 5678 77"]
}

console.log("5) Log the employee details => ");

 console.log(employee_info.address.locality);
console.log(` City: ${employee_info.address.city}, State: ${employee_info.address.state}, Country: ${employee_info.address.country}`);

console.log("---------------------------------------------------------------------");


console.log(`Mobile Numbers: ${employee_info.mobiles}`);



console.log("---------------------------------------------------------------------");



console.log("6) Perform Deep Copy using JSON.stringfy()=>");


const deepClonedemployee = JSON.parse(JSON.stringify(employee_info));



console.log(`Original Salary is: ${employee_info.salary.july_month}`);
employee_info.salary.july_month="80,0000INR";



console.log(`a) Update Salary is: ${employee_info.salary.july_month}`);




console.log("---------------------------------------------------------------------");




console.log(`Original Country is: ${employee_info.address.country}`);

employee_info.address.country="United Kingdom";

console.log(`b) Update Country is: ${employee_info.address.country}`);




console.log("---------------------------------------------------------------------");




console.log(`c) Clone object & update value of country is  => ${employee_info.address.country} `);
console.log(` Clone object & update value of salary is  => ${employee_info.salary.july_month} `);
