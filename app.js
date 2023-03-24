'use strict';

/*
  Как работает асинхронность. Как в EventLoop кладутся promise
  Примры работы Event Loop

  Satack вызовов
  WEB API
  Callback Queue
  Microtask Que - сюда попадают promise
*/

console.log(1); //1

setTimeout(() => {
  console.log(2); //4
}, 0);

Promise.resolve(3).then((res) => console.log(res)); //3

console.log(4); //2

for (let i = 0; i < 10000000000000; i++) {}
