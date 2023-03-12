'use strict';

/*
    Оператор new
    constructor function

    Когда мы пишем new у нас происходят несколько шаго:

    1. Создается пустой объект
    2. Вызывается функция конструктор User = function(email, password) {}
    3.  this.email = email -  email: "a@a.ru"
    4. Созданный объект связывается с prototype
    5. Возвращается объект автоматически
*/

/* Функция конструктор User */

const User = function(email, password) {
    this.email = email;
    this.password = password
}

const user1 = new User('a@a.ru', '123')
const user2 = new User('b@b.ru', '1233')

console.log(user1);
console.log(user2);

/* Сравнить что User2 является инстанс этого пользователя */

console.log(user2 instanceof User); // true