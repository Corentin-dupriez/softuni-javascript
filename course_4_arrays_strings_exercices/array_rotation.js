function solve(numArray, rotationsNum) {
  let newArray = numArray;
  for (let i = 0; i < rotationsNum; i++) {
    newArray = newArray.slice(1).concat(newArray[0]);
  } 
  console.log(newArray.join(' '));
}

solve([51,47,32,61,21], 2);
