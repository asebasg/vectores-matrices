/**
 * Diseñar un algoritmo para organizar una matriz columna por columna en forma ascendente.
 */

let matriz = [
  [9, 2, 7],
  [4, 5, 6],
  [3, 8, 1],
];

function ordenarColumnasAscendente(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;

  // Para cada columna, extraer los elementos, ordenarlos y volver a colocarlos
  for (let j = 0; j < columnas; j++) {
    let columna = [];
    for (let i = 0; i < filas; i++) {
      columna.push(matriz[i][j]);
    }
    columna.sort((a, b) => a - b);
    for (let i = 0; i < filas; i++) {
      matriz[i][j] = columna[i];
    }
  }
  return matriz;
}

// Ejemplo de uso
console.log("Matriz original:");
console.table(matriz);

const matrizOrdenada = ordenarColumnasAscendente(matriz);

console.log("Matriz ordenada columna por columna en forma ascendente:");
console.table(matrizOrdenada);
