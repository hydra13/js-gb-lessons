'use strict'

function testTask1() {
    console.log('start');
    let Tc = Number(prompt('Введите температуру в градусах по Цельсию'));
    if (!isNaN(Tc)) {
        let Tf = (9 / 5) * Tc + 32;
        alert('Температура в градусах по Цельсию: ' + Tc +
            '\nТемпература в градусах по Фаренгейту: ' + Tf);
    } else {
        alert('Ошибка. Введено некорректное значение...');
    }
}