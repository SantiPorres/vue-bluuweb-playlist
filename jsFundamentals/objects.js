const mascota = {
    nombre: 'Rafaela',
    edad: 5,
    alive: true
  }
  console.log(mascota) // Imprime todo el objeto
  console.log(mascota.nombre) // Imprime el nombre
  console.log(mascota.edad) // Imprime la edad
  console.log(mascota.alive) // Imprime si la mascota esta viva o no
  
  // Asi se le agrega un atributo al objeto
  mascota.id = 1
  
  console.log(mascota.id); // Imprime 1
  
  
  // Agregar un atributo que es un array
  mascota.patas = [
    'pata trasera izquierda',
    'pata trasera derecha',
    'pata delantera izquierda',
    'pata delantera derecha',
  ]
  
  console.log(mascota.patas); // Imprime el array
  console.log(mascota.patas[1]); // Imprime pata trasera derecha