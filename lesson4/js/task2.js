'use strict'

function testTask2() {
    let basket = new Basket();
    console.log('Создан объект корзины:');
    console.log(basket);

    fillTestDataToPriceList();
    console.log('Создан список товаров со случайными ценами:');
    console.log(priceList);

    priceList.forEach(function (item, index) {
        let product = Object.assign({}, item);
        product.count = index % 2 == 0 ? 1 : 2;
        basket.putProduct(product);
    });



    console.log('Наполнили товарами корзину (1 шт для чет, 2 для нечет):');
    console.log(basket);

    console.log('Общая стоимость корзины:');
    console.log(basket.countTotalPrice());

    console.log('Общее количество товаров:');
    console.log(basket.countTotalNumber());
}