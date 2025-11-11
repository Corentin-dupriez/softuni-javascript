function solve(sentence) {
  let newText = sentence.replace(/[?!,:;'\-. ]/g, ' ');
  textArray = newText.split(/\s+/).filter(Boolean);
  let resultArray = []
  for (let word of textArray) {
    resultArray.push(word.toUpperCase());
  }
  console.log(resultArray.join(', '))
}

solve('Hi, how are you?');
solve('hello')
solve('')
