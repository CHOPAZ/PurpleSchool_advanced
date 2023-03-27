'use strict';

/*
  Последовательность выполнения на верхнем уровне
  Например:
  1. Сделать действие
  2. Получить продукты.
  3. Выполнить действие

  Способ: Immediately Invoked Function Expression - IIFE
*/

/* Асинхронные стрелочные функции */

const asyncArrow = async () => {
  const responce = await fetch('https://dummyjson.com/products');
  const data = await responce.json();
  return data;
};

/* Не правильно */
console.log('1');
asyncArrow()
  .then((data) => {
    console.log(data);
  })
  .finally(() => console.log('3'));

/* Правильная запись */
(async () => {
  console.log(1);
  const res = await asyncArrow()
  console.log(res);
  console.log(2);
})();

/* P.S В случае использования try catch нужно перебросить ошибку дальше */

const asyncArrow2 = async () => {
  try {
    //code
  } catch (error) {
    console.error(error);
    throw error;
  }
};
asyncArrow2()
  .then()
  .catch((error) => console.log(error));
