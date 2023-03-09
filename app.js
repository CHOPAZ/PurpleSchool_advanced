'use strict';

/*
    Сделать функцию, которая принимает пользователя и проверяет, есть ли у него сегодня день рождения или нет

*/

const user =  {
	name: 'Vasia',
	birthday: '03/09/2023'
};

function getBirthday(usr) {
    const birthdayDate = new Date(usr.birthday);
    const now = new Date();
    if (birthdayDate.getMonth() !== now.getMonth()) {
        return false
    }
    if (birthdayDate.getDate() !== now.getDate()) {
        return false
    }
    return true
}

console.log(getBirthday(user));
