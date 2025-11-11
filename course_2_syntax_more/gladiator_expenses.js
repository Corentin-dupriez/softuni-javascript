function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let expenses = 0;
  expenses = expenses + (Math.floor(lostFights / 2) * helmetPrice);
  expenses = expenses + (Math.floor(lostFights / 3) * swordPrice);
  expenses = expenses + (Math.floor(lostFights / 6) * shieldPrice);
  expenses = expenses + (Math.floor(lostFights / 12) * armorPrice);
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

solve(7, 2, 3, 4, 5);
solve(23, 12.50, 21.50, 40, 200);
