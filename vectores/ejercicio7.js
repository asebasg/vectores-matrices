/**
 * En vector de 40 elementos numéricos llamado totales, se requiere ir sumando y mostrando
 * cada elemento, siempre y cuando sea mayor al primer elemento y menor al elemento 25.
 * Finalmente, muestre el total de los elementos que fueron sumados.
 */

// Crear un vector con 40 elementos numéricos (números aleatorios entre 1 y 100)
let totales = [];
for (let i = 0; i < 40; i++) {
  totales.push(Math.floor(Math.random() * 100) + 1);
}

// Mostrar el vector
console.log("Vector totales:");
console.log(totales);
console.log("");

// Obtener el primer elemento y el elemento 25 (índice 24)
let primerElemento = totales[0];
let elemento25 = totales[24];

console.log("Primer elemento: " + primerElemento);
console.log("Elemento 25: " + elemento25);
console.log("");

// Inicializar variables para la suma y el conteo
let suma = 0;
let contador = 0;

// Recorrer el vector y sumar los elementos que cumplen la condición
console.log(
  "Elementos que cumplen la condición (mayor que el primero y menor que el elemento 25):"
);
for (let i = 0; i < totales.length; i++) {
  if (totales[i] > primerElemento && totales[i] < elemento25) {
    console.log("Índice " + i + ": " + totales[i]);
    suma += totales[i];
    contador++;
  }
}

console.log("");
console.log("Suma total de los elementos que cumplen la condición: " + suma);
console.log("Total de elementos que fueron sumados: " + contador);
