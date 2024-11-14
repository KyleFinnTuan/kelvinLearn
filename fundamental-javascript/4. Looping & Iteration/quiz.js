/*
Quiz 1: Total Price

Get the total price by using looping/iteration.
Finish the objective by using all 3 different loopings:
- For of
- For
- For in
*/

// 1. For Of
const groceries = [15000, 30000, 50000, 100000, 500000];
let totalPriceForOf = 0;

for (const grocery of groceries) {
  totalPriceForOf = totalPriceForOf + grocery;
  // totalPriceForOf += grocery;
}

console.log(totalPriceForOf, 'For Of');

// 2. For
let totalPriceFor = 0;

for (let i = 0; i < groceries.length; i++) {
  const grocery = groceries[i];
  totalPriceFor += grocery;
}

console.log(totalPriceFor, 'For');

// 3. For In
let totalPriceForIn = 0;

for (const i in groceries) {
  totalPriceForIn += groceries[i];
}

console.log(totalPriceForIn, 'For In');

/*
Quiz 2: Looping + Condition

Find the correct key to open the Golden Door by using looping and condition (if-else);
- If the key has been found, print: "You have opened the door".
- If the key is not found, print: "You don't have the right key"
*/

const requiredKey = 'Black Key'; // 'White Key'
const keys = ['Red Key', 'Blue Key', 'Green Key', 'Golden Key', 'Yellow Key', 'Black Key'];

let keyFound = false; // Flagging

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];

  if (key === requiredKey) {
    keyFound = true;
  }
}

if (keyFound === true) {
  console.log("You have opened the door");
} else {
  console.log("You don't have the right key");
}

/*
  Different approach with While
*/

let findingKey = true;
let i = 0;

while (findingKey) {
  const key = keys[i];

  if (key === requiredKey) {
    findingKey = false;
  }

  console.log('Finding key...');
  i++;
}

if (!findingKey) {
  console.log("You have opened the door");
}

/*
  Example 2
*/

const passcard = 'Test Card';
const cards = ['Poker Card', 'Visa Card', 'Uno Card', 'Master Card', 'ATM Card'];

let haveAccess = false;

for (const card of cards) {
  // console.log(`${card} === ${passcard} =`, card === passcard);
  if (card === passcard) {
    console.log('The door is unlocked.');
    haveAccess = true;
  } else {
    // console.log('You are not permitted');
  }
}

if (!haveAccess) { // emptyValues, null, undefined, 0 = false
  console.log('You are not permitted');
}