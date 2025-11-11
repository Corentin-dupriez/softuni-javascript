function solve(stringArray, number) {
  let newArray = [];
  for (i = 0; i < stringArray.length; i++) {
    if (i % number === 0) {
      newArray.push(stringArray[i]);
    }
  }
  return newArray;
}

solve(['5', '20', '31', '4', '20'], 2);
