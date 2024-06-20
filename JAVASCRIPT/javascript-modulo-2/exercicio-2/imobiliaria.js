// Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
// Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// O menu deve ter a opção de salvar um imóvel.
// Para salvar um novo imóvel o programa deve pedir as seguintes informações: Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.
// Nome do proprietário.
// Quantidade de quartos.
// Quantidade de banheiros.
// Se possui garagem.
// O menu também deve ter a opção de mostrar todos os imóveis salvos.

const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem-vindo(a) ao Cadastro de imóveis!" +
      "\nTotal de imóveis: " +
      imoveis.length +
      "\n\nEscolha uma das opções abaixo:\n1. Salvar um imóvel\n2. Listar os imóveis salvos\n3. Sair"
  );
  switch (opcao) {
    case "1":
      // Aqui criamos um objeto e utilizamos o prompt para salvar cada uma de suas propriedades
      const imovel = {};

      imovel.proprietario = prompt("Informe o nome do proprietário:");
      imovel.quartos = prompt("Informe a quantidade de quartos:");
      imovel.banheiros = prompt("Informe a quantidade de banheiros:");
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)");

      // Aqui criamos uma confirmação
      const confirmacao = confirm(
        "Você deseja salvar este imóvel?" +
          "\n\nProprietário: " +
          imovel.proprietario +
          "\nQuantidade de quartos: " +
          imovel.quartos +
          "\nQuantidade de banheiros: " +
          imovel.banheiros +
          "\nPossui garagem? " +
          imovel.garagem
      );
      // Aqui caso a confirmação for verdadeira o imóvel será salvo no array [imoveis] e se não, voltamos ao menu
      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert("Voltando ao menu...");
      }
      break;

    case "2":
      // Aqui criamos um laço de repetição for para iterar sobre o array de imóveis e exibir cada um deles em um alert
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\n\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuantidade de quartos: " +
            imoveis[i].quartos +
            "\nQuantidade de quartos: " +
            imoveis[i].quartos +
            "\nPossui garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Encerrando o programa...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "3");
