"use strict";

/*
  Static. Статичные свойства
*/

/* Как они записываются и работают под капотом */

/* Как раньше можно было сделать */

class Test {
  hello() {
    console.log("Hello");
  }
}

const test = new Test();
test.hello();

/* Без инициализации конкретного инстанса, а просто как грубог оворя нейм спейс, в котором находится этот способ или свойство. Т.е мы не создаем const test = new Test(); */

class Test1 {
  static hello() {
    console.log("Hello");
  }
}

Test1.hello()

/* Как работает под капотом */

const Test2 = function() {

}

Test2.hello = function() {
  console.log('Hello');
}


Test2.hello()

/* При этом могут быть не только статичными методы, но и свойства */

class Test3 {
  static a = 1;
  static hello() {
    console.log("Hello");
  }
}

console.log(Test3.a);

/* Самое интересное что могут быть статичные блоки, которые позволяют улучшить инициализацию статичных свойст */

class Test4 {
  static a = 1;
  static hello() {
    console.log("Hello");
  }
  static {
    let b = 5
    this.a = 5
  }
}
console.log(Test4.a);

/* Когда это можно использовать
  Добавить набор методов, свойст, без необходимости напрямую создания его инстанса
*/