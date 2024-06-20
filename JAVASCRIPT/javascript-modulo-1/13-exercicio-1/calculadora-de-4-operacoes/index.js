/*
Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).
Após calcular os resultados o programa deve exibi-los na tela. 
*/

alert(
  "Calculadora de 4 operações!! \n\n" +
    "Digite 2 números e eu te retornarei os resultados da soma, subtração, multiplicação e divisão entre eles."
);

const numero1 = parseFloat(prompt("Informe o primeiro número:"));
const numero2 = parseFloat(prompt("Informe o segundo número:"));

const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;

alert(
  "Cálculo realizado com sucesso! \n\n" +
    "Soma: " +
    soma +
    "\nSubtração: " +
    subtracao +
    "\nMultiplicação: " +
    multiplicacao +
    "\nDivisão: " +
    divisao
);
