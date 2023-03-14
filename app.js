"use strict";

/*
  Setters and getters - возможность использовать свойства как методы, вызывая их как свойства
  getter - позволяет получить какое-то значение, обращаясь к нему как к свойству.
  setter - позволяет установить какое-то значение. Set должен принимать одно значение то чему должно быть присвоено.
  По сути это некоторое скрытие за собой реализации получения тех или иных данных
*/

const task = {
  title: "Task1",
  dueTo: new Date("2023/01/01"),

  /* Обычным способом. Проверка на истекшее время */
  // isOverdue() {
  //   return this.dueTo < new Date();
  // },

  /* Переделаем на get */
  get isOverdue() {
    return this.dueTo < new Date();
  },

  /* Установим свойство */
  set isOverdue(isOverdueTask) {
    if (!isOverdueTask) {
      this.dueTo = new Date();
    }
  },
};

/* И вызывали бы как: */
// console.log(task.isOverdue()); // true

/* Теперь нужно обратится к нему как к свойству */
console.log(task.isOverdue); //true
task.isOverdue = false;
console.log(task); // поменяется dueTo

/* Теперь рассмотрим на классах */

class Task {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
  }

  get isOverdue() {
    return this.dueDate < new Date();
  }

  /* Сделаем валидацию установки dueDate */

  set dueDate(date) {
    if (date < new Date()) {
      return;
    }
    // this.dueDate = date; // работать не будет, потому что будем пытатся вызывать рекурсивно наш сеттер. call stack будет переполнен. Обычно в классах используются либо приватные свойства либо свойства с нижнем подчеркиванием
    this._dueDate = date;
  }
}

const newTask = new Task("Task2", new Date());
console.log(newTask.isOverdue); // false
console.log((newTask.dueDate = new Date("2024/1/1")));
console.log(newTask);
