'use strict';

/*
    WeakMap - непопулярны, позволяют классно реализовывать кэш

*/

const map = new WeakMap(); //Weak - слабый не неделя
// map.set(1, 'test')// - ошибка, неправильное использование ключа. 1 - не того типа. Могут иметь только объекты или массив
let a = {a: 1}
console.log(map.set(a, 'test a '));
console.log(map.get(a)); // test
console.log(map.has(a)); // true
console.log(map.delete(a)); // true

/* 
WeakMap  - хранит ключ ровно до того момента когда объект существует ( ссылка на него), как только теряем ссылку на него, он его удаляет
*/

let b = {b: 1}
map.set(a, 'test a ');
map.set(b, 'test b')
console.log(map);

a = null;
console.log(map);// в mapуже не будет ключа a, только b

/*Часттое использование это кэш */

let cashe = new WeakMap();

function getValue(obj) {
  if (!cashe.has(obj)) {
    const res = 1; /* Сложные вычисления например */
    cashe.set(obj, res)
  }
  return cashe.get(obj);
}

const res = getValue(b);
console.log(res); // 1

