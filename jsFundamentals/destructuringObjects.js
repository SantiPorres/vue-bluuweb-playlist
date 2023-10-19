const mascota = {
    name: 'Kratos',
    edad: 2,
    alive: true
  }
  
  // Destructuring object
  const {edad, name, alive} = mascota
  console.log(name) // Imprime Kratos
  console.log(edad) // Imprime 2
  console.log(alive) // Imprime true
  
  
  const web = {
    nombre: 'freecodecamp',
    links: {
      enlace: 'https://www.freecodecamp.org'
    },
    redesSociales: {
      youtube: {
        enlace: 'youtube.com/freecodecamp',
        nombre: 'freecodecamp.org'
      },
      facebook: {
        enlace: 'facebook.com/freecodecamp',
        nombre: 'freecodecamp.org'
      }
    }
  }
  
  const {enlace, nombre} = web.redesSociales.youtube
  console.log(enlace) // Imprime youtube.com/freecodecamp
  console.log(nombre) // Imprime freecodecamp.org