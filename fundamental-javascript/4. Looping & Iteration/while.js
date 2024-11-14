let count = 0;

while (count < 10) {
  // console.log(count);
  count++;
}

let target = 10;

while (target > 0) {
  // console.log(target);
  target--;
}

/*
  Use Case
*/

let findingNumber = true;
let number = 0;

while (findingNumber) {
  number++;
  console.log(number);
  if (number === 20) {
    findingNumber = false;
    console.log('Number found');
  }
}