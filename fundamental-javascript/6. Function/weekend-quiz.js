const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 28,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001"
    },
    interests: ["reading", "traveling", "coding"],
    isActive: true,
    friends: [
      {
        name: "Michael Brown",
        relationship: "friend",
        email: "michael.brown@example.com"
      },
      {
        name: "Sarah Wilson",
        relationship: "best friend",
        email: "sarah.wilson@example.com"
      }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 34,
    address: {
      street: "456 Oak St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001"
    },
    interests: ["music", "hiking", "photography"],
    isActive: false,
    friends: [
      {
        name: "Emily Davis",
        relationship: "colleague",
        email: "emily.davis@example.com"
      }
    ]
  },
  {
    id: 3,
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    age: 22,
    address: {
      street: "789 Pine St",
      city: "Chicago",
      state: "IL",
      zip: "60601"
    },
    interests: ["gaming", "painting", "cooking"],
    isActive: true,
    friends: [
      {
        name: "Michael Brown",
        relationship: "friend",
        email: "michael.brown@example.com"
      },
      {
        name: "Sarah Wilson",
        relationship: "best friend",
        email: "sarah.wilson@example.com"
      }
    ]
  },
  {
    id: 4,
    name: "David Lee",
    email: "david.lee@example.com",
    age: 40,
    address: {
      street: "321 Maple St",
      city: "San Francisco",
      state: "CA",
      zip: "94101"
    },
    interests: ["running", "writing", "technology"],
    isActive: true,
    friends: [
      {
        name: "Robert King",
        relationship: "friend",
        email: "robert.king@example.com"
      }
    ]
  },
  {
    id: 5,
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    age: 29,
    address: {
      street: "654 Cedar St",
      city: "Miami",
      state: "FL",
      zip: "33101"
    },
    interests: ["yoga", "baking", "traveling"],
    isActive: false,
    friends: [
      {
        name: "Isabella Lopez",
        relationship: "sister",
        email: "isabella.lopez@example.com"
      }
    ]
  },
  {
    id: 6,
    name: "James Wilson",
    email: "james.wilson@example.com",
    age: 35,
    address: {
      street: "987 Birch St",
      city: "Austin",
      state: "TX",
      zip: "73301"
    },
    interests: ["photography", "cycling", "cooking"],
    isActive: true,
    friends: [
      {
        name: "Oliver Brown",
        relationship: "friend",
        email: "oliver.brown@example.com"
      },
      {
        name: "Lucas Johnson",
        relationship: "colleague",
        email: "lucas.johnson@example.com"
      }
    ]
  },
  {
    id: 7,
    name: "Charlotte Taylor",
    email: "charlotte.taylor@example.com",
    age: 31,
    address: {
      street: "741 Elm St",
      city: "Seattle",
      state: "WA",
      zip: "98101"
    },
    interests: ["gardening", "photography", "reading"],
    isActive: false,
    friends: [
      {
        name: "Sophia Martinez",
        relationship: "friend",
        email: "sophia.martinez@example.com"
      }
    ]
  },
  {
    id: 8,
    name: "Liam Harris",
    email: "liam.harris@example.com",
    age: 27,
    address: {
      street: "852 Spruce St",
      city: "Denver",
      state: "CO",
      zip: "80201"
    },
    interests: ["skiing", "hiking", "technology"],
    isActive: true,
    friends: [
      {
        name: "James Wilson",
        relationship: "colleague",
        email: "james.wilson@example.com"
      }
    ]
  },
  {
    id: 9,
    name: "Olivia White",
    email: "olivia.white@example.com",
    age: 24,
    address: {
      street: "963 Cypress St",
      city: "Portland",
      state: "OR",
      zip: "97201"
    },
    interests: ["art", "music", "yoga"],
    isActive: true,
    friends: [
      {
        name: "Emma Green",
        relationship: "friend",
        email: "emma.green@example.com"
      },
      {
        name: "Noah Scott",
        relationship: "best friend",
        email: "noah.scott@example.com"
      }
    ]
  },
  {
    id: 10,
    name: "Isabella Clark",
    email: "isabella.clark@example.com",
    age: 30,
    address: {
      street: "159 Willow St",
      city: "Boston",
      state: "MA",
      zip: "02101"
    },
    interests: ["dancing", "writing", "traveling"],
    isActive: false,
    friends: [
      {
        name: "Ava Lee",
        relationship: "friend",
        email: "ava.lee@example.com"
      },
      {
        name: "Mia Walker",
        relationship: "colleague",
        email: "mia.walker@example.com"
      }
    ]
  }
];

/*
  Quiz 1: 
  Create a function named `logUserNames` that logs each user's name from the `users` array to the console.

  Expected Output:
  John Doe
  Jane Smith
  Emily Johnson
  David Lee
  Sophia Martinez
  James Wilson
  Charlotte Taylor
  Liam Harris
  Olivia White
  Isabella Clark
*/

