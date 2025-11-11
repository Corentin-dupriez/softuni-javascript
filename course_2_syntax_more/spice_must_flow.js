function solve(startingYield) {
  let currentYield = startingYield;
  let extracted = 0;
  let days = 0;

  while (currentYield >= 100) {
    extracted = extracted + currentYield - 26;
    days = days + 1;
    currentYield = currentYield - 10;
  }
  if (extracted >= 26){
    extracted = extracted - 26;
  }
  
  console.log(days);
  console.log(extracted);
}

solve(111);
solve(450);
