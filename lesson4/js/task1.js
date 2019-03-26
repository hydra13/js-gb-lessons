'use strict'

function convertDigitalToObject(digit) {
    digit = parseInt(digit);
    if (isNaN(digit) || digit < 0 || digit > 999) {
        console.log('Полученное некорректное значение.\nКорректным значением является число от 0 до 999.');
        return {};
    }
    let units = digit % 10;
    let tens = parseInt((digit % 100) / 10);
    let hundreds = parseInt(digit / 100);

    return {
        'units': units,
        'tens': tens,
        'hundreds': hundreds
    };
}

function testTask1() {
    let arr = [245, 12, 4, 43, 1000, 912, 'wer', '13'];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        console.log(convertDigitalToObject(arr[i]));
    }
}