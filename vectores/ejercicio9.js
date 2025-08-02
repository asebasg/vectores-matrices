/**
 * Crear 2 vectores de "N" posiciones cada uno. Con el resultado de la multiplicación de
 * elemento por elemento entre cada vector, formar otro arreglo; muestre posteriormente, los
 * elementos del vector resultante.
 */

// Definir el tamaño N de los vectores
const N = 10;

// Crear dos vectores con N elementos aleatorios entre 1 y 20
let vector1 = [];
let vector2 = [];
for (let i = 0; i < N; i++) {
    vector1.push(Math.floor(Math.random() * 20) + 1);
    vector2.push(Math.floor(Math.random() * 20) + 1);
}

// Mostrar los vectores originales
console.log("Vector 1:");
console.log(vector1);
console.log("Vector 2:");
console.log(vector2);

// Crear el vector resultante con la multiplicación elemento por elemento
let vectorResultante = [];
for (let i = 0; i < N; i++) {
    vectorResultante.push(vector1[i] * vector2[i]);
}

// Mostrar el vector resultante
console.log("Vector resultante (multiplicación elemento por elemento):");
console.log(vectorResultante);

