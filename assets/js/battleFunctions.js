let buttonOfAttack = document.querySelector(".batlefield__action-attack");
let buttonOfDefense = document.querySelector(".batlefield__action-defense");
let buttonOfDodge = document.querySelector(".batlefield__action-dodge");
// value was taken in'enemyApresentation.js'
let enemyHp = 0
// value was taken in 'selectTeam.js'
let allyHp = 0

buttonOfAttack.addEventListener('click', (event) => {
    event.preventDefault();
    priority = Math.floor(Math.random() * 6)
    console.log(priority)
    if (priority > 3) {
        attack(selectedPokemon[0].atk, allyHp)

    }
    else {
        attack(selectedPokemon[1].atk, enemyHp)

    }




})
function attack(valueOfAttack, target) {
    damage=(10 + (valueOfAttack * (Math.random() * 1)))
    if (target > 0) {
        if (target == enemyHp) {
            target = target - damage
            enemyHp = target
            console.log(`o pokemon inimigo recebeu ${Math.floor(damage)} de dano `)
        } else {
            target = target - damage
            allyHp = target
            console.log(`o seu pokemon recebeu ${Math.floor(damage)} de dano `)
        }
    }

    else{
        console.log(`o pokemon que receberia o golpe já está morto.`)
    }
}