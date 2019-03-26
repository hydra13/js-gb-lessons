'use strict'

//сложение
function sum(a, b) {
    return a + b;
}

//разность
function dif(a, b) {
    return a - b;
}

//умножение
function mul(a, b) {
    return a * b;
}

//деление
function div(a, b) {
    return a / b;
}

function testTask4() {
    let a = Number(prompt('Введите А:').replace(',', '.'));

    if (isNaN(a)) {
        alert('Ошибка. Введено некорректное значение.\nЗавершение выполнения функции тестирования');
        return;
    }
    let b = Number(prompt('Введите В:').replace(',', '.'));
    if (isNaN(b)) {
        alert('Ошибка. Введено некорректное значение.\nЗавершение выполнения функции тестирования');
        return;
    }
    let outMsg = '';
    let oper = prompt('Выберите действие:\n1) Сложение\n2) Разность\n3) Умножение\n4) Деление\nВведите номер выбранного действия:');

    switch (oper) {
        case '1':
            outMsg += `a + b = ${a} + ${b} = ${a + b}`;
            break;
        case '2':
            outMsg += `a - b = ${a} - ${b} = ${a - b}`;
            break;
        case '3':
            outMsg += `a * b = ${a} * ${b} = ${a * b}`;
            break;
        case '4':
            outMsg += `a / b = ${a} / ${b} = ${a / b}`;
            break;
        default:
            outMsg = 'Ошибка. Введено некорректное значение.\nЗавершение выполнения функции тестирования';
            break;
    }

    alert(outMsg);
}