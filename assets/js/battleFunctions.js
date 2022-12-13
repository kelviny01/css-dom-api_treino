let buttonOfAttack = document.querySelector(".batlefield__action-attack");
let buttonOfDefense = document.querySelector(".batlefield__action-defense");
let buttonOfDodge = document.querySelector(".batlefield__action-dodge");
// value was taken in'enemyApresentation.js'
let enemyHp = 0
// value was taken in 'selectTeam.js'
let allyHp = 0
//value of priority
let priorityAlly = 0
let priorityEnemy = 0
//value for action enemy
let dice = 0

function attack(valueOfAttack, target, action) {
    damage = (10 + (valueOfAttack * (Math.random() * 1)))
    if (target > 0) {
        if (target == enemyHp) {
            target = target - damage
            enemyHp = target
            console.log(`o pokemon inimigo recebeu ${Math.floor(damage)} de dano `)
            if (action == 'defense') {
                console.log('porém conseguiu defender')
                enemyHp = target + damage
                priorityEnemy = -6
            }
            if (action == 'dodge') {
                dodge = Math.floor(Math.random() * 6)
                if (dodge <= 2) {
                    console.log('porém conseguiu desviar')
                    enemyHp = target + damage

                } else if (dodge <= 4) {

                    console.log('tentou desviar, mas foi acertado de raspão')
                    enemyHp = target + (damage / 2)

                } else {
                    console.log('tentou desviar, mas não conseguiu')
                }
                priorityEnemy = 6
                console.log(priorityEnemy)
            }
        } else {
            target = target - damage
            allyHp = target
            console.log(`o seu pokemon recebeu ${Math.floor(damage)} de dano `)
            if (action == 'defense') {
                console.log('porém conseguiu defender')
                allyHp = target + damage
                priorityAlly = +6
            }
            if (action == 'dodge') {
                dodge = Math.floor(Math.random() * 6)
                if (dodge <= 2) {
                    console.log('porém conseguiu desviar')
                    allyHp = target + damage

                } else if (dodge <= 4) {

                    console.log('tentou desviar, mas foi acertado de raspão')
                    allyHp = target + (damage / 2)

                } else {
                    console.log('tentou desviar, mas não conseguiu')
                }
                priorityAlly = -6
            }
        }
    }
}
buttonOfAttack.addEventListener('click', (event) => {
    event.preventDefault();
    priority = Math.floor(Math.random() * 6)
    console.log(priority)

    dice = Math.floor(Math.random() * 6)
    console.log(`o dado caiu em ${dice}`)

    //enemy attack with dice= 2 or less
    if (dice <= 3) {
        if (priority + priorityEnemy > 3) {

            priorityAlly = 0
            priorityEnemy = 0

            attack(selectedPokemon[0].atk, allyHp)
            if (allyHp <= 0) {
                console.log('o seu pokemon foi derrotado')
            } else {
                attack(selectedPokemon[1].atk, enemyHp)
                if (enemyHp <= 0) {
                    console.log('o  pokemon inimigo foi derrotado')
                }
            }
        }
        else {

            priorityAlly = 0
            priorityEnemy = 0
            
            attack(selectedPokemon[1].atk, enemyHp)
            if (enemyHp <= 0) {
                console.log('o  pokemon inimigo foi derrotado')
            }
            else {
                attack(selectedPokemon[1].atk, allyHp)
                if (allyHp <= 0) {
                    console.log('o seu pokemon foi derrotado')
                }
            }
        }

    }
    else if (dice <= 4) {
        attack(selectedPokemon[1].atk, enemyHp, 'defense')


    } else {
        (attack(selectedPokemon[1].atk, enemyHp, 'dodge'))
        if (enemyHp <= 0) {
            console.log('o  pokemon inimigo foi derrotado')
        }
    }
})

buttonOfDefense.addEventListener('click', (event) => {
    event.preventDefault();
    priority = Math.floor(Math.random() * 6)
    console.log(priority)

    dice = Math.floor(Math.random() * 6)
    console.log(`o dado caiu em ${dice}`)

    //enemy atack with dice= 2 or less
    if (dice <= 3) {
        attack(selectedPokemon[0].atk, allyHp, 'defense')
    }
    else if (dice <= 4) {
        console.log('ambos os pokemons tentaram defender')
        priorityEnemy = -6
    } else {
        console.log('o pokemon inimigo se afastou enquanto você defendia')
        priorityEnemy = 6
    }
    priorityAlly = 6

})



