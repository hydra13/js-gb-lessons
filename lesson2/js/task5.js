'use strict'

function mathOperation(arg1, arg2, operation) {
    // проверяем аргументы на соответствие ожидаемым типам
    if (isNaN(arg1)) {
        alert('Ошибка! Введено некорректное название первого аргумента');
        return -1;
    }
    if (isNaN(arg2)) {
        alert('Ошибка! Введено некорректное название второго аргумента');
        return -1;
    }

    let result = -1; //по-умолчанию результат при возникновении ошибки

    switch (operation) {
        case 'сложение':
            result = arg1 + arg2;
            break;

        case 'разность':
            result = arg1 - arg2;
            break;

        case 'умножение':
            result = arg1 * arg2;
            break;

        case 'деление':
            result = arg1 / arg2;
            break;

        default:
            alert('Ошибка! Введено некорректное название операции');
            break;
    }
    return result;
}

function testTask5() {
    let a = Number(prompt('Введите arg1:').replace(',', '.'));

    if (isNaN(a)) {
        alert('Ошибка. Введено некорректное значение.\nЗавершение выполнения функции тестирования');
        return;
    }
    let b = Number(prompt('Введите arg2:').replace(',', '.'));
    if (isNaN(b)) {
        alert('Ошибка. Введено некорректное значение.\nЗавершение выполнения функции тестирования');
        return;
    }
    let outMsg = '';
    let oper = prompt('Выберите действие:\n1) Сложение\n2) Разность\n3) Умножение\n4) Деление\nВведите номер выбранного действия:');

    switch (oper) {
        case '1':
            outMsg += `a = ${a}; b = ${b};\nоперация: сложение\nрезультат: a + b = ${a} + ${b} = ${mathOperation(a, b, 'сложение')}`;
            break;
        case '2':
            outMsg += `a = ${a}; b = ${b};\nоперация: разность\nрезультат: a - b = ${a} - ${b} = ${mathOperation(a, b, 'разность')}`;
            break;
        case '3':
            outMsg += `a = ${a}; b = ${b};\nоперация: умножение\nрезультат: a * b = ${a} * ${b} = ${mathOperation(a, b, 'умножение')}`;
            break;
        case '4':
            outMsg += `a = ${a}; b = ${b};\nоперация: деление\nрезультат: a / b = ${a} / ${b} = ${mathOperation(a, b, 'деление')}`;
            break;
        default:
            outMsg = 'Ошибка. Введено некорректное значение.\nЗавершение выполнения функции тестирования';
            break;
    }

    alert(outMsg);
}