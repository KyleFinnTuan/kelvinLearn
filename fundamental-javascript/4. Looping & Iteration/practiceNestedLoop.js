const words = [
  ['apple', 'banana', 'cherry'],
  ['date', 'elderberry', 'fig'],
  ['grape', 'honeydew', 'kiwi']
];

// /* Expected Output:
// apple
// banana
// cherry
// date
// elderberry
// fig
// grape
// honeydew
// kiwi
// */

// Ver 1
for (const fruits of words) {
  for (const fruit of fruits) {
    console.log(fruit);
  }
}

// Ver 2
for (let i = 0; i < words.length; i++) {
  const fruits = words[i];
  for (let j = 0; j < fruits.length; j++) {
    const fruit = fruits[j];
    console.log(fruit);
  }
}

// Ver 3
for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < words[i].length; j++) {
    console.log(words[i][j]);
  }
}

// Listing Down
let count = 0;
for (const fruits of words) {
  for (const fruit of fruits) {
    count++;
    console.log(`${count}. ${fruit}`);
  }
}

// Write a nested loop to print each word along with its length.

/* Expected Output:
apple: 5
banana: 6
cherry: 6
date: 4
elderberry: 10
fig: 3
grape: 5
honeydew: 8
kiwi: 4
*/

for (const fruits of words) {
  for (const fruit of fruits) {
    console.log(`${fruit}: ${fruit.length}`);
  }
}

// Write a nested loop to print the first letter of each word.

/* Expected Output:
a
b
c
d
e
f
g
h
k
*/

for (const fruits of words) {
  for (const fruit of fruits) {
    console.log(fruit[0]);
  }
}

// Write a nested loop to print words that contain the letter 'e'.

/* Expected Output:
apple
cherry
elderberry
grape
honeydew
*/

// const words = [
//   ['apple', 'banana', 'cherry'],
//   ['date', 'elderberry', 'fig'],
//   ['grape', 'honeydew', 'kiwi']
// ];

for (const fruits of words) {
  for (const fruit of fruits) {
    const targetLetter = 'e';
    let letterFound = false;

    for (const letter of fruit) {
      if (targetLetter === letter) {
        letterFound = true;
      }
    }

    if (letterFound === true && fruit !== 'date') {
      console.log(fruit);
    }
  }
}

/*
[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
*/

const numbers = [1, -2, 3, -4, 5];
let tempArray = [];

for (const number of numbers) {
  if (number >= 0) {
    const invertedNumber = number - (number * 2);
    tempArray.push(invertedNumber);
  } else {
    const invertedNumber = number * -1;
    tempArray.push(invertedNumber);
  }
}

console.log(tempArray);

// Write a nested loop to print words with length greater than 4.

/*
const words = [
  ['apple', 'banana', 'cherry'],
  ['date', 'elderberry', 'fig'],
  ['grape', 'honeydew', 'kiwi']
];
*/

/* Expected Output:
apple
banana
cherry
elderberry
grape
honeydew
*/

// Ver 1
for (const fruits of words) {
  for (const fruit of fruits) {
    if (fruit.length > 4) {
      console.log(fruit);
    }
  }
}

// Ver 2
for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < words[i].length; j++) {
    if (words[i][j].length > 4) {
      console.log(words[i][j]);
    }
  }
}

// Write a nested loop to count the number of words containing the letter 'a'.

/* Expected Output:
4
*/

let totalWords = 0;

for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
        if (words[i][j].includes('a')) {
            totalWords++;
        }
    }
}

console.log("Total kata yang mengandung huruf A :", totalWords); // Expected Output: 6

// Write a nested loop to count the number of the letter 'a'.

/* Expected Output:
6
*/

console.log('_______________');

let totalCharacter = 0;

for (const fruits of words) {
  for (const fruit of fruits) {
    for (const character of fruit) {
      if (character === 'a') {
        totalCharacter += 1;
      }
    }
  }
}

console.log(totalCharacter);

// Write a nested loop to print each word in uppercase.

/* Expected Output:
APPLE
BANANA
CHERRY
DATE
ELDERBERRY
FIG
GRAPE
HONEYDEW
KIWI
*/

console.log('______________');

for (const fruits of words) {
  for (const fruit of fruits) {
    console.log(fruit.toUpperCase());
  }
}

// Write a nested loop to print words that start with a vowel.

/* Expected Output:
apple
elderberry
*/

console.log('________________');

const vowels = 'aieuo';

for (const fruits of words) { // to loop array of arrays
  for (const fruit of fruits) { // to loop array of strings
    let wordFound = false;
    const firstLetter = fruit[0];

    for (const vowel of vowels) { // to loop aiueo
      if (firstLetter === vowel) { // to compare firstletter with vowel
        wordFound = true;
      }
    }

    if (wordFound === true) { // check if wordFound has been changed
      console.log(fruit);
    }
  }
}

// Write a nested loop to print words that has a vowel in it.

// const vowels = 'aieuo';

// for (const fruits of words) { // to loop array of arrays
//   for (const fruit of fruits) { // to loop array of strings
//     let wordFound = false;

//     for (const character of fruit) {
      
//       for (const vowel of vowels) {
//         if (character === vowel) {
//           wordFound = true;
//         }
//       }
//     }

//     if (wordFound) {
//       console.log(fruit);
//     }
//   }
// }