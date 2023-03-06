'use strict';

/*
    Быстрое создание Map  

*/

// Альтернативный путь: В первом массиве мы перечисляем записи мапы, а во втором через запятую ключ и значение

const wetherMap = new Map([
  ['London', '10'],
  ['Moscow', '7']
]);

console.log(wetherMap); // Map(2) {'London' => '10', 'Moscow' => '7'}

/* Созздание из объекта
  Хотим преобразовать наши объекты. Можно через Object.entries
*/

const wetherObj = {
  london: 10,
  moscow: 7,
  paris: 14
}

console.log(Object.entries(wetherObj));// - это свойство можно использовать для конвертации объекта в Map 
const wetherMap2 = new Map(Object.entries(wetherObj));
console.log(wetherMap2); // Map(3) {'london' => 10, 'moscow' => 7, 'paris' => 14}