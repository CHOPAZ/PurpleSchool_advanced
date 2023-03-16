'use strict';

/*
  Принципы ООП в классах

  Полиморфизм.

  Виды полиморфизма:
  1. Ad-hock полиморфизм - возможность по разному исполнять функцию от типов данных:
  '2' + '4' = 24 - сконкатенируются
  2 + 4 = 6 - сложатся


  2. Параметрический полиморфизм - когда мы можем выполнять одну и туже функцию но с разным типом аргументов:
  console.log(1)
  console.log('1)
  console.log({a: 1})


  3. Полиморфизм подтипов <---- ООП
*/

/*  */

/* Класс Врага */
class Enemy {
  health;
  constructor(health) {
    this.health = health;
  }

  reciveDamage(damage) {
    if (this.health === 0) {
      return console.log('Enemy dead');
    }
    console.log(`${this.health} - ${damage} = ${this.health - damage}`);
    this.health -= damage;
  }
}

/* Класс Меча */

class Sword {
  #damage;
  constructor(damage) {
    this.#damage = damage;
  }
  /* Использование полиморфизма */
  strikeDamage(enemy) {
    enemy.reciveDamage(this.#damage);
  }
}

/* Класс Орка. Частный случай врага */

class Ork extends Enemy {
  constructor(health) {
    super(health);
  }

  reciveDamage(damage) {
    if (this.health == 0) {
      return console.log('Ork dead');
    }
    if (Math.random() > 0.5) {
      console.log(`${this.health} - ${damage} = ${this.health - damage}`);
      this.health -= damage;
    }
  }
}

class Troll extends Enemy {}

const enemy = new Enemy(100);
const sword = new Sword(10);
const ork = new Ork(100);
const troll = new Troll(20);
// sword.strikeDamage(enemy); //100 - 3 = 97
// sword.strikeDamage(enemy); //97 - 3 = 94

// sword.strikeDamage(ork);
sword.strikeDamage(troll);
