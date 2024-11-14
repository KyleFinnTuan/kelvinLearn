const sports = ['Football', 'Basket', 'Swimming', 'Marathon', 'Fishing'];

for (const index in sports) {
  const number = Number(index) + 1;
  console.log(`${number}. ${sports[index]}`);
  // console.log("${number}. ${sports[index]}");
}