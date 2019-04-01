'use strict'

class Basket {
    goodList = [];

    countTotalPrice() {
        let totalPrice = 0;
        this.goodList.forEach(function (product) {
            totalPrice += product.price * product.count;
        });
        return totalPrice.toFixed(2);
    }

    countTotalNumber() {
        let totalCount = 0;
        this.goodList.forEach(function (product) {
            totalCount += product.count;
        });
        return totalCount;
    }

    putProduct(product) {
        let index = this.goodList.findIndex(function (el) {
            return el.name === product.name;
        })
        if (index === -1) {
            this.goodList.push(product);
        } else {
            this.goodList[index].count += product.count;
        }
    }

    countProducts() {
        return this.goodList.length;
    }

    getProduct(index) {
        if (isNaN(index) || index < 0 || index >= this.goodList.length) {
            console.log('error! The index <' + index + '> doesn\'t contain in the basket');
            return {};
        }
        return this.goodList[index];
    }
    removeProduct(productName) {
        let index = this.goodList.findIndex(function (el) {
            return el.name === productName;
        })
        if (index !== -1) {
            this.goodList.splice(index, 1);
            return true;
        }
        return false;
    }
}