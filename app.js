'use strict';

/*
  Принципы Solid - нужны для корректного проектирования системы
  Solid - принципы, которые лежат в основае дизайна построения приложения в ООП. Как хорошо и првильно простроить приложение в ООП. Относятся больше к дизайну и архетектуре приложения, чем к фундаментальным вещам

  Принципы SOLID:
  5. D: Dependency Inversion Principle (Принцип инверсии зависимостей). Модули верхних уровней не должны зависеть от модулей нижних уровней. Оба типа модулей должны зависеть от абстракций.
  Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.


*/

class DB {
  save(item) {
    //save
  }
}
class ToDoList {
  items = [1, 2, 3];
  db = new DB();
  saveToDB() {
    this.db.save(this.items);
  }
}

/* Проблема в том, что теперь ToDoList зависит от DB
  И если мы теперь перейдем например на другуюбазу данных, например MongoDB
  И нам снова прийдется переписывать код, и не сможем сохранять в две базы данных
*/

class MongoDB extends DB {
  //...
}

/* Коректная запись кода. ToDoList1 не зависит от конкретной базы данных*/

class DB1 {
  save(item) {
    console.log(`Saved to DB: ${item}`);
  }
}

class MongoDB1 extends DB1 {
  save(item) {
    console.log(`Saved to Mongo: ${item}`);
  }
}

class ToDoList1 {
  items = [1, 2, 3];
  db;
  constructor(db) {
    this.db = db;
  }

  saveToDB() {
    this.db.save(this.items);
  }
}

const list1 = new ToDoList1(new DB1());
list1.saveToDB(); //Saved to DB: 1,2,3

const list2 = new ToDoList1(new MongoDB1());
list2.saveToDB(); //Saved to Mongo: 1,2,3
