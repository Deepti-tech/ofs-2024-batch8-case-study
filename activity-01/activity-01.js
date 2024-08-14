import readline from "readline-sync";
import { Employee } from "./employee.js";
import fs from "fs";

let number = readline.questionInt("Enter id: ");
let name = readline.question("Enter name: ");
let salary = readline.questionInt("Enter salary: ");

let employee1 = new Employee(number, name, salary);

function appendEmployeeToFile(employee) {
  let employees = [];

  if (fs.existsSync("employee.json")) {
    let fileData = fs.readFileSync("employee.json", "utf8");
    if (fileData) {
      employees = JSON.parse(fileData);
    }
  }

  employees.push(employee);

  fs.writeFileSync("employee.json", JSON.stringify(employees, null, 2));
}

appendEmployeeToFile(employee1);

console.log("JSON file appended");

let fileData = fs.readFileSync("employee.json");

console.log(JSON.parse(fileData));

