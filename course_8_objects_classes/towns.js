function createTownObjects(townsList) {
  for (town of townsList) {
    townName = town.split(' | ')[0]
    latitude = Number(town.split(' | ')[1]).toFixed(2)
    longitude = Number(town.split(' | ')[2]).toFixed(2)
    newTown = {
      town: townName,
      latitude: latitude,
      longitude: longitude
      
    }

    console.log(newTown)

  } 
}

createTownObjects(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])
