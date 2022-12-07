let continueButton= document.querySelector('.enemyApresentation__botao')

async function createEnemy() {

    let fetchedPokemon = await  findPokemon('mew');
  console.log(fetchedPokemon)
    createStructure(enemyPokemon);
    addData(enemyPokemon,fetchedPokemon.sprites.other.dream_world.front_default, fetchedPokemon.name,
        fetchedPokemon.types[0].type.name, '',
        fetchedPokemon.stats[0].base_stat, fetchedPokemon.stats[1].base_stat)

}
createEnemy();
continueButton.addEventListener('click',(event)=>{
    event.preventDefault();
    enemyPokemon.classList.add('none')
    alyPokemon.classList.remove('none')



})
