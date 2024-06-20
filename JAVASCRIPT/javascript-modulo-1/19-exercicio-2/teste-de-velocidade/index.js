/*
Escreva um programa em javascript que permita inserir o nome e a 
velocidade de dois veículos e exiba na tela uma 
mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso) */

alert(
  "Teste de velocidade!\n\n" +
    "Bora descobrir qual o mais rápido entre dois veículos?"
);

const firstVehicleName = prompt("Informe o nome do primeiro veículo:");
const firstVehicleSpeed = prompt(
  "Informe a velocidade do primeiro veículo (Km/h):"
);
const secondVehicleName = prompt("Informe o nome do segundo veículo:");
const secondVehicleSpeed = prompt(
  "Informe a velocidade do segundo veículo (Km/h):"
);

if (firstVehicleSpeed > secondVehicleSpeed) {
  alert(
    "Teste finalizado!\n\n" +
      "Veículo 1: " +
      firstVehicleName +
      " (" +
      firstVehicleSpeed +
      " Km/h)" +
      "\nVeículo 2: " +
      secondVehicleName +
      " (" +
      secondVehicleSpeed +
      " Km/h)" +
      "\n\nO " +
      firstVehicleName +
      " é mais rápido que o " +
      secondVehicleName +
      "."
  );
} else if (firstVehicleSpeed < secondVehicleSpeed) {
  alert(
    "Teste finalizado!\n\n" +
      "Veículo 1: " +
      firstVehicleName +
      " (" +
      firstVehicleSpeed +
      " Km/h)" +
      "\nVeículo 2: " +
      secondVehicleName +
      " (" +
      secondVehicleSpeed +
      " Km/h)" +
      "\n\nO " +
      secondVehicleName +
      " é mais rápido que o " +
      firstVehicleName +
      "."
  );
} else {
  alert("a velocidade de ambos é igual!");
}
