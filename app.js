'use strict';

/*
    Sets

    Что это такое

    Множество - совокупность каких-либо объектов

    множество - тип и структура данных в информатике, которая ялвяется реализацией математического объекта множества

    Данные типы множества позволяют хранить ограниченное число значений определенного типа без определенного порядка
*/

const flights = ['Russia', 'USA', 'London', 'London', 'USA'];
//Уникализировать данные
const setFlights = new Set(flights);
console.log(setFlights); //Set(3) {'Russia', 'USA', 'London'}
console.log(setFlights.size); // 3
console.log(setFlights.has('Russia')); //true
setFlights.add('Paris');
console.log(setFlights); // Set(4) {'Russia', 'USA', 'London', 'Paris'}
// setFlights.delete('London');
// setFlights.clear();
// console.log(setFlights); // Set(0) {size: 0}

for (const flight of setFlights) {
  console.log(flight);
}

console.log([...setFlights]);// ['Russia', 'USA', 'London', 'Paris']

const setObj = new Set([{a: 1}, {b: 2}, {b: 2}]); // Уникализации не будет
console.log(setObj);



/* Через for */

// const makeUniq = (arr) => {
//   const seen = {};
//   const result = [];
//   let j = 0;

//   for(let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     const itemType = typeof item;
//     const key = `${itemType}_${item}`;
//     if (!seen[key]) {
//       seen[key] = 1;
//       result[j] = item;
//     }
//   }
//   return result;
// }


// console.log(makeUniq(flights));
