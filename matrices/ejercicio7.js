/**
 * Hacer un algoritmo que cree una matriz y que posteriormente, cada elemento de esa matriz
 * sea almacenado en un vector X, el cual debe ser ordenado descendentemente.
 */

// Se crea la matriz base (por ejemplo, 3x3 con valores aleatorios entre 1 y 99)
let filas = 3;
let columnas = 3;
let matriz = [];

for (let i = 0; i < filas; i++) {
  matriz[i] = [];
  for (let j = 0; j < columnas; j++) {
    matriz[i][j] = Math.floor(Math.random() * 99) + 1;
  }
}

// Mostrar la matriz original
console.log("Matriz original:");
for (let i = 0; i < filas; i++) {
  console.log(matriz[i]);
}

// Crear el vector X con todos los elementos de la matriz
let X = [];

for (let i = 0; i < filas; i++) {
  for (let j = 0; j < columnas; j++) {
    X.push(matriz[i][j]);
  }
}

// Ordenar el vector X descendentemente
X.sort((a, b) => b - a);

// Mostrar el vector ordenado
console.log("\nVector X ordenado descendentemente:");
console.log(X);
