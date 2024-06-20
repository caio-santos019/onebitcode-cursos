// Retorno é a saída da função

// O retorno é usado para armazenarmos a saída da função em uma variável
// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined
// Para dizer qual é a saída de uma função usamos o return
function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(7, 2);
console.log(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1,
  };
  return produto;
}
// Também podemos jogar a saída de uma função dentro dos parâmetros de outra
console.log(criarProduto("Notebook Intel Core I3 8GB", 2500));

// E o retorno não precisa ser uma variável,
// pode ser o resultado de qualquer expressão
function areaRetangular(base, altura) {
  return base * altura;
}

function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}

// console.log(areaRetangular(3, 5));

// console.log(areaQuadrada(9));

// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
function ola() {
  let texto = "...";
  texto = "Olá, mundo";
  return texto;
  console.log(texto);
}

console.log(ola());

// No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos
function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(maioridade(29));
console.log(maioridade(13));
