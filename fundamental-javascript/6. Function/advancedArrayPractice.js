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
  Quiz 1: Get users whose age is greater than 30
*/

// Original Ver
const middleAgedUsers = users.filter((user) => {
  return user.age > 30;
})

console.log(middleAgedUsers);

// One Liner Ver
const middleAgedUsersShortVer = users.filter((user) => user.age > 30);
console.log(middleAgedUsersShortVer);

/*
  Quiz 2: Map users object into this format:
  {
    id: 1,
    fullName: "John Doe",
    email: "john.doe@example.com",
    bornYear: 1996,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "NY",
      zip: "10001"
    },
    hobbies: ["reading", "traveling", "coding"]
  },
*/

const formattedUsers = users.map((user) => {
  const result = {
    id: user.id,
    fullName: user.name,
    email: user.email,
    bornYear: new Date().getFullYear() - user.age,
    address: {
      street: user.address.street,
      city: user.address.city,
      country: user.address.state,
      zip: user.address.zip
    },
    hobbies: user.interests
  }

  return result;
})

console.log(formattedUsers);

/*
  Quiz 3: Find user that has relationship of "sister" in their friend list
*/

// Ver 1
const userWithSister = users.find((user) => {
  let hasSister = false;

  user.friends.forEach((friend) => {
    if (friend.relationship === 'sister') {
      hasSister = true;
    }
  })

  return hasSister;
})

console.log(userWithSister);

// Ver 2
const userHasSister = users.find((user) => {
  return user.friends.some((friend) => friend.relationship === 'sister');
})
console.log(userHasSister, 'userHasSister');

/*
  Quiz 4: Find users that has relationship of "best friend" in their friend list
*/

const usersWithBestFriend = users.filter((user) => {
  let hasSister = false;

  user.friends.forEach((friend) => {
    if (friend.relationship === 'best friend') {
      hasSister = true;
    }
  })

  return hasSister;
})

console.log(usersWithBestFriend);