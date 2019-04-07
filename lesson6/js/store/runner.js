'use strict'

let basket = new Basket();

fillTestDataToPriceList();

let sizeRandom = parseInt(Math.random() * 10) + 10;

for (let i = 0; i < sizeRandom; ++i) {
    let productIndex = parseInt(Math.random() * (priceList.length - 1));
    let count = parseInt(Math.random() * 3) + 1;
    let product = Object.assign({}, priceList[productIndex]);
    product.count = count;
    basket.putProduct(product);
}

let renderBasket = new RenderBasket(basket, priceList);
let basketHtmlElement = document.querySelector('.basket');
renderBasket.rendering(basketHtmlElement);

let renderPriceList = new RenderPriceList(basket, priceList, renderBasket);
let priceListHtmlElement = document.querySelector('.price-list');
renderPriceList.rendering(priceListHtmlElement);