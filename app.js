'use strict';

/*
    Итерации по Map  

*/

const wetherMap = new Map([
  ['London', 10],
  ['Moscow', 7],
  ['Paris', 14]
]);

for (const [key, value] of wetherMap) {
  
}

//Конвертация Map обратно в массыви

console.log([...wetherMap]); // (3) [Array(2), Array(2), Array(2)];
console.log(wetherMap.keys()); // MapIterator {'London', 'Moscow', 'Paris'}
console.log(wetherMap.values()); // MapIterator {10, 7, 14}

console.log([...wetherMap.keys()]); //  ['London', 'Moscow', 'Paris']
console.log([...wetherMap.values()]); // [10, 7, 14]