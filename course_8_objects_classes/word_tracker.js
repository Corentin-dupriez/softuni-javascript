function countWords(input) {
  const requestedWord = input[0].split(" ");
  const map = {};
  requestedWord.forEach((w) => {
    map[w] = 0;
  });

  for (let i = 1; i < input.length; i++) {
    if (map.hasOwnProperty(input[i])) {
      map[input[i]]++;
    }
  }
  for (const [word, count] of Object.entries(map).sort((a, b) => b[1] - a[1])) {
    console.log(`${word} - ${count}`)
  }
}

countWords([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])

countWords([
'is the', 
'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])
