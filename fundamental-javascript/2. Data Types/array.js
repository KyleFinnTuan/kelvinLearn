// const indexes = [0, 1, 2, 3] // Index
const name = 'Agif';
console.log(name[3]); // f from Agif

const fruits = ['Apple', 'Orange', 'Watermelon', 'Grape']; // Array of String

const scores = [90, 70, 95, 100] // Array of Number

console.log(fruits, 'before reassign');
// console.log(scores);
// console.log(arrayOfArray);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// Reasign Array Value
fruits[0] = 'Lemon';
scores[1] = 75;

console.log(fruits, 'after reassign');
console.log(scores);

// Bad Practice!! (Mixed different data types together)
const randomThings = ['Agif', 123];

/*
  Use Case
*/

const people = ['Agif', 'Ghaniyo', 'Yoga', 'Aisyah', 'Ihsan', 'Adi', 'Nisa'];

const selectedPerson = people[5];

console.log(selectedPerson); // Adi

const arrayOfArray = [
  [1, 2, 3], // index ke 0
  [4, 5, 6] // index ke 1
] // Array of Array

console.log(arrayOfArray[0]); // [1, 2, 3]
console.log(arrayOfArray[1]); // [4, 5, 6]

console.log(arrayOfArray[0][1]); // 2
console.log(arrayOfArray[1][2]); // 6

const person = ['Agif', 'Ghaniyo', 'Yoga', 'Aisyah', 'Ihsan', 'Adi', 'Nisa'][5];
console.log(person);

/*
  Looping for of and for in
*/

for (const fruit of fruits) { // Looping for its value
  console.log(fruit);
}

for (const index in fruits) { // Looping for its key/index
  console.log(fruits[index]);
}

// Array Length
// const fruitsLength = fruits.length;
// console.log(fruitsLength);

// Looping
// for (let i = 0; i < 5; i++) {
//   console.log(fruits[i]);
// }