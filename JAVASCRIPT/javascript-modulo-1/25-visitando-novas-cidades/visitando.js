/*
Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. 
Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, 
e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. 
No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou. 
*/

const touristName = prompt("Olá, turista! Informe seu nome:");
let cities = ""; // criando uma variável com string vazia para concatenar as cidades
let score = 0; // criando uma variavel com a contagem inicial em 0, para que possamos somar a quantidade de cidades

let hasVisited = parseFloat(
  prompt("Você já visitou alguma cidade?\n\n1. Sim\n2. Não")
);

while (hasVisited === 1) {
  let city = prompt("Qual o nome da cidade que você visitou?");
  cities += " - " + city + "\n";
  score++;
  hasVisited = parseFloat(
    prompt("Você visitou alguma outra cidade?\n\n1. Sim\n2. Não")
  );
}

alert(
  "Turista: " +
    touristName +
    "\n\nQuantidade de cidades visitadas: " +
    score +
    "\n\nCidades visitadas:\n" +
    cities
);
