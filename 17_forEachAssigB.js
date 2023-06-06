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

const array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("-----------------------------1) TCS employee details-------------------------------------");
array_employees.forEach( (Employee)=> {
    if (Employee.emp_company=="TCS") {
        console.log(`Employee name: ${Employee.emp_name}  Employee Company: ${Employee.emp_company}` );
    }
});


console.log("-------------------------------2) Employee with salary >= 50000------------------------------------");

array_employees.forEach( (Employee)=> {
    if (Employee.emp_salary>="50000") {
        console.log(Employee);
    }
});



console.log("----------------------------------3) Sum of all employee salary------------------------------------");

let sumOfSalary = 0;
array_employees.forEach( (employee)=> {
    
        sumOfSalary = sumOfSalary + employee.emp_salary;
    }
);
console.log(`Sum of all employee salary: ${sumOfSalary}`);



console.log("---------------------------------4) Average Salary--------------------------------------------------");


let sumSalary = 0;
array_employees.forEach( (employee) => {
    sumSalary = sumSalary + employee.emp_salary;
});
let averageSalary = sumSalary / array_employees.length;
console.log(`Average Salary is : ${averageSalary}`);




console.log("---------------------------------------5) Find IT or HR department employees whose salary >= 75000--------------------------------------");

array_employees.forEach( (Employee) => {
    if(Employee.emp_dept=="IT" || Employee.emp_dept=="HR" , Employee.emp_salary>=75000) {
        console.log(Employee);
    }
});







