function registerHeroes(stringArray) {
  heroes = []
  for (hero of stringArray) {
    const data = hero.split(' / ');
    const heroName = data[0];
    const heroLevel = data[1];
    const heroItems = data[2].split(', ');
    heroes.push({name: heroName, level: heroLevel, items: heroItems});
    
  } 
  heroes.sort((a, b) => a.level - b.level);

  for (hero of heroes) {
    console.log(`Hero: ${hero.name}`)
    console.log(`level => ${hero.level}`)
    console.log(`items => ${hero.items.join(", ")}`)
  }

}

registerHeroes([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
])

registerHeroes([
'Batman / 2 / Banana, Gun',
'Superman / 18 / Sword',
'Poppy / 28 / Sentinel, Antara'
])


