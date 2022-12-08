
function employEnemy(){
  
    createStructure(battlefield);
    addSprite(battlefield,selectedPokemon[0].sprite
        ,selectedPokemon[0].name,'','',selectedPokemon[0].hp,selectedPokemon[0].atk) ;
    
  }
function employAlly(){
    createStructure(battlefield);
    addSprite(battlefield,selectedPokemon[1].sprite
        ,selectedPokemon[1].name,'','',selectedPokemon[1].hp,selectedPokemon[1].atk) ;
}