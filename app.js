'use strict';

/*
  Принципы Solid - нужны для корректного проектирования системы
  Solid - принципы, которые лежат в основае дизайна построения приложения в ООП. Как хорошо и првильно простроить приложение в ООП. Относятся больше к дизайну и архетектуре приложения, чем к фундаментальным вещам

  Принципы SOLID:
  3. L: Liskov Substitution Principle (Принцип подстановки Барбары Лисков).  Классы-наследники могли бы использоваться вместо родительских классов, от которых они образованы, не нарушая работу программы.



*/

class User {
  role = 'user';

  getRole() {
    return this.role;
  }
}

/* Функция которая логирует нашу роль в консоль отладки  */
function logRole(user) {
  console.log('Role: ' + user.getRole().toUpperCase());
}

logRole(new User()); //Role: USER

/* Расширяем приложение и поялвяется класс админа, */

class Admin extends User {
  role = ['user', 'admin'];
}

// logRole(new Admin()); // будет ошибка user.getRole(...).toUpperCase is not a function - потому что role у нас массив и не может преобразован в toUpperCase()

/* Как улутшить
  Если мы хотим что бы у админа остался role = [], то ему надо добавить метод возвращающий строку
*/

class Admin1 extends User {
  role = ['user', 'admin'];

  getRole() {
    return this.role.join(', ');
  }
}
logRole(new Admin1()); // Role: USER, ADMIN


/* Лучше сделать role закрытыми */
