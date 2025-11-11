function solve(arrayNums) {
  arrayNums.sort((a, b) => a > b ? 1 : -1);
  const result = []
  let left = 0, right = arrayNums.length -1;
  
  for (index = 0; index < arrayNums.length; index++){
    if (index % 2 === 0){
      result[index] = arrayNums[left];
      left++
    } else {
      result[index] = arrayNums[right];
      right--
    }
  }
  return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
