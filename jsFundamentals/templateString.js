// Esto es basicamente un formateo
const numero = (num1, num2) => {
    return `El numero es: ${num1 + num2}`
  }
  const resultado = numero(10, 2)
  console.log(resultado) // Imprime El numero es: 12 
  
  // Codigo reducido
  const numero2 = (num1, num2) => 
    `El numero es: ${num1 + num2}`
  console.log(numero2(7, 2)) // Imprime El numero es: 9