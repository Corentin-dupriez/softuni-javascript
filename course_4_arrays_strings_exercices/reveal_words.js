function solve(listOfWords, text) {
  const wordsArray = listOfWords.split(', ');

  for (word of wordsArray) {
    const template = new RegExp(`(?<!\\*)\\*{${word.length}}(?!\\*)`, "g")
    
    text = text.replaceAll(template, word )
    
  }
  console.log(text)
}

solve('great',
'softuni is ***** place for learning new programming languages')

solve('great, learning',
'softuni is ***** place for ******** new programming languages')
