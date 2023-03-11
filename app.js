'use strict';

/*
    Упражнение - таймер пиццы

    Сделать таймер пиццы (функцию, принимающую время)б
    который будет выводить в консоль секунды, оставшиеся до готовнисти пиццы и сообщение по готовнисти
    00:04
    00:03
    00:02
    00:01
    Готово!!!


*/



function timerPizza(ms) {
    const end = new Date().getTime() + ms;
    const interval = setInterval(() => {
        console.log(
            new Intl.DateTimeFormat('ru-RU',{
                minute: 'numeric',
                second: 'numeric'
            }).format(end + 100 - new Date())
        );
    }, 1000);

    setTimeout(() => {
        clearInterval(interval)
        console.log('Pizza is ready!!');
    }, ms)
}

timerPizza(5000)

