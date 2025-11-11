function solve(nb_people, type_people, day) {
  prices = {
    "Students" : {
      "Sunday": 10.46,
      "Saturday": 9.8,
      "Friday": 8.45
    },
    "Business" : {
      "Sunday": 16,
      "Saturday": 15.6,
      "Friday": 10.9
    },
    "Regular": {
      "Sunday": 22.5,
      "Saturday": 20,
      "Friday": 15
    }
  }

  result = prices[type_people][day] * nb_people
  
  switch (type_people) {
    case "Students":
      if (nb_people >= 30){
        result = result - (result * 0.15);
      } 
      break;
    case "Business":
    if (nb_people >= 100) {
        result = result - (prices["Business"][day] * 10);
      }
    break;
    case "Regular": 
      if (nb_people >= 10 && nb_people <= 20) {
        result = result - (result * 0.05);
      }
    break;
    default:
      break;
  }

  console.log(`Total price: ${result.toFixed(2)}`);

}

