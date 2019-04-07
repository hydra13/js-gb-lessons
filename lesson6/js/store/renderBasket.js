class RenderBasket extends RenderAbstract {
    addControlButtons(element) {
        let btnAdd = document.createElement('span');
        btnAdd.innerText = 'Добавить случ. товар';
        btnAdd.classList.add('basket-add-btn');
        btnAdd.priceList = this.priceList;
        btnAdd.basket = this.basket;
        btnAdd.render = this;
        btnAdd.onclick = function () {
            let productIndex = parseInt(Math.random() * (this.priceList.length - 1));

            let count = parseInt(Math.random() * 3) + 1;
            let product = Object.assign({}, this.priceList[productIndex]);
            product.count = count;
            this.basket.putProduct(product);
            this.render.repaintGoodsList();
        }
        element.appendChild(btnAdd);
    }

    fillGoodsList(goodsListElement) {
        for (let i = 0; i < this.basket.countProducts(); ++i) {
            let child = this.createChildRow(this.basket.getProduct(i));
            goodsListElement.appendChild(child);
        }
    }

    addGoodsList(element) {

        let goodsListElement = document.createElement('div');
        goodsListElement.classList.add('basket-goods-list');
        element.appendChild(goodsListElement);

        this.fillGoodsList(goodsListElement);
    }

    setTotalTextToElement(element) {
        let totalCount = this.basket.countTotalNumber();
        if (totalCount === 0) {
            element.innerText = 'Корзина пуста';
        } else {
            let totalPrice = this.basket.countTotalPrice();
            element.innerText = `В корзине: ${totalCount} товаров на сумму ${totalPrice} рублей`;
        }
    }

    addTotalInfo(element) {
        let totalEl = document.createElement('div');

        this.setTotalTextToElement(totalEl);

        totalEl.classList.add('basket-total');
        element.appendChild(totalEl);
    }

    createChildRow(product) {
        let row = document.createElement('div');
        row.classList.add('basket-goods-list_item');

        let txt = document.createElement('span');
        txt.innerText = `${product.name}: цена: ${product.price} р.; кол-во: ${product.count}`;
        txt.classList.add('basket-goods-list_item-txt');

        let btnDel = document.createElement('div');
        btnDel.innerText = 'Удалить';
        btnDel.classList.add('basket-goods-list_item-del-btn');
        btnDel.render = this;
        btnDel.basket = this.basket;
        btnDel.productName = product.name;
        btnDel.onclick = function () {
            if (this.basket.removeProduct(this.productName)) {
                this.render.repaintGoodsList();
            }
        }

        row.appendChild(txt);
        row.appendChild(btnDel);
        return row;
    }

    repaintGoodsList() {
        let goodsListElement = document.querySelector('.basket-goods-list');
        this.removeAllChildren(goodsListElement);
        this.fillGoodsList(goodsListElement);
        let totalElement = document.querySelector('.basket-total');
        this.setTotalTextToElement(totalElement);
    }

    rendering(element) {
        if (element == null || !this.isBasketAndPriceListSet()) {
            return;
        }

        this.removeAllChildren(element);

        this.addControlButtons(element);

        this.addGoodsList(element);

        this.addTotalInfo(element);
    }
}