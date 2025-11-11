function printSmallestNumber(num1, num2, num3) {
  let smallest = num1;
  for (num of [num1, num2, num3]) {
    if (num < smallest) {
      smallest = num
    }
  }
  console.log(smallest);
}

printSmallestNumber(2, 5, 3);
printSmallestNumber(600, 342, 123)
