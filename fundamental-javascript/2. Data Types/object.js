const user = {
  pet: 'Cat',
  password: '12345',
  'Full Name': 'Agif',
  email: 'agif@mail.com',
  address: {
    country: 'Indonesia',
    city: 'Bandung'
  }
}

console.log(typeof user); // object

console.log(`Hi ${user['Full Name']}, email: ${user.email}, password: ${user.password}, pet: ${user.pet}`); // Using object values

user.pet = 'Iguana'; // Reassign to object property
console.log(user);

user.job = 'Engineer'; // Adding new property
console.log(user);
user['Favorite Food'] = 'Nasi Goreng';
console.log(user);

for (const key in user) {
  if (Object.hasOwnProperty.call(user, key)) {
    const value = user[key];
    console.log(key); // Get the key
    console.log(value); // Get the value
  }
}

const person = {};

person.firstName = 'John';
person.lastName = 'Doe';
person.age = 50;

console.log(person);

delete person.age; // Deleting a property

console.log(person);

person.car = { // Adding an object inside the object
  type: 'Bus',
  weight: '2000kg',
  color: 'green'
}

console.log(`${person.firstName} ${person.lastName}, has a ${person.car.type} with a ${person.car.color} color and ${person.car.weight} weight.`);

