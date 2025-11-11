function addAndSubtract(num1, num2, num3) {
  let sum = (num1, num2) => num1 + num2; 
  let subtract = (num1, num2) => num1 - num2;
  console.log(subtract(sum(num1, num2), num3));
}

addAndSubtract(23, 6, 10);
