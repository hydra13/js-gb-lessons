'use strict';

let game = {

    run() {
        console.log('Игра началась!');
        while (true) {
            let direction = prompt('Введите направление (2, 8, 4 или 6)');

            if (direction === null) {
                console.log('Игра закончилась');
                return;
            }

            let newPoint = mover.getNextPoint(direction);
            renderer.clear();
            player.move(newPoint);
            renderer.render();
        }

    },

    init() {
        // console.log('Для начала игры введите команду game.run()');
        renderer.render();
    }
};

game.init();