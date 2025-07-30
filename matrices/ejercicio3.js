/**
 * Buscar el valor mayor y el valor menor en una matriz dada y mostrarlos.
 */

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let mayor = matriz[0][0];
let menor = matriz[0][0];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] > mayor) {
      mayor = matriz[i][j];
    }

    if (matriz[i][j] < menor) {
      menor = matriz[i][j];
    }
  }
  console.table(matriz);
  console.log("Resultado final:");
  console.log(`Numero mayor: ${mayor}`);
  console.log(`Numero menor: ${menor}`);
}
