// Formating Variable Name
// Choose one and do not mixed them up together

const camelCase = 'camel'; // Camel Case
const snake_case = 'snake'; // Snake Case

console.log(camelCase); // camel
console.log(snake_case); // snake

// Basic String
const word = 'Cat'; // Single Quote
const sentence = "The cat is eating a lizard"; // Double Quote
const paragraph = `The cat is sitting on the couch. The next time it awake, it will ask for food.`; // Backtick

console.log(word); // Cat
console.log(sentence); // The cat is eating a lizard
console.log(paragraph); // The cat is sitting on the couch. The next time it awake, it will ask for food.

// Concat String
const newSentence = word + paragraph + sentence;
console.log(newSentence);
console.log(word + paragraph + sentence);

console.log(newSentence + newSentence);
console.log(word + paragraph + sentence + word + paragraph + sentence);

// Concat with Single or Double Quote
const concat = word + ' ' + sentence + ' ' + paragraph;
console.log(concat);

// Concat with Backtick
const backtickConcat = `${word} in boots. ${sentence}. ${paragraph}`;
console.log(backtickConcat);

const concatCat = `${word}${sentence}${paragraph}`
console.log(concatCat);

// Basic Number
const count = 1;
const countString = '0';

console.log(count);
console.log(countString);

// Checking the data type
console.log(typeof count);
console.log(typeof countString);

// Concating Number With String
const concatNumberWithString = count + countString;
console.log(concatNumberWithString);
console.log(typeof concatNumberWithString);

// Concating Number with Number

let a = 10;
let b = 15;

// Basic Mathematic Operator

const incrementing = a + b;
console.log(incrementing);

const decrementing = a - b;
console.log(decrementing);

const multiplying = a * b;
console.log(multiplying);

const dividing = a / b;
console.log(dividing);

// Another Mathematic Operator
a++;
console.log(a, 'addition');

b--;
console.log(b, 'substraction');

// Concating String with String

const aString = '10';
const bString = '15';

const totalString = aString + bString;
console.log(totalString);

// Multiplying Number with String

const totalMultiplying = a * word;
console.log(totalMultiplying); // NaN (Not a Number)
console.log(0 / 0); // NaN