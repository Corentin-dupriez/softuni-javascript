function calculate(num1, num2, operator) {
  let add = (a, b) => a + b;
  let subtract = (num1, num2) => num1 - num2;
  let multiply = (num1, num2) => num1 * num2;
  let divide = (num1, num2) => num1 / num2;

  operations = {
    'add': add,
    'subtract': subtract,
    'multiply': multiply,
    'divide': divide
  }

  console.log(operations[operator](num1, num2))

}

calculate(5, 5, 'multiply')
calculate(5,2, 'add')
