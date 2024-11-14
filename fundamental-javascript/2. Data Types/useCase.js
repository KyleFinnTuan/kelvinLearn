// emptyValues, null, undefined, 0 = false

const variable = '';

if (variable) {
  console.log(true, 'variable');
} else {
  console.log(false, 'variable');
}

const comparison = 5 === 5;
console.log(comparison, 'comparison');

/*
The flag will be false as default. And we will check whether the person input is the same as registeredPerson. If yes, then show this message "Welcome ${registeredPerson}" in console. If not, show this message instead "You are not registered". Don't forget to change the flag.
*/

let flag = false;

const registeredPerson = 'Ihsan';
const input = 'Ihsan';

if (input === registeredPerson) flag = true;
else flag = false;

if (flag) {
  console.log(`Welcome ${registeredPerson}`);
} else {
  console.log('You are not registered');
}