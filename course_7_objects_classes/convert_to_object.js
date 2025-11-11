function jsonToObject(stringJson) {
  const object = JSON.parse(stringJson);

  for ([key, value] of Object.entries(object)){
    console.log(`${key}: ${value}`)
  }

}

jsonToObject('{"name": "George", "age": 40, "town": "Sofia"}')
