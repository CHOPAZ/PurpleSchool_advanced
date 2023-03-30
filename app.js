'use strict';

/*
  Процесс сборки

  app.js     \
  calc.js    -> Сборка -> Транспиляция / полифилы -> Bundle
  Пакеты npm |

  Сборщики:
  WebPack
  Vite
  Parsin
  RollUp

  Будем использовать rollup - у него есть свойство zero config

  1. rollup app.js --file bundle.js --format iife  - приобразует все к iife - файл bundle.js

  2.rollup app.js --file bundle1.js --format cjs - commonjs - bundle2.js

  3. rollup app.js --file bundle2.js --format umd --name "myBundle" - universety bundle - для старых браузеров старые форматы, для новыйх модульности
*/

import { add, sub,} from './calc.js';



console.log(sub(1, 3));
console.log(add(1, 3));



