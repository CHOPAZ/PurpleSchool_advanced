'use strict';

/*
  Цепочка promise
*/

fetch('https://dummyjson.com/products')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then(({ products }) => {
    console.log(products);
    return fetch('https://dummyjson.com/products/' + products[0].id); // послали второй запрос на продукт 1
  })
  .then((response) => response.json()) // обрабатываем его
  .then((data) => {
    console.log(data);
  });
