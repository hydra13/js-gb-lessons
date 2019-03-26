'use strict';
let player = {
    x: 0,
    y: 0,

    move(newPoint) {
        this.x = newPoint.x;
        this.y = newPoint.y;
    },

    //получения объекта текущей позиции
    getPosition() {
        return {
            x: this.x,
            y: this.y
        }
    }
};