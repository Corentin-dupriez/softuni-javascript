function createCat(catInfo) {
  
  class Cat {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`) 
    }
  }

  for (cat of catInfo){
    catName = cat.split(' ')[0] 
    catAge = cat.split(' ')[1]
    newCat = new Cat(catName, catAge)
    newCat.meow()
  }
}

createCat(['Mellow 2', 'Tom 5'])
