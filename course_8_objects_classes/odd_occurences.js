function findOddOccurences(inputString) {
  words = inputString.split(' ') 
  occurences = {}

  for (word of words) {
    if (occurences.hasOwnProperty(word.toLowerCase())) {
      occurences[word.toLowerCase()]++;
    } else {
      occurences[word.toLowerCase()] = 1;
    }
  }

  oddOccurences = []

  for (el of Object.entries(occurences)) {
    if (el[1] % 2 != 0) {
      oddOccurences.push(el[0]);
    }
  }
  console.log(oddOccurences.join(' '))
}

findOddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
