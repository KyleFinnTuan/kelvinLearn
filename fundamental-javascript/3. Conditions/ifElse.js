console.log(typeof 5);
console.log(typeof '5');

console.log(5);
console.log('5');

// Strict Comparison
// Check Value and its Data Types
if (5 === '5') {
  console.log("A is equal to B");
} else {
  console.log("A is not equal to B"); // Will be going this route
}

// Casual Comparison
// Check Value only
if (5 == '5') {
  console.log("A is equal to B"); // Will be going this route
} else {
  console.log("A is not equal to B");
}

if (5 > 5) {
  console.log("A is greater to B");
} else {
  console.log("A is lesser or equal to B"); // Will be going this route
}

if (5 >= 5) {
  console.log("A is greater or equal to B"); // Will be going this route
} else {
  console.log("A is lesser to B");
}

if (5 < 4) {
  console.log("A is lesser to B");
} else {
  console.log("A is greater or equal to B"); // Will be going this route
}

if (5 <= 5) {
  console.log("A is lesser or equal to B"); // Will be going this route
} else {
  console.log("A is greater to B");
}

// Nested If-Else
// Use Case Login Feature

const email = 'johndoe@mail.com';
const password = 'john123';

const emailInput = 'johndoe@mail.com';
const passwordInput = 'john123';

if (email === emailInput) {
  if (password === passwordInput) {
    console.log('Login Successful');
  } else {
    console.log('Password is invalid');
  }
} else { // Fallback
  console.log('Email is invalid');
}

/*
  If Else Operator
*/

// AND Operator
if (email === emailInput && password === passwordInput) {
  console.log('Login Successful');
} else {
  console.log('Email or Password is invalid');
}

// OR Operator
if (1 === 3 || 1 === 2 || 1 === 4 || 1 === 5 || 1 === 1) {
  console.log(true);
} else {
  console.log(false);
}

// const email = 'johndoe@mail.com';
// const password = 'john123';

// const emailInput = 'johndoe@mail.com';
// const passwordInput = '';

// // Nested OR Operator
// if (emailInput && passwordInput) {
//   if (email === emailInput && password === passwordInput) {
//     console.log('Login Successful');
//   } else {
//     console.log('Email or Password is invalid');
//   }
// } else {
//   console.log('Email or Password is required');
// }