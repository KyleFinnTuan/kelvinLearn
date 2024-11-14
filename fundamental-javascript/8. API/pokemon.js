// const idOrName = 'pikachu';

// const url = `https://pokeapi.co/api/v2/pokemon/${idOrName}`;

// // Ver 1 (.then)

// fetch(url)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

// Ver 2 (Async/Await)

async function getPokemon(nameOrId) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    
    const pokemon = await response.json();
    
    const pokemonStats = pokemon.stats.map((status) => {
      return {
        name: status.stat.name,
        value: status.base_stat
      }
    })

    // console.log(pokemon.name);
    // console.log(pokemonStats);

    const hp = pokemonStats.find((status) => status.name === 'hp');
    const attack = pokemonStats.find((status) => status.name === 'attack');
    const defense = pokemonStats.find((status) => status.name === 'defense');
    const speed = pokemonStats.find((status) => status.name === 'speed');

    document.querySelector('#name').innerText = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`;

    document.querySelector('#hp').innerText = `HP: ${hp.value}`;
    document.querySelector('#attack').innerText = `Attack: ${attack.value}`;
    document.querySelector('#defense').innerText = `Defense: ${defense.value}`;
    document.querySelector('#speed').innerText = `Speed: ${speed.value}`;

    document.querySelector('#image').src = pokemon.sprites.front_default;
    document.querySelector('#image').alt = pokemon.sprites.front_default;
  } catch (error) {
    console.log(error);
  }
}

getPokemon('1');
