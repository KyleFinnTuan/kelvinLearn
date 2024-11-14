const cities = ['Jakarta', 'Bandung', 'Tangerang', 'Balai', 'Pekanbaru'];

/*
Output 1:
['Jakarta', 'Bandung', 'Tangerang', 'Balai', 'Bogor']

Output 2:
['Jakarta', 'Bandung', 'Tangerang', 'Depok', 'Bekasi']

Output 3:
['Denpasar', 'Semarang', 'Tangerang', 'Depok', 'Bekasi']
*/

// First Option
cities.pop();
// console.log(cities);

cities.push('Bogor')
console.log(cities, 'Output 1'); // ['Jakarta', 'Bandung', 'Tangerang', 'Balai', 'Bogor']

// // Second Option
// cities[4] = 'Bogor';
// console.log(cities);

// // Third Option
// cities[cities.length - 1] = 'Bogor';
// console.log(cities);

cities.pop();
cities.pop();

// cities.push('Depok');
// cities.push('Bekasi')
cities.push('Depok', 'Bekasi');

console.log(cities, 'Output 2'); // ['Jakarta', 'Bandung', 'Tangerang', 'Depok', 'Bekasi']

cities.shift();
cities.shift();

cities.unshift('Denpasar', 'Semarang');
console.log(cities, 'Output 3'); // ['Denpasar', 'Semarang', 'Tangerang', 'Depok', 'Bekasi']