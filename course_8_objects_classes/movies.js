function createMovies(input) {
  const patterns = [
    /^addMovie (?<name>.+)$/,
    /^(?<name>.+) directedBy (?<director>.+)$/,
    /^(?<movie>.+) onDate (?<date>.+)$/
  ];

  const movies = {};

  for (const el of input) {
    if (patterns[0].test(el)) {
      const match = el.match(patterns[0]);
      const name = match.groups.name

      movies[name] = { name }
    } else if (patterns[1].test(el)) {
      const match = el.match(patterns[1])
      const name = match.groups.name
      const director = match.groups.director
      if (movies.hasOwnProperty(name)) {
        movies[name]["director"] = director;
      }
    } else if (patterns[2].test(el)){
      const match = el.match(patterns[2]);
      const movie = match.groups.movie
      const date = match.groups.date
      if (movies.hasOwnProperty(movie)) {
        movies[movie].date = date
      }
    }
  }
  for (movie of Object.values(movies)) {
    if (movie.hasOwnProperty('director') && movie.hasOwnProperty('date')){
      console.log(JSON.stringify(movie));
    }
  }
}

createMovies([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
])

createMovies([
'addMovie The Avengers',
'addMovie Superman',
'The Avengers directedBy Anthony Russo',
'The Avengers onDate 30.07.2010',
'Captain America onDate 30.07.2010',
'Captain America directedBy Joe Russo'
])
