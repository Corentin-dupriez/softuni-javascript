function solve(array) {
  for (let i = 0; i < array.length - 1; i++ ) {
    for (let i = 0; i < array.length - 1; i++ ) {
      if (array[i].toUpperCase() > array[i+1].toUpperCase()) {
        smaller = array[i+1]
        bigger = array[i]
        array[i] = smaller;
        array[i+1] = bigger
      }
    } 
  }
  for (let i = 1; i <= array.length; i++){
  console.log(`${i}.${array[i-1]}`)
  }
}


solve(["John", "Bob", "Christina", "Ema"]);
