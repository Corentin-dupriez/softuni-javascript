function solve(arg) {
  if (typeof arg != "number") {
    console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`)
  }  else {
    result = Math.PI * arg ** 2
    console.log(result.toFixed(2));
  }
}

solve(5);
