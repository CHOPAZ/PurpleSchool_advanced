'use strict';

/*
  ES6 модули.

  <script src="./app.js" type="module"></script>

  Переменные ограничены модулем.
  Режим strict включен по умолчанию
  this - в модуле undefined, в обычном скрипте window
  Использование import/export
  Загрузка асинкронная

  Особенности
  1. Синхронный импорт модулей
  2.Всплытие import
  3.Возможность убирать не используемый код


  Парсинг App.js -> асинхронная закрузка calc.js -> подключение import к calc.js -> исполнение calc.js -> исполнение app.js
  

*/

import { add, sub } from './calc.js';

console.log('1'); // выведится вторым после test из calc.js

console.log(sub(1, 3));
