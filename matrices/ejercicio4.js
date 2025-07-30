/**
 * Las notas de una clase se tienen almacenadas en una matriz llamada clase de 30 x 5
 * elementos (30 alumnos x 5 asignaturas), realizar un algoritmo que permita calcular lo
 * siguiente:
 * a. El promedio de cada estudiante.
 * b. El promedio de la clase en cada asignatura.
 * c. El promedio general de la clase.
 */

// Generar matriz clase de 30 estudiantes x 5 asignaturas con notas aleatorias de 60 a 100
let clase = [];

for (let i = 0; i < 30; i++) {
  clase[i] = [];
  for (let j = 0; j < 5; j++) {
    clase[i][j] = Math.floor(Math.random() * 41) + 60; // Nota entre 60 y 100
  }
}

console.table(clase)

// a. Promedio de cada estudiante
let promediosEstudiantes = [];

for (let i = 0; i < 30; i++) {
  let suma = 0;
  for (let j = 0; j < 5; j++) {
    suma += clase[i][j];
  }
  promediosEstudiantes[i] = suma / 5;
}

// Mostrar promedios de estudiantes
console.log("Promedio de cada estudiante:");
for (let i = 0; i < promediosEstudiantes.length; i++) {
  console.log(`Estudiante ${i + 1}: ${promediosEstudiantes[i].toFixed(2)}`);
}

// b. Promedio de la clase en cada asignatura
let promediosAsignaturas = [];

for (let j = 0; j < 5; j++) {
  let suma = 0;
  for (let i = 0; i < 30; i++) {
    suma += clase[i][j];
  }
  promediosAsignaturas[j] = suma / 30;
}

// Mostrar promedios por asignatura
console.log("\nPromedio de la clase en cada asignatura:");
for (let j = 0; j < promediosAsignaturas.length; j++) {
  console.log(`Asignatura ${j + 1}: ${promediosAsignaturas[j].toFixed(2)}`);
}

// c. Promedio general de la clase
let sumaTotal = 0;

for (let i = 0; i < promediosEstudiantes.length; i++) {
  sumaTotal += promediosEstudiantes[i];
}

let promedioGeneral = sumaTotal / 30;

console.log(`\nPromedio general de la clase: ${promedioGeneral.toFixed(2)}`);
