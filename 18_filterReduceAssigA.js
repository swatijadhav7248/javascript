class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("========================Find all the employees from 'Wipro' Company=============================== ");
const arrayWiproEmployees = array_employees.filter( (employee) => {
    return employee.emp_company == "Wipro";
} );
const arrayWiproEmployeeNames = arrayWiproEmployees.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayWiproEmployeeNames);


console.log("=============================Find all the employees from 'IT' or 'HR' department=========================");

const arrayItOrHrEmployees = array_employees.filter((employee) => {
    return employee.emp_dept=="IT" || employee.emp_dept=="HR";
});
const arrayItOrHrEmployeeNames = arrayItOrHrEmployees.map((employee) => {
    return employee.emp_name;
});
console.log(arrayItOrHrEmployeeNames);


console.log("=============================find all the employees whose id's are greater than 50==========================");

const arrayid = array_employees.filter( (employee)=> {
    return employee.emp_id>50;
});
const arrayIds =arrayid.map( (employee)=> {
    return employee.emp_name;
});
console.log(arrayIds);



console.log("=======================Find all the employees whose names starts with letter 'A' or 'V' or 'M'===========================");

const empNames = array_employees.filter( (employee) => {
    if(employee.emp_name.startsWith("A")|| employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M"));
    return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M");
});
const arrayEmpNames = empNames.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayEmpNames);



console.log("========================Find the average salary of the employee for all the department========================");

let sumSalary = 0;
array_employees.filter( (employee) => {
    sumSalary = sumSalary + employee.emp_salary;
});
let averageSalary = sumSalary / array_employees.length;
console.log(`Average Salary is : ${averageSalary}`);




console.log("==========================Find the average salary of 'IT' department employees===================================");

//let sumOfItSalary = 0;
const  empItDept=array_employees.filter( (employee)  => {
   return employee.emp_dept=="IT";
});  

const arrayItEmployeeNames = empItDept.map( (employee) => {
    return employee.emp_salary;
});

const sulSalary =arrayItEmployeeNames.reduce( (runningTotal, value) => {
    return runningTotal+value;
});

const averagSalary = sulSalary / arrayItEmployeeNames.length;
console.log(`Average Salary is : ${averagSalary}`);



        

    


 

