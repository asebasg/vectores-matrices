/**
 * Cargar 2 vectores, uno con los códigos de los estudiantes que perdieron C, el segundo con los
 * códigos de los estudiantes que perdieron Java. Se pide crear otro arreglo formado por los
 * códigos de los estudiantes que perdieron ambas materias. Mostrar el arreglo resultante.
 */

// Crear dos vectores con códigos de estudiantes que perdieron C y Java
let perdieronC = [101, 102, 103, 104, 105, 106];
let perdieronJava = [104, 105, 107, 108, 109];

// Crear un arreglo con los códigos de estudiantes que perdieron ambas materias
let perdieronAmbas = perdieronC.filter((codigo) =>
  perdieronJava.includes(codigo)
);

// Mostrar el arreglo resultante
console.log("Estudiantes que perdieron ambas materias (C y Java):");
console.log(perdieronAmbas);
