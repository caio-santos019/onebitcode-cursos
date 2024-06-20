/*Escreva um programa em javascript que comece 
perguntando pela quantidade inicial de dinheiro disponível e 
então mostre na tela essa quantidade juntamente com as opções de adicionar e 
remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro 
o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com 
a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro 
e as opções. A opção de remover dinheiro deve fazer o mesmo, 
porém subtraindo o valor. A opção de sair deve encerrar o programa. */

let amount = parseFloat(
  prompt("Olá! Informe a quantidade inicial de dinheiro.")
);
let option = "";

do {
  option = prompt(
    "Saldo disponível: R$ " +
      amount +
      "\n\nEscolha uma das opções abaixo:" +
      "\n1. Adicionar dinheiro" +
      "\n2. Remover dinheiro" +
      "\n3. Sair"
  );

  switch (option) {
    case "1":
      amount += parseFloat(prompt("Quanto você gostaria de adicionar?"));
      break;
    case "2":
      amount -= parseFloat(prompt("Quanto você gostaria de remover?"));
      break;
    case "3":
      alert("Você escolheu encerrar o programa.");
      alert("Encerrando...");
      break;
    default:
      alert("Entrada inválida!");
  }
} while (option !== "3");
