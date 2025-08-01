/**
 * Llenar un vector con los 10 primeros múltiplos de 3 y luego sume los elementos del vector.
 * Mostrar la suma de los elementos.
 */

let multiplos = [];
let suma = 0;

for (let i = 1; i <= 10; i++) {
  multiplos.push(i * 3);
  suma += i * 3;
}

console.log("Múltiplos de 3:", multiplos);
console.log("Suma de los múltiplos:", suma);
