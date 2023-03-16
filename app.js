'use strict';

/*
  Принципы ООП в классах

  Override методов - позволяет менять свойства или метода в классе, который унаследовался от др класса
*/

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  info() {
    console.log(`${this.title} - ${this.author}`);
  }
}

const book1 = new Book('Lord Of The Rings', 'Tolkein', 20 * 60);
book1.info(); //Lord Of The Rings - Tolkein

class EBook extends Book {
  constructor(title, author, pages) {
    super(title, author);
    this.pages = pages;
  }

  /* У нас будет тоже метод info, что бы перезаписать исходный метод info. В этом заключается метод Override */
  info() {
    console.log(`${this.title} - ${this.author} - ${this.pages}`);
  }
}

const book2 = new EBook('Lord Of The Rings', 'Tolkein', 100);
book2.info()
