var professor={
    
    name: `Akash`,
    age: 28,
    height: `5feet`,
    city: `Pune`,
    state: `Maharashtra`,
    degrees:{
        engineering:'CSC',
        PHD:'Adv Computing',
    }
}
const professorName = professor.name;
const professorHeight =professor.height;
const professorAge = professor.age;
const professorCity = professor.city;
const professorState= professor.state;

console.log("============================Professor object properties==================================");


    console.log(`Profeesor object properties are: {Name: ${professorName} , Age:${professorAge}, height:${professorHeight} , City:${professorCity}, state:${professorState}}`);
    

    console.log("================================Professor degrees are=======================================");
    
    let professorEngineering = professor.degrees.engineering;
    let professorPhd = professor.degrees.PHD;
   console.log(`Professor degrees are: {engineering: ${professorEngineering}, PHD: ${professorPhd}}`);

professor.certificates = ['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming'];

console.log("=============================Certificate====================");


let professorCertificates = professor.certificates;
console.log(`Certificates are: [${professorCertificates}]`);

console.log("===========================Professor Total Experience=======================")

professor.totalExperience= "14 years";
professorTotalExperience = professor.totalExperience;
console.log(`Total Experience is : ${professorTotalExperience}`);



console.log("================================Modify Property===========================================")

professor.city="Mumbai";
console.log(`Modify city Pune to Mumbai : {Name: ${professorName} , Age:${professorAge}, height:${professorHeight} , City:${professor.city}, state:${professorState}}`);



console.log("================================Adding one new certificate=========================================")


 professor.certificates.push("Oracle Certified");
professorCertificates=professor.certificates;
console.log(`Adding one new certificate: [${professorCertificates}]`);


console.log("====================================Last element of array certificates=========================================")


let arrayLength = professorCertificates.length;
const lastElement = professorCertificates[arrayLength-1];
console.log(`Last element of array: ${lastElement}`);








    

