function solve(number, op1, op2, op3, op4, op5, op6) {
  result = number;
  operations = [op1, op2, op3, op4, op5, op6] 
  for (i = 0; i <= 4; i ++) {
    if (operations[i] == 'chop') {
      result = result / 2;
    } else if (operations[i] == 'dice') {
      result = Math.sqrt(result);
    } else if (operations[i] == 'spice') {
      result = result + 1
    } else if (operations[i] == 'bake') {
      result = result * 3
    } else {
      result = result - (result * 0.2)
    }
    console.log(result);
  }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
