/**
 * Se tiene un vector con las notas de un grupo de 30 estudiantes. Hallar y mostrar la nota
 * más alta y la más baja, cuántas personas perdieron y la nota promedio del grupo.
 */

// Crear un vector con 30 notas aleatorias entre 0 y 100
let notas = [];
for (let i = 0; i < 30; i++) {
  notas.push(Math.floor(Math.random() * 101));
}

// Mostrar las notas
console.log("Notas del grupo:");
console.log(notas);
console.log("");

// Inicializar variables para la nota más alta, más baja, suma y conteo de perdedores
let notaAlta = notas[0];
let notaBaja = notas[0];
let sumaNotas = 0;
let perdedores = 0;

// Recorrer el vector para calcular los valores requeridos
for (let i = 0; i < notas.length; i++) {
  let nota = notas[i];
  if (nota > notaAlta) {
    notaAlta = nota;
  }
  if (nota < notaBaja) {
    notaBaja = nota;
  }
  if (nota < 60) {
    perdedores++;
  }
  sumaNotas += nota;
}

// Calcular el promedio
let promedio = sumaNotas / notas.length;

// Mostrar resultados
console.log("Nota más alta: " + notaAlta);
console.log("Nota más baja: " + notaBaja);
console.log("Cantidad de personas que perdieron: " + perdedores);
console.log("Nota promedio del grupo: " + promedio.toFixed(2));
