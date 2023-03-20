'use strict';

/*
  Promises и fetch.

  Promises - фишка ES6, это контейнер(обертка) для значения, которое вернется в будущем.
  Не нужно использовать callback
  Не нужно использовать события.
  Промис мы можем создавать сами, так и получать из Web-API

  Есть разлычные состояния (жизненный цикл):
  1.Pending - начальное состояние
  2.Settled
  2.1 Fulfilled - либо, все успешно
  2.2 Rejected - либо, ошибка
*/

const res = fetch('https://dummyjson.com/products/1');
console.log(res); //Promise {<pending>} - это контейнер, в который потом будет приходить ответ
