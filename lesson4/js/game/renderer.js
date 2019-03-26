'use strict';
/**
 * Этот объект...
 * @type {{clear(): void, map: string, render(): void}}
 */
let renderer = {
    map: '',

    /*  oxxxxxxxxx
        xxxxxxxxxx
        xxxxxxxxxx
        xxxxxxxxxx
        xxxxxxxxxx
        xxxxxxxxxx
        xxxxxxxxxx
        xxxxxxxxxx
        xxxxxxxxxx
        xxxxxxxxxx
*/
    render() {
        for(let i = 0; i < config.countRows; i++) {
            for(let j = 0; j < config.countCols; j++) {
                if(player.x === j && player.y === i) {
                    this.map += 'o';
                } else this.map += 'x';
            }
            this.map += '\n';
        }

        console.log(this.map);
    },

    clear() {
        console.clear();
        this.map = '';
    }
};
