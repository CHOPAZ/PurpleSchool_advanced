'use strict';

/*
  Принципы ООП в классах

  Паттерн Builder и chaining
*/

const arr = [1, 2, 3, 4];
arr
  .map((a) => a * 2)
  .filter((a) => a > 0)
  .find((a) => a < 100);

class Wallet {
  balance = 0;
  add(sum) {
    this.balance += sum;
    return this;
  }

  remove(sum) {
    this.balance -= sum;
    return this;
  }
}

const wallet = new Wallet();
// const res = wallet.add(100).remove(10);// работать не будтет

/* ЧТо бы чейнинг сработал нужно вернуть this */
const res = wallet.add(100).remove(10);
console.log(res); //Wallet {balance: 90}

/* Почему же паттерн называется Builder - исползуется для нескольких последовательных операций */

class Builder {
  house = {};

  addRoof() {
    this.house.roof = 'Roof';
    return this;
  }

  addFloor() {
    this.house.floor = 'Floor';
    return this;
  }
  /* Метод исполнения, который вернут объект house */
  excecute() {
    return this.house;
  }
}

const house = new Builder().addRoof().addFloor().excecute();
console.log(house);
