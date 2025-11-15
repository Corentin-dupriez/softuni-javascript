function manageEmployees(employeesList) {
  let employees = []
  class Employee {
    constructor(name) {
      this.name = name
      this.id = name.length
    }
  } 
  for (employee of employeesList) {
    newEmployee = new Employee(employee);
    employees.push(newEmployee)
  }

  for (employee of employees) {
    console.log(`Name: ${employee.name} -- Personal Number: ${employee.id}`)
  }
}

manageEmployees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
])
