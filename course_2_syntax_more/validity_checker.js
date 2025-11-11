function solve(x1, y1, x2, y2) {
 function compare(x1, y1, x2, y2) {
  let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2); 
  if (distance == distance.toFixed(0)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
  compare(x1, y1, 0, 0);
  compare(x2, y2, 0, 0);
  compare(x1, y1, x2, y2);
}





solve(3, 0, 0, 4);
solve(2, 1, 1, 1);
