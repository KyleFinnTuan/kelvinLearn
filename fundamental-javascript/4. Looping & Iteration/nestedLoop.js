const keys = ['Red Key', 'Blue Key', 'Green Key', 'Golden Key', 'Yellow Key', 'Black Key'];

// for (const key of keys) {
//   console.log(key); // 6x looping
//   for (const character of key) {
//     console.log(character); // 6 x 6 = 36x looping
//   }
// }

// *****
// *****
// *****
// *****
// *****

let str = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    str += '*';
  }
  console.log(str);
  str = '';
}

// *
// **
// ***
// ****
// *****

for (let i = 0; i < 5; i++) {
  let str = '';
  // console.log(i);
  for (let j = 0; j < i + 1; j++) {
    str += '#'
  }

  console.log(str);
}

// *****
// ****
// ***
// **
// *

for (let i = 4; i >= 0; i--) {
  let str = '';
  // console.log(i);
  for (let j = 0; j < i + 1; j++) {
    str += '*'
  }
  console.log(str);
}

// breakdown
// let string = '';

// // 4 3 2 1 0
// for (let j = 0; j < 0 + 1; j++) {
//   string += '*'
// }

// console.log(string);