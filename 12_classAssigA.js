
console.log("--------------------------------------Q.1---------------------------------");
class Vehicle {

    constructor(name,color,price,number,FuelType){
        this.name = name;
        this.color = color;
        this.price = price;
        this.number = number;
        this.FuelType= FuelType;
    }


    showDetails(){
        console.log(` Details of vehicle is-> Name: ${this.name}, Color: ${this.color}, Price: ${this.price}, Number: ${this.number}, FuelType: ${this.FuelType}`);

    }
}
const BMW =      new Vehicle("BMW",    "Black","1.5crore","1912","Petrol");
const Mercedes = new Vehicle("Mercedes","White","1crore","3140","Petrol");
const Jupiter =  new Vehicle("Jupiter", "Grey","50lakh","5670" ,"Petrol");
const TataSafari=new Vehicle("Tata Safari","Red","60lakh","1155","Diesel");
const Bajaj =    new Vehicle("Bajaj",      "Black","90lakh","8035","CNG");

BMW.showDetails(); 
Mercedes.showDetails();
Jupiter.showDetails();
TataSafari.showDetails();
Bajaj.showDetails();



const array = [BMW, Mercedes, Jupiter, TataSafari,Bajaj];



console.log("-----------------------------------Q.2----------------------------");



class College {
    constructor(name, department,city,PhoneNo){
        this.name = name;
        this.department = department;
        this.city = city;
        this.PhoneNo = PhoneNo;
    }
    showDetails(){
        console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.department}`);
        console.log(`City: ${this.city}`);
        console.log(`PhoneNo: ${this.PhoneNo}`);
   }
}

const ModernCollege =         new College("Modern College", "Arts Commerce & Sciene","Pune","0225439815");
const PolytechnicCollege =    new College("Polytechnic College","Diploma","Pune","9525432870");
const MITCollege =            new College("MIT College", "Engineering", "Pune","0225497890");
const SaintMiraCollege=       new College("SaintMira College","Arts Commerce & Sciene","Pune","8535478995");

ModernCollege.showDetails();

console.log("--------------------------------------------------------------------");


PolytechnicCollege.showDetails();


console.log("--------------------------------------------------------------------");



MITCollege.showDetails();


console.log("--------------------------------------------------------------------");



SaintMiraCollege.showDetails();


function traverseObject(College){
    for (const key in College) { 
        if (Object.hasOwnProperty.call(College, key)) {
            const value = College[key];
            console.log(`${key}: ${element}`);
        }
    }
    
}
traverseObject(College);


