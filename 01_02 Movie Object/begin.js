/*
  WRITE YOUR SOLUTION HERE
*/
// function Movie(title, director, genre, releaseYear, rating) {
//   this.title = title;
//   this.director = director;
//   this.genre = genre;
//   this.releaseYear = releaseYear;
//   this.rating = rating;
// }
// Movie.prototype.getOverview = function() {
//   return ` This Movie${this.title} directed by ${this.director} was released 
//   in ${this.releaseYear}. It received a rating of ${this.rating}`
// }

// Using class constructor
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
  getOverview() {
    return ` This Movie${this.title} directed by ${this.director} was released 
      in ${this.releaseYear}. It received a rating of ${this.rating}`
  }
}

const Minions = new Movie("James the Great", "Jenny Nga", "Action", 2022, 10)
console.log(Minions)
console.log(Minions.getOverview())