'use strict';

/*
  Асинхронные методы
*/

class ProductRepository {
  async getProduct() {
    const responce = await fetch('https://dummyjson.com/products');
    console.log(await responce.json());
  }
}

const prd = new ProductRepository();
prd.getProduct();



/* Асинхронные стрелочные функции */

const asyncArrow = async () => {
  const responce = await fetch('https://dummyjson.com/products');
  console.log(await responce.json());
};
asyncArrow();

