/**
 * Leer un vector de N elementos numéricos enteros y posteriormente:
 * - Mostrar cuántas veces se repite el número 10.
 * - Sume los elementos de las posiciones pares.
 * - Muestre los elementos del vector empezando por el último elemento.
 */

const N = 10; // Tamaño de ejemplo
let vector = [];

// Llenar el vector con numeros aleatorios del 1 al 20
for (let i = 0; i < N; i++) {
  vector.push(Math.floor(Math.random() * 20) + 1);
}

let count10 = 0;
let sumEvenPositions = 0;

for (let i = 0; i < N; i++) {
  if (vector[i] === 10) {
    count10++;
  }
  if (i % 2 === 0) {
    sumEvenPositions += vector[i];
  }
}

console.log("Vector:", vector);
console.log("Número 10 se repite:", count10, "veces");
console.log("Suma de elementos en posiciones pares:", sumEvenPositions);
console.log("Elementos del vector desde el último al primero:");

for (let i = N - 1; i >= 0; i--) {
  console.log(vector[i]);
}
