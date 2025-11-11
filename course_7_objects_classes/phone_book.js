function storeNumbers(listOfPeople) {
  let phoneBook = {}
  for (person of listOfPeople) {
    name = person.split(' ')[0]
    number = person.split(' ')[1]
    phoneBook[name] = number;
  }

  for ([name, number] of Object.entries(phoneBook)) {
    console.log(`${name} -> ${number}`)
  }

}

storeNumbers(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344'])
