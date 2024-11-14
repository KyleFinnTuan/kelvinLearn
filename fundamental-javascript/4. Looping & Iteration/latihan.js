const favoriteFruits = ['apple', 'orange', 'watermelon', 'grape'];
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig' ,'grape', 'honeydew', 'kiwi'];

// Find the same fruit between 2 arrays
for (const fruit of fruits) {
  for (const favFruit of favoriteFruits) {
    if (fruit === favFruit) {
      console.log(fruit);
    }
  }
}

for (const i in fruits) {
  for (const j in favoriteFruits) {
    if (fruits[i] === favoriteFruits[j]) {
      console.log(fruits[i]);
    }
  }
}