/**
 * Hacer un algoritmo para intercambiar los elementos entre dos matrices.
 */

// Crear dos matrices de 3x3
let matrizA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let matrizB = [
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
];

console.log("Matrices originales:");
console.log("A");
console.table(matrizA);

console.log("B");
console.table(matrizB);

// Intercambiar los elementos
for (let i = 0; i < matrizA.length; i++) {
  for (let j = 0; j < matrizA[i].length; j++) {
    let temp = matrizA[i][j];
    matrizA[i][j] = matrizB[i][j];
    matrizB[i][j] = temp;
  }
}

// Mostrar matrices después del intercambio
console.log("\nDespués del intercambio:");
console.log("A");
console.table(matrizA);

console.log("B");
console.table(matrizB);
