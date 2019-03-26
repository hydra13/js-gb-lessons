'use strict'

function testTask1() {
    let a = [
        [{
            name: 'Mary',
            age: 23
        }, {
            name: 'Mike',
            age: 45
        }, {
            name: 'Nick',
            age: 11
        }],
        [{
            name: 'Adam',
            age: 56
        }, {
            name: 'Sara',
            age: 21
        }, {
            name: 'Don',
            age: 22
        }],
        [{
            name: 'Karl',
            age: 34
        }, {
            name: 'Marta',
            age: 76
        }, {
            name: 'John',
            age: 19
        }]
    ];

    // данный вариант был представлен на уроке
    let b = [];

    a.forEach(function (itemLvl1, indexLvl1) {
        b[indexLvl1] = [];
        itemLvl1.forEach(function (itemLvl2, indexLvl2) {
            let obj = {};
            Object.assign(obj, itemLvl2);
            b[indexLvl1].push(obj);
        });
    });

    //изменяем массив A с целью проверки
    a[0][0].name = "TTTTTTTTTTT";
    a[0][0].age = 9999999;

    //вывод результатов
    console.log('Массив А (первая запись изменена после копирования):')
    console.log(a);
    console.log('Массив B:')
    console.log(b);
}