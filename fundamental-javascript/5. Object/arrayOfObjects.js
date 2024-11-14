const inventory = [
  {
    id: 1,
    name: 'Healing Potion',
    buyPrice: 200,
    sellPrice: 100,
    amount: 10
  },
  {
    id: 2,
    name: 'Mana Potion',
    buyPrice: 300,
    sellPrice: 150,
    amount: 5
  }
]

/*
  Print First Item's ID
*/
console.log(inventory[0].id, "First Item's ID");

/*
  Looping inside array of objects and print the name only
*/
for (const item of inventory) {
  console.log(item.name); // Print the name only
}

/*
  Adding a new Item/Object
*/

const newItem = {
  id: 3,
  name: 'Town Scroll Portal',
  buyPrice: 1000,
  sellPrice: 500,
  amount: 2
}

inventory.push(newItem);

// console.log(inventory);

/*
  Adding a new ID
*/

const newItemWithoutId = {
  name: 'Katana',
  buyPrice: 5000,
  sellPrice: 2500,
  amount: 1
}

const lastItemInInventory = inventory.at(-1);
// const lastItemInInventory = inventory[inventory.length - 1];

newItemWithoutId.id = lastItemInInventory.id + 1;

inventory.push(newItemWithoutId);

console.log(inventory);

/*
  Find an item
*/

console.log('________________');

const itemUsed = 'Healing Potion';

// Ver 1
let itemFound;

for (const item of inventory) {
  if (item.name === itemUsed) {
    itemFound = item;
  }
}

console.log(itemFound, 'Ver 1');

// Ver 2
const selectedItem = inventory.find(item => item.name === itemUsed);
console.log(selectedItem, 'Ver 2');