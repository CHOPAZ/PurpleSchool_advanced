"use strict";

/*
  Упражнение - класс пользователя

  Реализовать класс пользователя, со свойствами
  - логин
  - пароль
  Причем пароль при установке должен переворачиваться и в таком виде храниться.
  Пароль и логин после создания изменить нельзя. Так же у класса добавить методы
  - Смены пароля ( передаем старый и новый пароль)
  - Сверки пароля
*/

class User {
  #login;
  #_password;
  constructor(login, password) {
    this.#login = login;
    // (this.#password = password.split("").reverse().join(""));
    this.#password = password;
  }

  set #password(pass) {
    // метод установки пароля
    this.#_password = pass.split("").reverse().join("");
  }

  get #password() {
    // метод получения пароля
    return this.#_password.split("").reverse().join("");
  }

  get login() {
    //получение логина
    return this.#login;
  }

  checkPassword(pass) {
    return this.#password === pass;
  }

  changePassword(oldPass, newPass) {
    if (!this.checkPassword(oldPass)) {
      return false;
    }
    this.#password = newPass;
    return true;
  }
}

const user = new User("agent2711", "123456");
console.log(user);// {#login: 'agent2711', #_password: '654321'}
console.log(user.login);
// user.login = 'sdf@s.ru' // неможем поменять логин
console.log(user.checkPassword('123')); //false - проверка не прошла, пароль не правильный
console.log(user.checkPassword('123456'))//true - проверка прошла успешно
console.log(user.changePassword('123456', '7890')); //true - пароль изменен
console.log(user); // {#login: 'agent2711', #_password: '0987'}
