'use strict';

/*
  Принципы ООП в классах

  Упражнение - 
  Сделать класс врага со здоровьем и методом получения урона.
  Сделать класс меча, который емеет силу и методу нанесения урона.
  Сделать класс орка, который в 50% случаев не полцучает урон.
*/

/* Класс Врага */
class Enemy {
  // #health;
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

  /* Столкнемся с проблемой получения урона у орка. Просто скопировать мметод получения у Enemy не получится
  Uncaught SyntaxError: Private field '#health' must be declared in an enclosing class (at app.js:52:13)

  Из-за приватного #health. Нужно убрать приватное свойство
  */
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

const enemy = new Enemy(100);
const sword = new Sword(10);
sword.strikeDamage(enemy); //100 - 3 = 97
sword.strikeDamage(enemy); //97 - 3 = 94

const ork = new Ork(100);
sword.strikeDamage(ork);
