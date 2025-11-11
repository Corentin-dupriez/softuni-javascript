function solve(start_num, end_num) {
  let list = []
  let result = 0
  for (let i = start_num; i <= end_num; i++){
    list.push(i);
    result = result + i
  } 
  console.log(list.join(' '));
  console.log(`Sum: ${result}`);
}

solve(1, 5);
