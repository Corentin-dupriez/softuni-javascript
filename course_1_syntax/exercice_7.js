function solve(day, age) {
  prices = {
    "Weekday": 
    {
      18: "12$",
      64: "18$",
      122: "12$"
    },
    "Weekend" : 
    {
      18: "15$",
      64: " 20$",
      122: "15$"
    },
    "Holiday": 
    {
      18: "5$",
      64: "12$",
      122: "10$"
    }
  }


  if (age < 0 || age > 122) {
    console.log(`Error!`)
  } else {
    if (day === "Weekday"){
      if (age <= 18 ) { 
      console.log(prices["Weekday"][18]);
      } else if (age <= 64) {
        console.log(prices["Weekday"][64]);
      } else {
        console.log(prices["Weekday"][122]);
      }
    } else if (day === "Weekend") {
       if (age <= 18 ) { 
      console.log(prices["Weekend"][18]);
      } else if (age <= 64) {
        console.log(prices["Weekend"][64]);
      } else {
        console.log(prices["Weekend"][122]);
      }
    } else {
        if (age <= 18 ) { 
      console.log(prices["Holiday"][18]);
      } else if (age <= 64) {
        console.log(prices["Holiday"][64]);
      } else {
        console.log(prices["Holiday"][122]);
      }
  }
  }
}

solve("Weekend", 19)

