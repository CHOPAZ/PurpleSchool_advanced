'use strict';

/*
  Параллельное выполнение
*/

/* Проблематика.
  Получение продуктов происходит друг за другом, затрачивает много времени 
*/

async function getAllProducts() {
  const responce = await fetch('https://dummyjson.com/products/');
  return responce.json();
}

async function getProduct(id) {
  const responce = await fetch('https://dummyjson.com/products/' + id);
  return responce.json();
}

async function main() {
  const { products } = await getAllProducts();
  for (const product of products) {
    const res = await getProduct(product.id);
    console.log(res);
  }
}

// main();

/* Решение проблематики через Promise.all()
  Этот метод принимает массив промисов, который мы хотим запустить параллельно.
  Вернет промис успешным, когда все промисы внутри вернутся успешно, но если один упадет , то упадет все 

  Получение продуктов происходит параллельно



*/

async function getAllProducts1() {
  const responce = await fetch('https://dummyjson.com/products/');
  return responce.json();
}

async function getProduct1(id) {
  const responce = await fetch('https://dummyjson.com/products/' + id);
  return responce.json();
}

async function main1() {
  const { products } = await getAllProducts1();
  const res = await Promise.all([
    getProduct1(1),
    getProduct1(2),
    getProduct1(3),
  ]);
  console.log(res);
  // for (const product of products) {
  //   const res = await getProduct1(product.id);
  //   console.log(res);
  // }
}

// main1();


/* Promise.all() можно использовать когда необходимо получить множество элементов сразу и они могут быть запараллелены
*/



/*  */

async function getAllProducts2() {
  const responce = await fetch('https://dummyjson.com/products/');
  return responce.json();
}

async function getProduct2(id) {
  const responce = await fetch('https://dummyjson.com/products/' + id);
  return responce.json();
}

async function main2() {
  const { products } = await getAllProducts2();
  const res = await Promise.all(products.map(product => getProduct2(product.id)));
  console.log(res);
}

main2()