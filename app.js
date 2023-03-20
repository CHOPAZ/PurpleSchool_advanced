'use strict';

/*
  Упражнение - Расчет цены

  Получить среднюю цены 30 товаров из API
  https://dummyjson.com/products/
*/

const request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products/');
request.send();

request.addEventListener('load', function () {
  const { products } = JSON.parse(this.responseText);
  console.log(products);
  const sum = products.reduce((acc, product) => acc += product.price, 0);
  console.log(sum / products.length);
});
