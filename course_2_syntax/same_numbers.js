function solve(number) {
  same = true
  result = 0
  for (i = 0; i < number.toString().length; i ++) {
    result = result + Number(number.toString()[i]);
    if ( i != 0 && number.toString()[i] != number.toString()[i-1]){
      same = false;
    }
  } 
  console.log(same);
  console.log(result);
}

solve(2222222);
solve(1234);
