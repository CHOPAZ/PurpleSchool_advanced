'use strict';

/*
   Prototype

/* Функция конструктор User */

const Book = function(title, author) {
    this.title = title
    this.author = author;
    this.idRead = false;
}

Book.prototype.read = function() {
    this.idRead = true;
}

Book.prototype.cover = 'Paper'

const lordOftheRing = new Book('Lord of the ring', "Tolkien");
lordOftheRing.read()
console.log(lordOftheRing.cover);
console.log(lordOftheRing);

/* Как увидеть этот метод в коде */
console.log(lordOftheRing.__proto__);
console.log(lordOftheRing.__proto__ === Book.prototype);//true
console.log(Book.prototype.isPrototypeOf(lordOftheRing));//true
console.log(Book.prototype.isPrototypeOf(Book));//false

/* Важно понимать какое свойство есть у самого объекта, а какое свойство у прототипа */
console.log(lordOftheRing.hasOwnProperty('cover'));//false
console.log(lordOftheRing.hasOwnProperty('title'));//true