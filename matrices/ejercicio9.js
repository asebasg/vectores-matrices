/**
 * Calcular el promedio de los valores que están por debajo de la diagonal principal de una
 * matriz dada; en caso que la matriz no sea cuadrada, calcule el promedio de los valores de los
 * laterales.
 */

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function promedioValores(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;

  // Función para calcular promedio de un arreglo de números
  function promedio(arr) {
    const suma = arr.reduce((acc, val) => acc + val, 0);
    return suma / arr.length;
  }

  if (filas === columnas) {
    // Matriz cuadrada: promedio de valores por debajo de la diagonal principal
    let valores = [];
    for (let i = 1; i < filas; i++) {
      for (let j = 0; j < i; j++) {
        valores.push(matriz[i][j]);
      }
    }
    return promedio(valores);
  } else {
    // Matriz no cuadrada: promedio de valores de los laterales (bordes verticales)
    let valores = [];

    // Agregar columna izquierda
    for (let i = 0; i < filas; i++) {
      valores.push(matriz[i][0]);
    }
    // Agregar columna derecha
    for (let i = 0; i < filas; i++) {
      valores.push(matriz[i][columnas - 1]);
    }

    return promedio(valores);
  }
}

// Ejemplo de uso
console.log("Promedio:", promedioValores(matriz));
