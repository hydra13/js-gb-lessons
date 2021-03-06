'use strict'

function testTask1() {
    // 1 пример
    let a = 1,
        b = 1,
        c, d;
    c = ++a;
    alert(c); // ответ 2
    /*
    Описание 1-ого результата
    результат равен 2 т.к. изначальное значение а равно единице и используется префиксная форма инкремента,
    которая сначала меняет значение переменной, а только после этого возвращает значение этой переменной.

    Вышеописанный код аналогичен:
    a = 1;
    a = a + 1; //a = 2
    c = a;
    */

    // 2 пример
    d = b++;
    alert(d); // ответ 1
    /*
    Описание 2-ого результата
    результат равен 1 т.к. изначальное значение b равно единице и используется постфиксная форма инкремента,
    которая сначала возвращает значение переменной, а уже после увеличивает ее.

    Вышеописанный код аналогичен:
    b = 1;
    d = b;
    b = b + 1; //b = 2
    */

    // 3 пример
    c = (2 + ++a);
    alert(c); // ответ 5
    /*
    Описание 3-ого результата
    результат равен 5 т.к. изначальное значение a равно 2 и используется предфиксная форма инкремента,
    которая сначала меняет значение переменной, а только после этого возвращает значение этой переменной,
    и после этого происходит сложение с 2.

    Вышеописанный код аналогичен:
    a = 2; //после предыдущих манипуляций с переменной
    a = a + 1; //a = 3
    c = 2 + a; //c = 5
    */

    // 4 пример
    d = (2 + b++);
    alert(d); // ответ 4
    /*
    Описание 4-ого результата
    результат равен 4 т.к. изначальное значение b равно 2 и используется постфиксная форма инкремента,
    которая сначала возвращает значение переменной, а уже после увеличивает ее, 
    и после этого происходит сложение с 2 предыдущего результата (2).

    Вышеописанный код аналогичен:
    b = 2; //после предыдущих манипуляций с переменной
    d = 2 + b; //d = 4
    b = b + 1; //b = 3
    */

    alert(a); // ответ 3
    alert(b); // ответ 3
}