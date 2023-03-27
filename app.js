'use strict';

/*
  Async await
*/

function getProducts() {
  fetch('https://dummyjson.com/products')
    .then((respons) => respons.json())
    .then((data) => console.log(data));
}
getProducts();
console.log('end');

/* Перепишем на async await

await говорит что: -Подождать пока отработает fetch запрос, и положить его в res
*/

/* Функция по умолчанию возращает промис */
async function getProducts1() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  console.log(data);
}

getProducts1();

/* Несколько запросов */

async function getProducts2() {
  const productsResponce = await fetch('https://dummyjson.com/products');
  const { products } = await productsResponce.json();
  console.log(products);

  const productResponce = await fetch(
    'https://dummyjson.com/products/' + products[0].id
  );
  const product = await productResponce.json();
  console.log(product);
}

getProducts2();


/* Обработка ошибок через try catch */
