const userDB = [
  {
    id: 1,
    username: 'johndoe',
    email: 'john_doe@mail.com',
    password: 'jdc123',
    profile: {
      fullName: 'John Doe',
      age: 30,
      address: 'Jakarta',
      country: 'Indonesia'
    }
  },
  {
    id: 2,
    username: 'inibudi',
    email: 'budi@mail.com',
    password: 'budiman',
    profile: {
      fullName: 'Budi Pekerti',
      age: 20,
      address: 'Surabaya',
      country: 'Indonesia'
    }
  },
  {
    id: 3,
    username: 'saskeh',
    email: 'sasuke@akatsuki.com',
    password: 'narto',
    profile: {
      fullName: 'Sasule',
      age: 23,
      address: 'Kyoto',
      country: 'Japan'
    }
  },
]

/*
  Quiz 1: Print last user's fullName, country, address, and age
*/

const lastUser = userDB.at(-1);
console.log(lastUser.profile.fullName, lastUser.profile.country, lastUser.profile.address, lastUser.profile.age);

/*
  Quiz 2: Loop the userDB and print: email, fullName, and address 
*/

for (const user of userDB) {
  console.log('-------------');
  console.log('email:', user.email);
  console.log('fullName:', user.profile.fullName);
  console.log('address:', user.profile.address);
}

/*
  Quiz 3: Add a new user with a complete data (just hardcode the ID).
*/

const newUser = {
  id: 4,
  username: 'tester',
  email: 'test@mail.com',
  password: 'testing',
  profile: {
    fullName: 'Tester',
    age: 21,
    address: 'Bandung',
    country: 'Indonesia'
  }
}

userDB.push(newUser);

console.log(userDB);

/*
  Quiz 4: Find a user with this email "budi@mail.com" and then print the object
*/

let targetUser;

for (const user of userDB) {
  if (user.email === 'budi@mail.com') {
    targetUser = user;
  }
}

console.log(targetUser);

/*
  Quiz 5 (Bonus): Find a user that lives in "Jakarta" by using .find()
*/

const userFound = userDB.find((user) => user.profile.address === 'Jakarta');
console.log(userFound);

/*
  Quiz 6: Create a new array that contains only the usernames of users from "Indonesia".
*/
console.log('############');
console.log('Quiz 6');
console.log('############');

// Ver 1 (Recommended)
const tempUserDB = [];

for (const user of userDB) {
  const country = user.profile.country;
  if (country === 'Indonesia') {
    tempUserDB.push(user.username)
  }
}

console.log(tempUserDB);

// Ver 2 (Filter + Map)
// const indonesianUser = userDB.find((user) => user.profile.country === 'Indonesia'); // Find only, finding one then the proccess stopped
// console.log(indonesianUser);

const indonesianUsers = userDB.filter((user) => {
  if (user.profile.country === 'Indonesia') {
    return true;
  }
  // return user.profile.country === 'Indonesia';
})

console.log(indonesianUsers);

const indonesianUsernames = indonesianUsers.map((indonesianUser) => {
  return indonesianUser.username;
})

console.log(indonesianUsernames);

// Ver 3 (Filter + Map One Liner)
const indonesianEmails = userDB.filter((user) => user.profile.country === 'Indonesia').map((user) => user.email);
console.log(indonesianEmails);

// Out of Topic
const emailAndPasswords = userDB.map((user) => {
  return {
    email: user.email,
    password: user.password
  }
})

console.log(emailAndPasswords);

/*
  Quiz 7: Calculate the average age of all users.
*/

console.log('############');
console.log('Quiz 7');
console.log('############');

let totalAge = 0;
const userAmount = userDB.length;

for (const user of userDB) {
  totalAge += user.profile.age;
}

console.log('Average Age:', totalAge / userAmount);

/*
  Quiz 8: Update the address of the user with username "johndoe" to "Bali".
*/

console.log('############');
console.log('Quiz 8');
console.log('############');

for (const user of userDB) {
  if (user.username === 'johndoe') {
    user.profile.address = 'Bali'
  }
}

console.log(userDB);

/*
  Quiz 9: Remove the user with the username "inibudi" from the array.
*/

console.log('############');
console.log('Quiz 9');
console.log('############');

for (let i = 0; i < userDB.length; i++) {
  const user = userDB[i];
  if (user.username === 'inibudi') {
    userDB.splice(i, 1);
  }
}

console.log(userDB);

/*
  Quiz 10: Check if there is any user whose age is above 25, and print a message if there is.
*/

console.log('############');
console.log('Quiz 10');
console.log('############');

// Ver 1 (Recommended)
const oldMen = [];

for (const user of userDB) {
  if (user.profile.age > 25) {
    oldMen.push(user)
  }
}

if (oldMen.length > 0) {
  console.log('There is user(s) whose age is above 25');
}

/*
  Quiz 11: Retrieve a list of all unique countries represented in the userDB array.
*/

console.log('############');
console.log('Quiz 11');
console.log('############');

const uniqueCountries = [];

for (const user of userDB) {
  if (uniqueCountries.length === 0) {
    uniqueCountries.push(user.profile.country);
  } else {
    if (!uniqueCountries.includes(user.profile.country)) {
      uniqueCountries.push(user.profile.country);
    }
  }
}

console.log(uniqueCountries);

/*
  Quiz 12: Sort the users by age in descending order and list their full names.
*/

console.log('############');
console.log('Quiz 12');
console.log('############');

const sortedUsers = userDB.sort((a, b) => b.profile.age - a.profile.age);
console.log(sortedUsers);

/*
  Quiz 13: Create a string that contains all the usernames, separated by a comma.
*/

console.log('############');
console.log('Quiz 13');
console.log('############');

const usernames = [];

for (const user of userDB) {
  usernames.push(user.username)
}

console.log(usernames.join(', '));

/*
  Quiz 14: Count how many users have the letter 'a' in their email.
*/

console.log('############');
console.log('Quiz 14');
console.log('############');

let count = 0;

for (const user of userDB) {
  if (user.email.includes('a')) {
    count++;
  }
}

console.log(count);

/*
  Quiz 15: Find the user with the longest full name and print the full name and the username.
*/

console.log('############');
console.log('Quiz 15');
console.log('############');

let nameLenght = 0;
let longestUser;

for (const user of userDB) {
  if (user.profile.fullName.length > nameLenght) {
    nameLenght = user.profile.fullName.length;
    longestUser = user;
  }
}

console.log(longestUser.profile.fullName);
console.log(longestUser.username);