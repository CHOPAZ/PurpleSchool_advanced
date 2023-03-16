'use strict';

/*
  Принципы ООП в классах

  Наследование. Через construction function
*/

/* Как бы делали реализацию книг без наследования, код повторяетяс DRY */
const Book = function (title, author) {
  this.title = title;
  this.author = author;
};

Book.prototype.buy = function () {
  console.log('Buy');
};

const AudioBook = function (title, author, lenMin) {
  this.title = title;
  this.author = author;
  this.lenMin = lenMin;
};

AudioBook.prototype.log = function () {
  console.log(`${this.name} - ${this.lenMin}`);
};

/* Переиспользование класса - еще не наследование, не все будет работать */

const Book1 = function (title, author) {
  this.title = title;
  this.author = author;
};

Book1.prototype.buy = function () {
  console.log('Buy');
};

const AudioBook1 = function (title, author, lenMin) {
  /* Если просто вызовем Book(title,author), то this будет undefined, поэтому через call передаем контекс AudioBook1 */
  Book1.call(this, title, author);
  this.lenMin = lenMin;
};

/* Полноценное связывание контекста 
  Именно в такой последовательности. Создаем пустой объект через Object.create, и потом его дополняем контруктором и методами
*/
AudioBook1.prototype = Object.create(Book1.prototype);
AudioBook1.prototype.constructor = AudioBook1;
AudioBook1.prototype.log = function () {
  console.log(`${this.title} - ${this.lenMin}`);
};

const book = new AudioBook1('Lord Of The Rings', 'Tolkein', 20 * 60);

book.log(); // Lord Of The Rings - 1200
book.buy(); //Buy

console.log(book);
console.log(book instanceof AudioBook1); // true
console.log(book instanceof Book1); // true
