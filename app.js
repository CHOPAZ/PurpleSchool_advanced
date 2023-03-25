'use strict';

/*
  Статические методы Promise

  Promise.resolve() - не  создает новый конструктор промисов, а мнговенно вызываенм resolve нашего промиса 
*/

Promise.resolve('Success').then((data) => console.log(data)); //получили мнгновенный ответ Success

/* Сравним как будут отрабатывать промисы с течением времени */

const prom = new Promise((resolve) => {
  console.log('Constructor promise');

  setTimeout(() => {
    resolve('Timer');
  }, 1000);
});

prom.then((data) => console.log(data));

Promise.resolve('Instant').then((data) => console.log(data));

Promise.reject(new Error('Error')).catch((error) => console.error(error))

/* Вывод будет следующим:
  Constructor promise
  Success
  Instant
  Timer
  Error
*/