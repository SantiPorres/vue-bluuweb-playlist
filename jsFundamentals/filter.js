const obtenerPokemones = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await response.json()
      const arrayFiltrado = data.results.filter(poke => poke.name !== 'bulbasaur')
      console.log(arrayFiltrado)
    } catch (error) {
      console.log(error)
    }
  }
  
  obtenerPokemones()