fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(res => res.json())
  .then(data1 => {
    // console.log(data.results)
    data1.results.forEach(element => {
      console.log(element.name)
      console.log(element.url)
    });
  })
  .catch(error => console.log(error))


// async & await
const obtenerPokemones = async() => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

obtenerPokemones()