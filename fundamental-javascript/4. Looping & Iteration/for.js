const sports = ['Football', 'Basket', 'Swimming', 'Marathon', 'Fishing'];
console.log(sports.length, 'length');

for (let i = 0; i < sports.length; i++) {
  console.log(i);
}

for (let i = 0; i < sports.length; i++) {
  const sport = sports[i];
  console.log(sport);
}

/*
sports.length = 5
sports[5] = undefined

sports[0-4]
['Football', 'Basket', 'Swimming', 'Marathon', 'Fishing']
    0            1         2           3           4
*/

/*
Common Mistakes:
- "sports.length" is not substracted by 1
- "i > 0" and not "i >= 0"
- "i--" and not "i++"
*/

for (let i = sports.length - 1; i >= 0; i--) {
  const sport = sports[i];
  console.log(i);
  console.log(sport);
}

/*
++ dipakai saat ingin looping dari awal
-- dipakai saat ingin looping dari belakang
*/

