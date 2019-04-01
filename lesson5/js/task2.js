'use strict'


function testTask2() {
    let basket = new Basket();
    let renderBasket = new RenderBasket(basket);
    console.log('Создан объект корзины:');
    console.log(basket);

    fillTestDataToPriceList();
    console.log('Создан список товаров со случайными ценами:');
    console.log(priceList);

    let sizeRandom = parseInt(Math.random() * 10);

    for (let i = 0; i < sizeRandom; ++i) {
        let productIndex = parseInt(Math.random() * (priceList.length - 1));
        let count = parseInt(Math.random() * 3) + 1;
        let product = Object.assign({}, priceList[productIndex]);
        product.count = count;
        basket.putProduct(product);
    }

    // priceList.forEach(function (item, index) {
    //     let product = Object.assign({}, item);
    //     product.count = index % 2 == 0 ? 1 : 2;
    //     basket.putProduct(product);
    // });

    let basketHtmlElement = document.querySelector('.basket');
    console.dir(basketHtmlElement);
    renderBasket.rendering(basketHtmlElement, priceList);

    console.log('Наполнили товарами корзину (1 шт для чет, 2 для нечет):');
    console.log(basket);

    console.log('Общая стоимость корзины:');
    console.log(basket.countTotalPrice());

    console.log('Общее количество товаров:');
    console.log(basket.countTotalNumber());
}