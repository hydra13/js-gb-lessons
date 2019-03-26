let millionerGame = {
    init(questionsForGame) {
        console.log('Инициализация игры');

        let steps = [500, 1000, 2000, 3000, 5000, 10000, 15000, 25000, 50000, 100000, 200000, 400000, 800000, 1500000, 3000000];

        function getRandom(max) {
            return parseInt(Math.random() * max);
        }

        let usedQuestions = [];
        for (let i = 0; i < steps.length; i++) {
            let indexQuestion;
            do {
                indexQuestion = getRandom(questionsGlobal.length);
            } while (usedQuestions.includes(indexQuestion));
            questionsForGame[i] = Object.assign({}, questionsGlobal[indexQuestion]);
            questionsForGame[i].summ = steps[i];
            questionsForGame[i].saved = (i + 1) % 5 == 0;
            usedQuestions.push(indexQuestion);
        }
    },

    run() {
        let currentSum = 0;
        let savedSum = 0;
        let step = 0;
        let questions = [];
        let running = true;

        this.init(questions);

        console.log('Начало игры');
        while (running) {
            let str = `Сумма: ${questions[step].summ} руб.\nВопрос:\n${questions[step].question}\n`;
            questions[step].answers.forEach(function (item, index) {
                str += `${index}) ${item}\n`;
            });
            // Расскоментировать для отладки 
            // str += 'debug: ' + questions[step].correct;
            let answer = prompt(str);
            let answerNumber = Number(answer);
            let takeMoney = answer === null;
            if (answer !== null && (answer.length < 0 || isNaN(answerNumber) || answerNumber < 0 || answerNumber > 3)) {
                alert('Введен неверный парамент');
                continue;
            }
            if (!takeMoney) {
                if (questions[step].correct === answerNumber) {
                    currentSum = questions[step].summ;

                    if (step + 1 == questions.length) {
                        alert(`Поздравляю! Вы выйграли ${currentSum} руб. Игра окончена.`);
                        running = false;
                        continue;
                    }

                    if (questions[step].saved) {
                        savedSum = questions[step].summ;
                    }
                    let msg = `Правильно! Вы выйграли ${currentSum} руб.\nНесгораемая сумма: ${savedSum} руб.\nХотите продолжить? В случае отмены вы заберете свой выигрыш и игра закончится`
                    let result = confirm(msg);
                    if (!result) {
                        takeMoney = true;
                    }
                    step++;
                } else {
                    alert(`Неверно! Правильный ответ: ${questions[step].answers[ questions[step].correct ]}\nВаш выигрыш: ${savedSum} руб.`);
                    currentSum = savedSum;
                    running = false;
                    continue;
                }
            }

            if (takeMoney) {
                alert(`Очень жаль. Ваш выйгрыш: ${currentSum} руб. Поздравляем!`);
                running = false;
                continue;
            }
        }
        console.log('Игра завершена. Итог: ' + currentSum + ' руб.');

    }
}