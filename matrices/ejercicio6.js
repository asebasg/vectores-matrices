/**
 * Hacer un algoritmo que lea dos valores R y S. Luego, se debe llenar las posiciones pares de
 * una matriz con los múltiplos de R y las posiciones impares de la misma matriz con los
 * múltiplos de S.
 */

// Valores de entrada
let R = 2;
let S = 4;

// Definir dimensiones de la matriz
let filas = 4;
let columnas = 5;
let matriz = [];

// Contadores de múltiplos
let multiploR = R;
let multiploS = S;

// Llenar la matriz
for (let i = 0; i < filas; i++) {
  matriz[i] = [];
  for (let j = 0; j < columnas; j++) {
    let posicion = i * columnas + j; // Posición lineal

    if (posicion % 2 === 0) {
      matriz[i][j] = multiploR;
      multiploR += R;
    } else {
      matriz[i][j] = multiploS;
      multiploS += S;
    }
  }
}

// Mostrar la matriz resultante
console.log("Matriz resultante:");
for (let i = 0; i < filas; i++) {
  console.log(matriz[i]);
}
