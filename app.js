'use strict';

/*
  Принципы Solid - нужны для корректного проектирования системы
  Solid - принципы, которые лежат в основае дизайна построения приложения в ООП. Как хорошо и првильно простроить приложение в ООП. Относятся больше к дизайну и архетектуре приложения, чем к фундаментальным вещам

  Принципы SOLID:
  1. S: Single Responsibility Principle (Принцип единой ответственности). - Класс должен быть ответственен лишь за что-то одно


*/

class Character {
  #invebtory = [];
  #health = 10;

  pickItem() {
    this.#invebtory.push(item);
  }

  reciveDamage(damage) {
    this.#health -= damage
  }

  saveCharacter() {
    localStorage.setItem('char', this)
  }

  loadCaracter() {
    //....
  }
}

/* В классе Character происходит нарушения принципа единой отпетственности
  Наш Character не должен инкапсулировать логику с базой данных
*/

/* Правильный класс */
 
/* Класс работы с базой данных */
class DB {
  save(item) {
    localStorage.setItem('char', item)
  }

  load() {
    //....
  }
}

/* класс Character */
class Character1 {
  #invebtory = [];
  #health = 10;

  pickItem() {
    this.#invebtory.push(item);
  }

  reciveDamage(damage) {
    this.#health -= damage
  }
}