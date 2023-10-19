// Var permite re declarar una variable, lo cual puede causar problemas
var edad = 10;
var edad = 20;
console.log(edad); // Imprime 20

// Let no permite declarar una variable 2 veces
let estatura = 1.80;
estatura = 1.78;
console.log(estatura); // Imprime 1.78

// Const es para declarar constantes, es decir, no puede cambiar
const num = 1;
console.log(num); // Imprime 1


// Dentro de los condicionales, funciones, etc. las variables y las constantes declaradas dentro, mueren al este terminar
let edad2 = 10 
if (true){
  let edad2 = 20;
  console.log(edad2) // Imprime 20
}
console.log(edad2) // Imprime 10

const edad3 = 10 
if (true){
  const edad3 = 20;
  console.log(edad3) // Imprime 20
}
console.log(edad3) // Imprime 10


// Las const cuando son objetos o arrays, pueden ser modificadas
const persona = {
  nombre: "Juan",
  edad: 20
}
persona.edad = 21
console.log(persona.edad) // Imprime 21 