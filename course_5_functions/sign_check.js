function checkSign(num1, num2, num3) {
  negativeNums = 0;
  for (num of [num1, num2, num3]) {
    if (num < 0) {
      negativeNums++;
    }
  }
  if (negativeNums % 2 === 0) {
    console.log('Positive');
  } else {
    console.log('Negative');
  }
}

checkSign(5, 12, -15);
checkSign(-6, -12, 14);
