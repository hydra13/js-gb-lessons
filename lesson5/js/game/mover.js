'use strict';

// Все изменения согласно 3-му заданию произошли именно в данном файле

let mover = {

    // проверка возможности перехода по указанным координатам
    isPossibleToMove(pos) {
        return pos.x >= 0 && pos.y >= 0 && pos.x < config.countRows && pos.y < config.countCols;
    },

    getNextPoint(direction) {
        let sourcePoint = player.getPosition(); //исходные координаты
        let nextPoint = player.getPosition(); //координаты для изменения позиции

        /*
        123
        456
        789
        */

        switch (direction) {
            case '1':
                nextPoint.x--;
                nextPoint.y--;
                break;
            case '2':
                nextPoint.y--;
                break;
            case '3':
                nextPoint.x++;
                nextPoint.y--;
                break;
            case '4':
                nextPoint.x--;
                break;
            case '6':
                nextPoint.x++;
                break;
            case '7':
                nextPoint.x--;
                nextPoint.y++;
                break;
            case '8':
                nextPoint.y++;
                break;
            case '9':
                nextPoint.x++;
                nextPoint.y++;
                break;
            default:
                console.log('такого направления нет');
                return sourcePoint;
        }

        return this.isPossibleToMove(nextPoint) ? nextPoint : sourcePoint;
    }
};