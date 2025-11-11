function solve(searchedWord, sentence) {
  text = sentence.split(/\W+/);
  if (text.find((x) => x.toLowerCase() === searchedWord.toLowerCase())){
    console.log(searchedWord)
  } else {
  console.log(`${searchedWord} not found!`)
}
}

solve('javascript', 'JavaScript is the best programming language')

solve('python', 'JavaScript is the best programming language')
