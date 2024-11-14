/*

Quiz 1: Create a new object named "person" then fill the properties with:
- firstName
- lastName
- address (object)
  - country
  - city
- age

And then print the whole object

*/

const person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    country: 'Indonesia',
    city: 'Jakarta'
  },
  age: 30
}

console.log(person);

/*

Quiz 2: Reassign the country and city into another value, then print the object

*/

person.address.country = 'Japan';
person.address.city = 'Tokyo';

// person.address = {
//   province: 'West Java'
// }

console.log(person);

/*

Quiz 3: Create a new object from empty object "{}", then start adding some properties

*/

const pet = {};

pet.name = 'Kaya';
pet.type = 'Cat';
pet.color = 'White';

console.log(pet);

/*

Quiz 4: Print each value by using forIn

*/

for (const key in pet) {
  if (Object.hasOwnProperty.call(pet, key)) {
    const value = pet[key];
    console.log(value);
  }
}

/*

Quiz 5: Print the whole value in one string

*/

console.log(`I have a ${pet.type.toLowerCase()} named ${pet.name}, her color is ${pet.color.toLowerCase()}`);