'use strict';

/*
    Необходимо поменять местави ключи и значения в следующем Map 

*/

let wetherMap = new Map([
  ['London', 10],
  ['Moscow', 7],
  ['Paris', 14]
]);

 wetherMap = new Map([...wetherMap].map(el => el.reverse()))
 console.log(wetherMap);

