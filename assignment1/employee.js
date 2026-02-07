const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

 //filter() employees from IT department
const itEmployees = employees.filter(employee => employee.department === "IT");
console.log("IT Employees:", itEmployees);      
// map() to add:
const updatedSalaries = employees.map(employee => {
  let netSalary;        
  if (employee.salary > 50000) {
    netSalary = employee.salary * 0.9; // 10% tax
  } else {  
    netSalary = employee.salary * 0.95; // 5% tax
    }   
    return { ...employee, netSalary: netSalary };   
});
console.log("Employees with Updated Salaries:", updatedSalaries); 
// reduce() to calculate total salary payout
const totalPayout = employees.reduce((acc, employee) => acc + employee.salary, 0);  
console.log("Total Salary Payout:", totalPayout);
// find() employee with salary 30000
const employeeWith30k = employees.find(employee => employee.salary === 30000);           
console.log("Employee with 30000 Salary:", employeeWith30k);       
// findIndex() of employee "Neha"
const nehaIndex = employees.findIndex(employee => employee.name === "Neha");    
console.log("Index of Neha:", nehaIndex);


