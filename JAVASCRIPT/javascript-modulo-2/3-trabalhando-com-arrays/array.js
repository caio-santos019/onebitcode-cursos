const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

// Adicionar elementos (push)

let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

// // adicionar elementos no começo do array (unshift)
tamanho = arr.unshift("Teste");
console.log(arr);
console.log(tamanho);

// Remover Elementos do final do array (pop)
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// Remover elementos no começo do array (shift)
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

// Pesquisar por um elemento (includes)
const inclui = arr.includes("Gandalf");
console.log(inclui);

// Pesquisar o indice de um elemento (indexOf)
const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortar e Concatenar
// slice
const hobbits = arr.slice(0, 4); // a partir do 0, 4 elementos
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Fazer substituição dos elementos ou remover um grupo de elementos (splice)
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os Elementos
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição " + indice);
}
