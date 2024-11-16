const nomeheroi = prompt('Qual o seu nome?')
const ataque = prompt('Qual seus pontos de ataque?')
alert('Seu inimigo está se aproximando de você...')
const lifepoint = prompt('Quanto de ponto de vida você acha que ele tem?')
const defense = prompt('Adivinhe quanto o seu inimigo tem de defesa?')
let shield = prompt('Você ainda não consegue saber direito, mas ele tem ou não tem escudo? \n Responda sim ou não')

let atk = Number(ataque)
let opLp = Number(lifepoint)
let opDefense = Number(defense)

if(shield === 'sim'){
    shield = true
} else if (shield === 'não' || shield === 'nao')
{
    shield = false
}

alert('Você ataca o seu inimigo... o resultado é...')

const noShieldAttack = atk - opDefense
const noShieldAttackLP = opLp - noShieldAttack
const attackWithShield = (atk - opDefense)/2
const attackWithShieldLP = opLp - attackWithShield

if(atk > opDefense && !shield)
{
    alert(nomeheroi + ', você atacou o seu oponente sem escudo, e gerou ' + noShieldAttack + ' de dano! Ele está com ' + noShieldAttackLP+ ' de vida!' )

    if(noShieldAttackLP < 0){
        alert(nomeheroi + ', seu ataque foi suficiente, para matar-lo!')
    }
} else if(atk > opDefense && shield)
{
    alert ('Nossa! Ele tinha um escudo! Você gerou ' + attackWithShield + ' de dano nele! Ele está com ' + attackWithShieldLP + ' de vida!')

    if(attackWithShieldLP < 0){
        alert(nomeheroi + ', seu ataque foi suficiente, para matar-lo!')
    }
} else if (atk === opDefense)
{
    alert ('Opa! Vocês baterem um contra o outro e não gerou dano algum!')
} else if (atk < opDefense){
    alert ('Seu ataque não desferiu dano algum!')
}
