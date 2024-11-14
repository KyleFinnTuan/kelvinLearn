const param = 'ditto';

fetch(`https://pokeapi.co/api/v2/pokemon/${param}`)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response.name);
    console.log(response.height);
    console.log(response.weight);
    console.log(response.stats);
  })

const fetchPokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${param}`);
  const pokemon = await response.json();
  console.log(pokemon);
}

fetchPokemon();