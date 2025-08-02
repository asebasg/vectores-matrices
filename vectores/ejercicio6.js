/**
 * De los 50 elementos de un vector, muestre cuántos son: pares, impares, negativos y positivos.
 */

// Crear un vector con 50 elementos (números aleatorios entre -100 y 100)
let vector = [];
for (let i = 0; i < 50; i++) {
  // Generar números aleatorios entre -100 y 100
  vector.push(Math.floor(Math.random() * 201) - 100);
}

// Inicializar contadores
let pares = 0;
let impares = 0;
let negativos = 0;
let positivos = 0;

// Contar los elementos según su característica
for (let i = 0; i < vector.length; i++) {
  // Contar pares e impares
  if (vector[i] % 2 === 0) {
    pares++;
  } else {
    impares++;
  }

  // Contar negativos y positivos
  if (vector[i] < 0) {
    negativos++;
  } else if (vector[i] > 0) {
    positivos++;
  }
  // Nota: el cero no se cuenta ni como positivo ni como negativo
}

// Mostrar el vector y los resultados
console.log("Vector de 50 elementos:");
console.log(vector);
console.log("");
console.log("Resultados:");
console.log("Pares: " + pares);
console.log("Impares: " + impares);
console.log("Negativos: " + negativos);
console.log("Positivos: " + positivos);
