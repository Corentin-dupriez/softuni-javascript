function createJsonFromObject(firstName, lastName, hairColour) {
  let person = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColour
  } 
  let jsonObject = JSON.stringify(person);
  console.log(jsonObject);
}

createJsonFromObject('George', 'Jones', 'Brown')
