function solve(sentence) {
  pattern = /#(?<tag>[a-zA-Z]+)/g; 
  for (const match of sentence.matchAll(pattern)){
    console.log(match[1])
  }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
