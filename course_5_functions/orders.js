function calculateOrder(product, quantity) {
  productPrices = {
    'coffee': 1.5,
    'water': 1,
    'coke': 1.4,
    'snacks': 2
  } 
  console.log((productPrices[product] * quantity).toFixed(2));
}

calculateOrder("water", 5);
calculateOrder("coffee", 2);
