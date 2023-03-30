'use strict';

/*
  Модули commonjs - полное исполнение файла.
  В браузере это работать не будет, нужен bundler для сборки

  Работа в терминале
*/

const { add, sub } = require('./calc.js');

console.log(add(1, 3));
console.log(sub(1, 3));
