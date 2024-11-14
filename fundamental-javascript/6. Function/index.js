/*
  Basic Function
*/

// 1. Parameter
function formatMessage(message) {
  // console.log(message.toUpperCase());
  return message.toUpperCase();
}

const formattedMessage = formatMessage('Hello World'); // Best Practice
console.log(formattedMessage);
console.log(formatMessage('Javascript Developer Class')); // Bad Practice but still allowed

function sayHi(name) {
  return `Hello ${name}!`
}

console.log(sayHi('John Doe'));

// 2. Parameter
function calculation(a, b) {
  // console.log(a + b - 20);
  return a + b - 20;
}

const calculationA = calculation(1, 22);
console.log(calculationA);
const calculationB = calculation(10, 15);
console.log(calculationB);

// 3. If Else in Function

function dynamicCalculation(a, b, c) {
  // console.log(a + b - 20);
  if (c) {
    return a + b + c - 20;
  } else {
    return a + b - 20;
  }
}

const dynamicA = dynamicCalculation(1, 22);
console.log(dynamicA);
const dynamicB = dynamicCalculation(10, 15, 30);
console.log(dynamicB);

// 4. Array and Function

function sumArray(array) {
  let total = 0;

  for (const number of array) {
    if (typeof number === 'number') {
      total += number;
    }
  }

  return total;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([1312, 212341, 312341234, 41231, 51231]));
console.log(sumArray([1312, 212341, 312341234, 41231, 51231, 'asdasd']));

/*
  Arrow Function
*/

// 5. Basic Arrow Function
const divider = (a, b) => {
  return a / b;
}

console.log(divider(10, 2));

// 6. Array of Objects and Function
const storage = [
  {
    id: 1,
    name: "Ultra HD TV",
    price: 19999.99
  },
  {
    id: 2,
    name: "Gaming Laptop",
    price: 12999.99
  },
  {
    id: 3,
    name: "Smart Refrigerator",
    price: 14999.99
  }
];

const discountCalculator = (item, discount) => {
  return item.price - (item.price * discount / 100);
}

for (const item of storage) {
  console.log(discountCalculator(item, 20));
}

/*
  Use Case
*/
const player = {
  money: 5000,
  inventory: []
}

const shop = [
  {
    id: 'a8sd9ag98sd6fa9s',
    name: 'Healing Potion',
    buyPrice: 200,
    sellPrice: 100
  },
  {
    id: 's87da5f8a7sdfya78sd',
    name: 'Mana Potion',
    buyPrice: 300,
    sellPrice: 150
  },
  {
    id: 'zxocv97a0ds9g7v',
    name: 'Town Scroll Portal',
    buyPrice: 1000,
    sellPrice: 500
  }
]

const findItemInShop = (itemId) => {
  let targetItem;

  for (const item of shop) {
    if (item.id === itemId) {
      targetItem = item;
    }
  }

  return targetItem;
}

const buyItem = (player, itemId, amount) => {
  const item = findItemInShop(itemId);
  
  const playerMoney = player.money;

  if (playerMoney >= item.buyPrice * amount) {
    player.money -= item.buyPrice * amount;
    // player.inventory.push({ // Shorten Ver
    //   ...item,
    //   amount: amount
    // });
    player.inventory.push({ // Manual Ver
      id: item.id,
      name: item.name,
      buyPrice: item.buyPrice,
      sellPrice: item.sellPrice,
      amount: amount
    });
  } else {
    console.log('Not enough money.');
  }
}

const itemId = 's87da5f8a7sdfya78sd';
const amount = 5;
buyItem(player, itemId, amount);
buyItem(player, 'zxocv97a0ds9g7v', 3);

console.log(player);
