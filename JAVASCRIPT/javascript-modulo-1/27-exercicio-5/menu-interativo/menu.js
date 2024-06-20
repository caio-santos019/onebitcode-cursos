/* Escreva um programa em javascript que simule um menu 
interativo com 5 opções diferentes. 
O programa deverá iniciar mostrando as 5 opções disponíveis, 
as quatro primeiras não precisam de nenhuma funcionalidade específica, 
a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das 
quatro primeiras opções uma mensagem deve ser exibida na tela indicando 
qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções.
 Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. 
 Ao escolhe-la uma mensagem dizendo que o sistema está sendo 
encerrado deve ser exibida na tela e então o programa é finalizado.*/

let option = "";

do {
  option = prompt(
    "Seja bem-vindo(a)!\n" +
      "\nEscolha uma das opções abaixo:" +
      "\n1 - Opção Um" +
      "\n2 - Opção Dois" +
      "\n3 - Opção Três" +
      "\n4 - Opção Quatro" +
      "\n5 - Encerar"
  );

  switch (option) {
    case "1":
      alert("Você escolheu a opção 1.");
      break;
    case "2":
      alert("Você escolheu a opção 2.");
      break;
    case "3":
      alert("Você escolheu a opção 3.");
      break;
    case "4":
      alert("Você escolheu a opção 4.");
      break;
    case "5":
      alert("Você escolheu encerrar o programa...");
      break;
    default:
      alert("Opção Inválida! Escolha uma das cinco opções.");
      break;
  }
} while (option !== "5");