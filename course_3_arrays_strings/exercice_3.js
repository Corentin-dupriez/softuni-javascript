function solve(numArray) {
  evenSum = 0;
  oddSum = 0;
  for (i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
      evenSum = evenSum + numArray[i];
    } else {
      oddSum = oddSum + numArray[i];
    }
  }
  console.log(evenSum - oddSum);
}

solve([1, 2, 3, 4, 5, 6]);
