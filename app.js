'use strict'

/*
  Object.create
*/

const User = {
  init(email, password) {
    this.email1 = email
    this.password1 = password
  },

  log() {
    console.log('log')
  },
}
const user = Object.create(User)
console.log(user)
console.log(user.__proto__ === User) //true
user.log()

/* На практике это используется не часто, потому что что нам нужно что бы задать у пользователя логин и пароль  */

user.email = 'a@aa.ru'
user.password = '123'
/* Для избежания этого часто используется хак инит */
user.init('bbb@b.ru', '121')

/* Самое важное, что с помощью Object.create() мы создали вручную цепочку прототипов */

const admin = Object.create(user);
console.log(admin);

/* Мы создали админ, в прототипе у него user, в прототипе у пользователя объект с методами log и init, в прототипе объекта сам корневой объект

admin будет доступен метод log, потому что он унаследовался у user
*/
admin.log()
