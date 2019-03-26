'use strict'

function checkPassword(pass) {
    const CORRECT = 'Корректный пароль';
    const INCORRECT = 'Некорректный пароль';
    let condition1 = pass.length >= 3 && pass.length < 13;
    let condition2 = pass.indexOf('&') != -1 || pass.indexOf('$') != -1 || pass.indexOf('%') != -1 || pass.indexOf('*') != -1;

    //чтобы обезопасить проверку третьего условия, в первую очередь проверяется соблюдение первого условия (соответствие длины)
    let condition3 = condition1 && (pass[0] == 'q' || pass[pass.length - 1] == 'z');

    //т.к. в данном алгоритме третье условие включает в себя проверку первого условия, 
    //то итоговый результат зависит от результатов 2-х последних условий 
    return condition2 && condition3 ? CORRECT : INCORRECT;
}

function testTask7() {
    let mode = prompt('Выберете режим проверки:\n(по-умол.) 1) Тестирование по заготовленным данным\n2) Тестирование путем ручного ввода')
    if (mode == 2) {
        let pass = prompt('Введите пароль для тестирования соответствия: ')
        alert(checkPasswordwordWithoutRegExp(pass));
    } else {
        let outMsg = "Тестирование:\n"
        outMsg += `Корректный \'qwe&\' вернул: ${checkPassword('qwe&')}\n`;
        outMsg += `Корректный \'qwe$\' вернул: ${checkPassword('qwe$')}\n`;
        outMsg += `Корректный \'qwe%\' вернул: ${checkPassword('qwe%')}\n`;
        outMsg += `Корректный \'qwe*\' вернул: ${checkPassword('qwe*')}\n`;
        outMsg += `Корректный \'we&z\' вернул: ${checkPassword('we&z')}\n`;
        outMsg += `Корректный \'we$z\' вернул: ${checkPassword('we$z')}\n`;
        outMsg += `Корректный \'we%z\' вернул: ${checkPassword('we%z')}\n`;
        outMsg += `Корректный \'we*z\' вернул: ${checkPassword('we*z')}\n`;
        outMsg += `Некорректный \'q&\' вернул: ${checkPassword('q&')}\n`;
        outMsg += `Некорректный \'qwwwwwwwwwwwwwe*\' вернул: ${checkPassword('qwwwwwwwwwwwwwe*')}\n`;
        outMsg += `Некорректный \'qwez\' вернул: ${checkPassword('qwez')}\n`;
        outMsg += `Некорректный \'wqe%zr\' вернул: ${checkPassword('wqe%zr')}\n`;
        alert(outMsg);
    }

}