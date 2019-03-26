'use strict'

class Basket {
    goodList = [];

    countTotalPrice() {
        let totalPrice = 0;
        this.goodList.forEach(function (product) {
            totalPrice += product.price * product.count;
        });
        return totalPrice;
    }

    countTotalNumber() {
        let totalCount = 0;
        this.goodList.forEach(function (product) {
            totalCount += product.count;
        });
        return totalCount;
    }

    putProduct(product) {
        this.goodList.push(product);
    }
}