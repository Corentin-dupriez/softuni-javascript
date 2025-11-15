function handleCars(carsArray) {
  let parking = {};
  for (car of carsArray) {
    const[action, carNumber] = car.split(', ');
    
    if (action == 'IN') {
       parking[carNumber] = true; 
    } else {
      delete parking[carNumber];
    }
  } 
 
  const output = Object.keys(parking);
  if (output.length > 0) {
    output.sort();
    for (car of output) {
      console.log(car)
    }
  } else {
    console.log('Parking Lot is Empty')
  }
}

handleCars(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])

handleCars(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])
