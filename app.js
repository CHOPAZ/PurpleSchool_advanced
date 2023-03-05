'use strict';

/*
    Структура Map  

*/

const wetherMap = new Map();
wetherMap.set('London', '10');
wetherMap.set('Moscow', '7');

/* Chaining set */
wetherMap
  .set('Surgut', '-5')
  .set('Novosib', '5');

console.log(wetherMap.get('Moscow'));// 7
console.log(wetherMap.has('Moscow')); //true - проверяет есть литакой ключ

wetherMap.delete('London');
wetherMap.clear();

wetherMap
  .set(1, 5) // 1- ключ, 5 - значение
  .set(true, 'yes')
  .set(true, 'yes!')// Перезапишет ключ выше
  .set(false, 'no')
  .set([1, 2, 3], 'array')
  .set({a: 1}, {b: 1});

console.log(wetherMap.size);// 5

console.log(wetherMap.get([1, 2, 3])); // undefined
console.log(wetherMap.get({a : 1})); // undefined

/* Это происходит потому, что в рамках работы Map не сипользует значение наших объектов, потомучто массив и объект это не примитивные тип данных и они хранятся по какомут то адрессу в памяти - они фактически используют этот адресс памяти как ключ. Как получить этот адресс памяти?  */
const arr = [1, 2, 3];
wetherMap.set(arr, 'array')
console.log(wetherMap.get(arr)); // array



console.log(wetherMap);