// Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14)
// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

function areaDoTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"));
  const altura = parseFloat(prompt("Informe a altura do triângulo:"));
  return (base * altura) / 2;
}

function areaDoRetangulo() {
  const base = parseFloat(prompt("Informe a base do retângulo:"));
  let altura = parseFloat(prompt("Informe a altura do retângulo:"));
  return base * altura;
}

function areaDoQuadrado() {
  const lado = parseFloat(prompt("Informe o lado do quadrado:"));
  return lado * lado;
}
function areaDoTrapezio() {
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
  const altura = parseFloat(prompt("Informe a altura do trapézio:"));
  return ((baseMaior + baseMenor) * altura) / 2;
}

function AreaDoCirculo() {
  const raio = parseFloat(prompt("Informe o raio do círculo:"));
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica" +
      "\n\n1. Área do Triângulo\n2. Área do retângulo\n3. Área do quadrado\n4. Área do trapézio\n5. Área do círculo\n6. Sair"
  );
}

function executar() {
  let opcao = "";
  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = areaDoTriangulo();
        break;
      case "2":
        resultado = areaDoRetangulo();
        break;
      case "3":
        resultado = areaDoQuadrado();
        break;
      case "4":
        resultado = areaDoTrapezio();
        break;
      case "5":
        resultado = AreaDoCirculo();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção Inválida!");
    }
    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
