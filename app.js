'use strict';

/*
   Упражнение - корзина товара

   Реализовать на функциях и прототипах корзину товаров с методами
   - Добавить товар
   - Увеличить число товаров
   - Уменьшить число товаров ( удалить если их 0)
*/


const product = {
    id: 1,
    name: 'Bread',
    count: 1
}

const Basket = function() {
    this.products = [];
}

Basket.prototype.addProduct = function(product) {
    if (this.products.find(product => product.id === product.id)) {
        return
    }
    this.products.push(product);
}

Basket.prototype.increaseAmount = function(id) {
    this.products = this.products.map(product => {
        if (product.id === id) {
            product.count++
            return product
        }
        return product
    })
}

Basket.prototype.decreaseAmount = function(id) {
    this.products = this.products
    .map(product => {
        if (product.id === id) {
            product.count--
            return product
        }
        return product
    })
    .filter(product => product.count > 0)
}

const basket = new Basket();
basket.addProduct(product);
basket.increaseAmount(1)
basket.decreaseAmount(1)
basket.decreaseAmount(1)
console.log(basket);