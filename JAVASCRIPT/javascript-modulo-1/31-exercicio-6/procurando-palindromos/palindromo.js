// No script, a primeira coisa que precisamos fazer é solicitar a palavra e criar uma variável para armazenar a palavra invertida:

const palavra = prompt("Informe uma palavra:");
let palavraInvertida = "";

// Depois vamos criar um laço for que vai percorrer as posições da palavra, porém começando do último índice e indo até o primeiro:
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

// Para terminar, só precisamos criar uma condicional if else para verificar se a palavra é ou não um palíndromo e mostrar as mensagens de acordo:
if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!");
} else {
  alert(
    palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida
  );
}
