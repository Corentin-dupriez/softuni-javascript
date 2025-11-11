function solve(sentence, censoredWord) {
  newSentence = sentence.replace(censoredWord, '*'.repeat(censoredWord.length));
  while (newSentence.includes(censoredWord)) {
    newSentence = newSentence.replace(censoredWord, '*'.repeat(censoredWord.length));
  }
  console.log(newSentence);
}

solve('Find the hidden word', 'hidden');
solve('A small sentence with some small words', 'small')
