'use strict';

/*
  Принципы ООП в классах

  Наследование. в ES6
*/

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  buy() {
    console.log('Buy');
  }
}

/* extends - расширять. С помощью него мы связали прототип Book c AudioBook 
 И еще необходимо прокинуть конструктор через super
*/
class AudioBook extends Book {
  constructor(title, author, lenMin) {
    super(title, author);
    this.lenMin = lenMin;
  }

  log() {
    console.log(`${this.title} - ${this.lenMin}`);
  }
}

const book = new AudioBook('Lord Of The Rings', 'Tolkein', 20 * 60);
book.log();
book.buy();
