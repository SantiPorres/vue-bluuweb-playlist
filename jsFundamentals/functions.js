// funciones tradicionales
function sumar () {
    console.log(10); // Imprime 10
  }
  sumar()
  
  
  // funciones de flecha
  const sumar2 = () => {
    console.log(20); // Imprime 20
  }
  sumar2()
  
  
  // si la funcion es simple, podemos ahorrar codigo con las funciones de flecha del siguiente modo
  const mensaje = (num1, num2) => (num1 + num2)
  console.log(mensaje(1, 2)) // Imprime 3
  
  // otro ejemplo
  const mensaje2 = (nombre) => 
    'hola, soy ' + nombre
  
  console.log(mensaje2('Santiago')) // Imprime hola, soy Santiago
  
  
  // para definir un valor por defecto en caso de que no se mande un parametro seria del siguiente modo
  const suma = (num1 = 1, num2 = 2) => 
    num1 + num2
  console.log(suma(23, 12)) // Imprime 35
  console.log(suma()) // Imprime 3