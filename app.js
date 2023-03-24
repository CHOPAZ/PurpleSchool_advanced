'use strict';

/*
  Создание простого Promise

  resolve - в случае успешного выполнения вызывается колбэк
  reject - в случае ошибки вызывается колбэк
  P.s анологично return, но в нужный статус

  Внутри можем писать логику, внешние запросы
*/

const prom = new Promise((resolve, reject) => {
  resolve('Secces'); // вызывается resolve, и промис прекращает свою работу
});

/* Как нам теперь его использовать */

prom.then((data) => console.log(data));

/* Аналогично если хотим сделать reject по какой то логике
  Если мы оставим так как ниже то будет ошибка Uncaught (in promise) Error, потому что нет обработки ошибки
*/

const prom1 = new Promise((resolve, reject) => {
  if (new Date() < new Date('01/01/2024')) {
    reject('Error'); //Uncaught (in promise) Error
  }
  resolve('Secces'); // вызывается resolve, и промис прекращает свою работу
});

prom1.then((data) => console.log(data));

/* Теперь так же как выше, только с обработчиком ошибки */

const prom2 = new Promise((resolve, reject) => {
  if (new Date() < new Date('01/01/2024')) {
    reject(new Error('Error'));
  }
  resolve('Secces');
});

prom2
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

/* Но пока промис не делает ничего такого длительно.
  Правильнее использовать промисы для оборачивания длительных операций с колбэками.

  Такое ручное создание промисов больше подойдет для создания удобного взаимодейсвия с calback api 

  Напримере таймаута
*/

function timeout(sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
}

timeout(1).then(() => console.log(1));

/* Таким образом setTimeout  который вызывался некрасиво, обернули в промис, и как только наш таймоут вернутся вернутся и промис. И с ожиданием можно взаимодействовать очень просто  */

timeout(1).then(() => {
  console.log(1);
  return timeout(1).then(() => console.log(1));
});

/*  */
