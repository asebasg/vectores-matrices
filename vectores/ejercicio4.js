/**
 * Crear un vector de 20 elementos con valores numéricos diferentes. Hallar el mayor valor y su
 * posición y el valor promedio.
 */

let vector = [];
let mayor;
let menor;
let posicionMayor = 0;
let suma = 0;

for (let i = 0; i < 20; i++) {
  vector.push(Math.floor(Math.random() * 99) + 1);
}

mayor = vector[0];
menor = vector[0];
suma = vector[0];

for (let i = 1; i < 20; i++) {
  suma += vector[i];
  if (vector[i] > mayor) {
    mayor = vector[i];
    posicionMayor = i;
  }
  if (vector[i] < menor) {
    menor = vector[i];
  }
}

let promedio = suma / 20;

console.log("Vector:", vector);
console.log("Mayor valor:", mayor, "en la posición:", posicionMayor);
console.log("Menor valor:", menor);
console.log("Valor promedio:", promedio);
