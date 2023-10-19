const obtenerPokemones = async() => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await response.json()
      const arrayNombres = data.results.map(poke => poke.name)
      console.log(arrayNombres)
    } catch (error) {
      console.log(error)
    }
  }
  
  obtenerPokemones()