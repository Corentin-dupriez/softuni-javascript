function manageStoreProvision(currentStock, orderedStock) {
  function addToStock(currentStock, stockToAdd) {
    for (let i = 0; i < stockToAdd.length; i++) {
      if (i % 2 == 0) {
        if (currentStock[stockToAdd[i]]) {
        } else {
          currentStock[stockToAdd[i]] = 0;
        }
      } else {
        currentStock[stockToAdd[i - 1]] = currentStock[stockToAdd[i - 1]] +  Number(stockToAdd[i])
      }
    } 
  }

  function printStock(stockToPrint) {
    for ([key, value] of Object.entries(stockToPrint)){
      console.log(`${key} -> ${value}`)
    }
  }

  let stock = {}

  addToStock(stock, currentStock);
  addToStock(stock, orderedStock);
  printStock(stock);
}

manageStoreProvision([
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
])
