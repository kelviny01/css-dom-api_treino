let alyPokemon = document.querySelector('.createTeamContainer');
let pokemonTeam = document.querySelector('.createTeamContainer__team');
let enemyPokemon =document.querySelector('.enemyApresentation');
let PokemonName = document.querySelector('.createTeamContainer__input');
let button = document.querySelector('.createTeamContainer__button');
let selectedPokemon =[]

async function findPokemon(pokemon) {
    const pokemonN = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const pokemonConvertida = await pokemonN.json()
    return pokemonConvertida
}


function createStructure(father) {

    pokemon = father.appendChild(document.createElement('div'));
    pokemon.classList.add('createTeamContainer__pokemon')

    pokemonImg = pokemon.appendChild(document.createElement('img'))
    pokemonImg.classList.add('createTeamContainer__img')

    pokemonNm = pokemon.appendChild(document.createElement('p'))
    pokemonNm.classList.add('createTeamContainer__name')

    pokemonTp = pokemon.appendChild(document.createElement('div'))
    pokemonTp.classList.add('createTeamContainer__type')

}
function addData(father, img, name, type1, type2, hp, atk) {
    let lastPokemon = father.children[father.children.length - 1]

    lastPokemon.children[0].src = `${img}`

    lastPokemon.children[1].textContent = `nome: ${name}`
    lastPokemon.children[2].textContent = `tipo: ${type1} ${type2}`

    selectedPokemon.push(
        {
    "name": name,
    "sprite": img,
    "hp": hp,
    "atk": atk,

})
}

button.addEventListener('click', async (event) => {
    event.preventDefault()
    let fetchedPokemon = await findPokemon(PokemonName.value)
    if (PokemonName.value != '') {
        createStructure(pokemonTeam)
        console.log(fetchedPokemon)
        if (pokemonTeam.children.length <= 4) {
            if (fetchedPokemon.types.length < 2) {
                addData(pokemonTeam,fetchedPokemon.sprites.other.dream_world.front_default, fetchedPokemon.name,
                    fetchedPokemon.types[0].type.name, '',
                    fetchedPokemon.stats[0].base_stat, fetchedPokemon.stats[1].base_stat)
            }
            else {
                addData(pokemonTeam,fetchedPokemon.sprites.other.dream_world.front_default, fetchedPokemon.name,
                    fetchedPokemon.types[0].type.name, fetchedPokemon.types[1].type.name,
                    fetchedPokemon.stats[0].base_stat, fetchedPokemon.stats[1].base_stat)
            }
        }
    }
}
)


