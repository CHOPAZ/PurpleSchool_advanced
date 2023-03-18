'use strict';

/*
  Принципы Solid - нужны для корректного проектирования системы
  Solid - принципы, которые лежат в основае дизайна построения приложения в ООП. Как хорошо и првильно простроить приложение в ООП. Относятся больше к дизайну и архетектуре приложения, чем к фундаментальным вещам

  Принципы SOLID:
  2. O: Open-Closed Principle (Принцип открытости-закрытости). Должны быть открыты для расширения, но не для модификации. - Когда хотим расширить поведение нашего класса, мы можем сделать, но не путем изменения класса внутри


*/

/* Как не надо делать */

class Treasure { // сокровище

}

class Coin extends Treasure { // монета

}

class Crystal extends Treasure { // кристал

}

/* Представим что хотим реализовать класс инвентаря, при добавлении монетки или кристала добавляет себе в каунтер текущих очков, которые заработали
как неправильно делать:
*/

class Invetory {
  #score;
  pick(treasure) {
    if (treasure instanceof Coin) {
      this.#score += 1
    }

    if (treasure instanceof Crystal) {
      this.#score += 10
    }
  }
}

/* В чем же неправильность
  Если у нас появился в игре например  класс бриллиант.
  В рамках этого бриллианта мы должны добавить 20 очков.
  И теперь надо править код в инвентаре
*/

class Brilliant extends Treasure {

}






/* Как от этого избавитсям */

class Treasure1 { // сокровище
  value = 0;
}

class Coin1 extends Treasure { // монета
  value = 1;
}

class Crystal1 extends Treasure { // кристал
  value = 10;
}

class Brilliant1 extends Treasure {
  value = 20;
}

/* И когда мы берем какоето сокровище мы могли бы просто увеличивать score на определенное value */

class Invetory1 {
  #score;
  pick(treasure) {
    this.#score += treasure.value
  }
}