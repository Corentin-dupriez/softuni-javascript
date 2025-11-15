function addAndPrintAddressBooke(peopleArray) {
  addressBook = {}

  for (person of peopleArray) {
    personName = person.split(':')[0]
    address = person.split(':')[1]
    addressBook[personName] = address
  }

  for (name of Object.keys(addressBook).sort()) {
    console.log(`${name} -> ${addressBook[name]}`)
  }
}

addAndPrintAddressBooke(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd'])
