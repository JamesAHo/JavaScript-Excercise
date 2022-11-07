/*
  Books: Title, Author, ISBN, numCopies
  getAvailability() with statement if === 0 > out of stock || if <10 === low stock otherwise in stock
  sell(numSold) 
  restock(numCopies)
*/

class Books {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }
  // getter 
  get availability() {
    return this.getAvailability();
  }
  // begin methods
  getAvailability() {
    if(this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low in stock";
    }
    return "In stock";
  }

}
