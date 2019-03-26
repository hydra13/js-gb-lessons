'use strict'

function power(val, pow) {
    //если значение степени равно 1 - возвращаем число,
    //иначе возвращаем произведение числа и результата функции 
    //возведения в степень, уменьшенную на еденицу
    return (pow == 1 ? val : val * power(val, pow - 1));
}

function testTask6() {
    let val = Number(prompt('Введите число:').replace(',', '.'));
    if (isNaN(val)) {
        alert('Ошибка. Введено некорректное значение.\nЗавершение выполнения функции тестирования');
        return;
    }
    let pow = Number(prompt('Введите степень:').replace(',', '.'));
    if (isNaN(pow) || pow < 1) {
        alert('Ошибка. Введено некорректное значение.\nЗавершение выполнения функции тестирования');
        return;
    }
    alert(`число ${val} в степени ${pow} равно ${power(val, pow)}`);
}