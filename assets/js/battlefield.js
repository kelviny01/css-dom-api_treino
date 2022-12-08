
function employEnemy() {

    createStructure(battlefield);
    addSprite(battlefield, selectedPokemon[0].sprite
        , selectedPokemon[0].name, '', '');
    let type = document.querySelector('.createTeamContainer__type')
    type.classList.add('none');

}
function employAlly() {
    createStructure(battlefield);
    addSprite(battlefield, selectedPokemon[1].sprite
        , selectedPokemon[1].name, '', '');

    let type = document.querySelectorAll('.createTeamContainer__type')

    type[2].classList.add('none')
    type[3].classList.add('none')

}