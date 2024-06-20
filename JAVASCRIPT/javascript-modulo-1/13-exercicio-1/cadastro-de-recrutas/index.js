/* Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:
o primeiro nome
o sobrenome
o campo de estudo
o ano de nascimento
Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento). */

alert("Cadastro de Recrutas!");

// Método criado pra extrair o ano atual.
const date = new Date();
const anoAtual = date.getFullYear();

const primeiroNome = prompt("Informe o primeiro nome do recruta:");
const sobrenome = prompt("Informe o sobrenome do recruta:");
const campoDeEstudo = prompt("Informe o campo de estudo do recruta:");
const anoDeNascimento = parseFloat(
  prompt("Informe o ano em que o recruta nasceu:")
);
const idade = anoAtual - anoDeNascimento;

alert(
  "Recruta cadastrado! \n\n" +
    "Nome Completo: " +
    primeiroNome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    campoDeEstudo +
    "\nIdade: " +
    idade
);
