function solve(sentence, word) {
  let sentenceArray = sentence.split(' ');
  let count = 0;
  for (i= 0; i < sentenceArray.length; i ++) {
  if (sentenceArray[i] == word) {
    count = count + 1;
    }
  }
  console.log(count)
}

solve('This is a word and it also is a sentence',
'is');
