function solve(speed, area) {
  allowedSpeeds = {
    'motorway': 130,
    'interstate': 90,
    'city': 50,
    'residential': 20
  }
  if (Number(speed) <= allowedSpeeds[area]) {
    console.log(`Driving ${speed} km/h in a ${allowedSpeeds[area]} zone`)
  } else {
    difference = speed - allowedSpeeds[area]
    if (difference <= 20) {
      status = 'speeding'
    } else if (difference <= 40) {
    status = 'excessive speeding'
  } else {
    status = 'reckless driving'
  }
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeeds[area]} - ${status}`)
  }
  
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
