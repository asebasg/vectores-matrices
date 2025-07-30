/**
 * Determine si un valor que es ingresado por el usuario, se encuentra en una matriz y mostrar
 * su posición. Para lo anterior, utilice una búsqueda secuencial, recorriendo la matriz por
 * columnas. Si encuentra el valor, hacer rompimiento de ciclos.
 */

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let numeroIngresado = 4;
let encontrado = false;

for (let j = 0; j < matriz[0].length; j++) {
  for (let i = 0; i < matriz.length; i++) {
    if (matriz[i][j] === numeroIngresado) {
      console.log(`Valor encontrado en la fila ${i}, con columna ${j}`);
      console.table(matriz);
      encontrado = true;
      break;
    }

    if (!encontrado) {
      console.log("El valor ingresado no existe en la matriz");
    }
  }
}