// Ver 1 (Normal Function)

function logUserNames() {
  for (const user of users) {
    console.log(user.name);
  }
}

logUserNames();

// Ver 2 (Arrow Function)
const logUserNamesArrow = () => {
  for (const user of users) {
    console.log(user.name);
  }
}

logUserNamesArrow();

/*
  Quiz 2: 
  Create a function named `getUserByEmail` that accepts an email as a parameter and returns the user object that matches the given email from the `users` array.

  Expected Output for `getUserByEmail("jane.smith@example.com")`:
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 34,
    address: {
      street: "456 Oak St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001"
    },
    interests: ["music", "hiking", "photography"],
    isActive: false,
    friends: [
      {
        name: "Emily Davis",
        relationship: "colleague",
        email: "emily.davis@example.com"
      }
    ]
  }
*/

// Ver 1 (Looping)

function getUserByEmail(email) {
  let result;

  for (const user of users) {
    if (user.email === email) {
      result = user;
    }
  }

  return result;
}

const userFoundByEmail = getUserByEmail("jane.smith@example.com");
console.log(userFoundByEmail);

// Ver 2 (.find())
const getUserByEmailArrow = (email) => {
  const result = users.find((user) => {
    return user.email === email;
  });

  return result;
}

console.log(getUserByEmailArrow("emily.johnson@example.com"));

/*
  Quiz 3: 
  Create a function named `filterUsersByAge` that accepts two parameters, `minAge` and `maxAge`, and returns an array of users whose ages fall within that range.

  Expected Output for `filterUsersByAge(25, 30)`:
  [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      age: 28,
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
      },
      interests: ["reading", "traveling", "coding"],
      isActive: true,
      friends: [
        {
          name: "Michael Brown",
          relationship: "friend",
          email: "michael.brown@example.com"
        },
        {
          name: "Sarah Wilson",
          relationship: "best friend",
          email: "sarah.wilson@example.com"
        }
      ]
    },
    {
      id: 5,
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      age: 29,
      address: {
        street: "654 Cedar St",
        city: "Miami",
        state: "FL",
        zip: "33101"
      },
      interests: ["yoga", "baking", "traveling"],
      isActive: false,
      friends: [
        {
          name: "Isabella Lopez",
          relationship: "sister",
          email: "isabella.lopez@example.com"
        }
      ]
    },
    {
      id: 10,
      name: "Isabella Clark",
      email: "isabella.clark@example.com",
      age: 30,
      address: {
        street: "159 Willow St",
        city: "Boston",
        state: "MA",
        zip: "02101"
      },
      interests: ["dancing", "writing", "traveling"],
      isActive: false,
      friends: [
        {
          name: "Ava Lee",
          relationship: "friend",
          email: "ava.lee@example.com"
        },
        {
          name: "Mia Walker",
          relationship: "colleague",
          email: "mia.walker@example.com"
        }
      ]
    }
  ]
*/

const filterUsersByAge = (minAge, maxAge) => {
  const result = users.filter((user) => {
    if (user.age >= minAge && user.age <= maxAge) {
      return true;
    }
  })

  return result;
}

const usersByAgeRange = filterUsersByAge(30, 32);
console.log(usersByAgeRange);

/*
  Quiz 4: 
  Use the `sort` method to return the users array sorted by age in ascending order.

  Expected Output:
  [
    { id: 3, name: "Emily Johnson", age: 22, ... },
    { id: 9, name: "Olivia White", age: 24, ... },
    { id: 8, name: "Liam Harris", age: 27, ... },
    { id: 1, name: "John Doe", age: 28, ... },
    { id: 5, name: "Sophia Martinez", age: 29, ... },
    { id: 10, name: "Isabella Clark", age: 30, ... },
    { id: 7, name: "Charlotte Taylor", age: 31, ... },
    { id: 2, name: "Jane Smith", age: 34, ... },
    { id: 6, name: "James Wilson", age: 35, ... },
    { id: 4, name: "David Lee", age: 40, ... }
  ]
*/

const sortedUsersByAge = users.sort((a, b) => {
  return a.age - b.age;
})

console.log(sortedUsersByAge);

/*
  Quiz 5: 
  Use the `filter` and `map` methods to return an array of email addresses for all users who have "photography" as one of their interests.

  Expected Output:
  [
    "jane.smith@example.com",
    "james.wilson@example.com",
    "charlotte.taylor@example.com"
  ]
*/

// Ver 1 (Best Practice)

const photographyUsers = users.filter((user) => user.interests.includes('photography')).map((user) => user.email);
console.log(photographyUsers);

// Ver 2 (Old Way)

const photographyUsersOld = users.filter((user) => {
  for (const interest of user.interests) {
    if (interest === 'photography') {
      return true;
    }
  }
})

console.log(photographyUsersOld);
