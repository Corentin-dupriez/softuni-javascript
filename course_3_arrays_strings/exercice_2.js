function solve(num, numArray) {
  newArray = []
  for (i = num - 1; i >= 0; i--) {
    newArray.push(numArray[i]);
  }
  console.log(newArray.join(' '));
}

solve(3, [10, 20, 30, 40, 50])
