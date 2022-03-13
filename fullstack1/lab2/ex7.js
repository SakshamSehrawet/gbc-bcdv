function findFacts(city) {
    return(city.name + ' has a population of ' + city.population + ' and is located in ' + city.continent)
  }
  
  console.log(findFacts({name:'T',population:100,continent:'NA'}))