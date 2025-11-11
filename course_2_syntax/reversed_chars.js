function solve(char1, char2, char3) {
  charcters = [char1, char2, char3]
  result = []
  for (let i = 2; i >= 0; i--) {
    result.push(charcters[i]);
  } 
  console.log(result.join(' '));
}

solve('A', 'B', 'C');
