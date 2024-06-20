/*
Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, 
o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

Se o poder de ataque for maior do que a defesa e o 
defensor não possuir um escudo, o dano causado será igual a diferença entre o 
ataque e a defesa.

Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo,
o dano causado será igual a metade da diferença entre o ataque e a defesa.

Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens. */

alert(
  "Cálculo de dano!\n\n" +
    "Vamos calcular o quanto de dano um personagem é capaz de causar ao outro!"
);

const firstCharacterName = prompt("Insira o nome do primeiro personagem:");
const firstCharacterPowerAttack = parseFloat(
  prompt("Insira o poder de ataque do primeiro personagem:")
);
const secondCharacterName = prompt("Insira o nome do segundo personagem:");
let secondCharacterLifePoints = parseFloat(
  prompt("Insira a quantidade de pontos de vida do segundo personagem:")
);
const secondCharacterDefensePower = parseFloat(
  prompt("Insira o poder de defesa do segundo personagem:")
);
let secondCharacterHasShield = prompt(
  "O segundo personagem possui um escudo?\n\n" + "(1) - Sim" + "\n(2) - Não"
);

let damage;

if (
  firstCharacterPowerAttack > secondCharacterDefensePower &&
  secondCharacterHasShield == 2
) {
  damage = firstCharacterPowerAttack - secondCharacterDefensePower;
  secondCharacterHasShield = "Não";
} else if (
  firstCharacterPowerAttack > secondCharacterDefensePower &&
  secondCharacterHasShield == 1
) {
  damage = (firstCharacterPowerAttack - secondCharacterDefensePower) / 2;
  secondCharacterHasShield = "Sim";
} else if (firstCharacterPowerAttack <= secondCharacterDefensePower) {
  damage = 0;
  if (secondCharacterHasShield == 1) {
    secondCharacterHasShield = "Sim";
  } else if (secondCharacterHasShield == 2) {
    secondCharacterHasShield = "Não";
  }
}

secondCharacterLifePoints -= damage; // = secondCharacterLifePoints = secondCharacterLifePoints - damage;

alert(
  "Cálculo de dano realizado...\n\n" +
    "O personagem " +
    firstCharacterName +
    " deu " +
    damage +
    " pontos de dano no personagem " +
    secondCharacterName +
    "!" +
    "\n\n" +
    firstCharacterName +
    ":" +
    "\nPoder de ataque: " +
    firstCharacterPowerAttack +
    "\n\n" +
    secondCharacterName +
    ":" +
    "\nPontos de vida após o ataque: " +
    secondCharacterLifePoints +
    "\nPoder de defesa: " +
    secondCharacterDefensePower +
    "\nPossui escudo: " +
    secondCharacterHasShield
);
