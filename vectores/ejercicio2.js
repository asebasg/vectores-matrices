/**
 * Realizar un algoritmo que genere los números pares de 2 a 200, llenar un vector con ellos y
 * mostrar el vector.
 */

const pares = [];

for (let i = 2; i <= 200; i += 2) {
  pares.push(i); // Se agregan los valores pares al array
}

console.log(pares);
