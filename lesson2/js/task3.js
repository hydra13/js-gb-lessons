'use strict'

function getRandomFromMinus50To50() {
    //ф-ция генерации псевдослуч. числа в диапазоне от -50 до 50
    return parseInt(Math.random() * 100) - 50;
}

function parsing(a, b) {
    let outMsg = '';

    if (a >= 0 && b >= 0) {
        //оба числа положительные, разультат - разность
        outMsg = `a = ${a}; b = ${b}\n`
        outMsg += 'Оба числа положительные, разультат - разность:\n'
        outMsg += `a - b = ${a} - ${b} = ${a - b}`;
    } else if (a < 0 && b < 0) {
        //оба числа отрицательные, разультат - произведение
        outMsg = `a = ${a}; b = ${b}\n`
        outMsg += 'Оба числа отрицательные, разультат - произведение:\n'
        outMsg += `a * b = ${a} * ${b} = ${a * b}`;
    } else {
        //числа разных знаков, результат - сумма
        outMsg = `a = ${a}; b = ${b}\n`
        outMsg += 'Числа разных знаков, результат - сумма:\n'
        outMsg += `a + b = ${a} + ${ (b<0 ? '(' : '') + b + (b<0 ? ')' : '')} = ${a + b}`;
    }

    alert(outMsg);
}

function testTask3() {
    let a = getRandomFromMinus50To50();
    let b = getRandomFromMinus50To50();
    parsing(a, b);
}