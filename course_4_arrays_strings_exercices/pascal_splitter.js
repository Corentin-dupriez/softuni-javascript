function solve(stringInput) {
  results = stringInput.matchAll(`[A-Z][a-z0-9_]*`);
  let resultArray = []
  for (result of results){
    resultArray.push(result[0])
  } 
  console.log(resultArray.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
