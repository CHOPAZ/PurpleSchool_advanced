'use strict';

/*
  Другие комбинации
*/

async function getAllProducts() {
  const responce = await fetch('https://dummyjson.com/products/');
  return responce.json();
}

async function getProduct(id) {
  const responce = await fetch('https://dummyjson.com/products/' + id);
  return responce.json();
}

async function getProductError(id) {
  const responce = await fetch('https://dummyjsons.com/products/' + id);
  return responce.json();
}

async function main() {
  const res1 = await Promise.all([getProduct(1), getProduct(2)]); // вернет если все запросы обработаны успешно. Внутри массива будут именно объекты элементов, которые необходимы
  console.log(res1);
  const res2 = await Promise.allSettled([getProduct(1), getProductError(2)]); // вернет в любом случае, даже если один упадет. Внутри массива будут лежать объекты, которые имеют статус и велью с нашими одбъектами элементов. Получается дополнительная вложенность
  console.log(res2);
  const res3 = await Promise.race([getProduct(1), getProduct(2)]); // вернет первым самый быстрый
  console.log(res3);
}

main();
