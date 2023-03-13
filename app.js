'use strict';

/*
   Классы - скрывает под собой реализацию прототипов и функцию конструктор
*/

class BookClass {
    isRead = false;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    read() {
        this.isRead = true;
    }
}

const lordOfRings = new BookClass('Lord', 'Tolkin');
console.log(lordOfRings);
console.log(lordOfRings instanceof BookClass); // true
console.log(lordOfRings.__proto__);

lordOfRings.read();
console.log(lordOfRings);

/* Особенности классов. Опровергает что это синтаксический сахар
    1. Классы не поднимаются на верх как функции
    2. Класс как и функции могут быть переданы и возвращены из функций
    3. Тело класса всегда используется в strict режиме
*/





