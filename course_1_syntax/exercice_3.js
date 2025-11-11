function solve(grade) {
  switch (grade >= 5.50) {
    case (true):
      console.log(`Excellent`)
      break;
  
    default:
      console.log(`Not excellent`)
      break;
  }
}

solve(5);
