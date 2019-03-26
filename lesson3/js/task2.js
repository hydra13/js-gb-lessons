'use strict'

function countBasketPrice(basket) {
    let totalPrice = 0;
    basket.forEach(function (item) {
        totalPrice += item.count * item.price;
    });
    return totalPrice;
}

function testTask2() {
    let recordForBasket = {
        name: 'name',
        price: 0,
        count: 0
    };
    let basket = [];

    for (let i = 1; i < 4; i++) {
        let obj = {};
        Object.assign(obj, recordForBasket);
        obj.name = 'name' + i;
        obj.price = parseInt(Math.random() * 10000) / 100;
        obj.count = parseInt(Math.random() * 10) + 1;
        basket.push(obj);
    }

    console.log('Basket:');
    console.log(basket);
    console.log('Total price: ' + countBasketPrice(basket));
}