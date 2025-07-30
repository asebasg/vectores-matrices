/**
 * Elabore un algoritmo que lea una matriz de N*M elementos y un valor. Luego modifique la
 * matriz multiplicando cada elemento por el valor leído inicialmente. Muestre la matriz
 * resultante.
 */

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let valor = 2; // Multiplicar por dos

let resultado = []; // Nueva matriz

// Recorrer la matriz para llenarla
for (let i = 0; i < matriz.length; i++) {
    resultado[i] = [] // Fila vacia
    for(let j = 0; j < matriz.length; j++) {
        resultado[i][j] = matriz[i][j] * valor; // Multiplicar por el valor (2)
    }
}

console.log(resultado) // Mostrar resultado en consola
console.table(resultado); // Mostrar resultado como tabla
