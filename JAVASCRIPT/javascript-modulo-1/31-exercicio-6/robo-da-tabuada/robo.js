/*Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e 
então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar. */

/*Vamos começar pedindo 
que informe o número e criando também uma variável do tipo 
string para armazenarmos os resultados das multiplicações: */
const numero = parseFloat(
  prompt("Informe um número para calcularmos a tabuada:")
);
let resultado = "";

/*Então criamos um laço for que tem um fator que começa em 1, a primeira multiplicação, e vai até 20, a última. 
Dentro dele iremos concatenar o resultado na nossa string de resultado: */
for (let fator = 1; fator <= 20; fator++) {
  resultado += " -> " + numero + " x " + fator + " = " + numero * fator + "\n";
}

/*Por último, exibimos o resultado da tabuada com um alert: */
alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado);
