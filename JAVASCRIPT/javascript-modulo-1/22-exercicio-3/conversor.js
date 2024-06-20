/*Escreva um programa em javascript que funcione como um conversos de medidas. 
O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

milímetro (mm)
centímetro (cm)
decímetro (dm)
decâmetro (dam)
hectômetro (hm)
quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.
O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso) */

alert("Bem vindo ao conversor de medidas!");

const valueInMeter = parseFloat(prompt("Insira uma medida em metros:"));

const millimeter = valueInMeter * 1000;
const centimeter = valueInMeter * 100;
const decimeter = valueInMeter * 10;
const decameter = valueInMeter / 10;
const hectometer = valueInMeter / 100;
const kilometer = valueInMeter / 1000;

const option = parseFloat(
  prompt(
    "Escolha para qual unidade de medida você deseja converter:\n\n1 - Milímetro (mm)\n2 - Centímetro (cm)\n3 - Decímetro (dm)\n4 - Decâmetro (dam)\n5 - Hectômetro (hm)\n6 - Quilômetro (km)"
  )
);

switch (option) {
  case 1:
    alert(
      "Conversão Realizada!\n\n" +
        "Resultado: " +
        valueInMeter +
        "m" +
        " = " +
        millimeter +
        " Milímetros (mm)."
    );
    break;
  case 2:
    alert(
      "Conversão Realizada!\n\n" +
        "Resultado: " +
        valueInMeter +
        "m" +
        " = " +
        centimeter +
        " Centímetros (cm)."
    );
    break;
  case 3:
    alert(
      "Conversão Realizada!\n\n" +
        "Resultado: " +
        valueInMeter +
        "m" +
        " = " +
        decimeter +
        " Decímetros (dm)."
    );
    break;
  case 4:
    alert(
      "Conversão Realizada!\n\n" +
        "Resultado: " +
        valueInMeter +
        "m" +
        " = " +
        decameter +
        " Decâmetros (dam)."
    );
    break;
  case 5:
    alert(
      "Conversão Realizada!\n\n" +
        "Resultado: " +
        valueInMeter +
        "m" +
        " = " +
        hectometer +
        " Hectômetros (hm)."
    );
    break;
  case 6:
    alert(
      "Conversão Realizada!\n\n" +
        "Resultado: " +
        valueInMeter +
        "m" +
        " = " +
        kilometer +
        " Quilômetros (km)."
    );
    break;
  default:
    alert("Opção Inválida!");
    break;
}
