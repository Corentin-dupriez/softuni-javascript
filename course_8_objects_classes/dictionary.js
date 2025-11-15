function createDictionary(input) {
  const dict = {}

  for (const el of input) {
    const obj = JSON.parse(el);

    for (const key in obj) {
      dict[key] = obj[key];
    }
  }
  for (const term of Object.keys(dict).sort()){
      const description = dict[term];
      console.log(`Term: ${term} => Definition: ${description}`)
    }
}

createDictionary([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])
