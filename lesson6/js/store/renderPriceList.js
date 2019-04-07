class RenderPriceList extends RenderAbstract {
    renderBasket = null;
    constructor(basket, priceList, renderBasket) {
        super(basket, priceList)
        this.renderBasket = renderBasket;
    }

    createChildRow(priceListItem) {
        let row = document.createElement('div');
        row.classList.add('price-list-items_item');

        let txt = document.createElement('span');
        txt.innerText = `${priceListItem.name}: цена: ${priceListItem.price} р.`;
        txt.classList.add('price-list-items_item-txt');

        let btnAdd = document.createElement('div');
        btnAdd.innerText = 'Добавить';
        btnAdd.classList.add('price-list-items_item-add-btn');
        btnAdd.render = this.renderBasket;
        btnAdd.basket = this.basket;
        btnAdd.priceList = this.priceList;
        btnAdd.productName = priceListItem.name;
        btnAdd.onclick = function () {
            let index = this.priceList.findIndex(element => {
                return this.productName === element.name;
            });
            if (index !== -1) {
                let product = Object.assign({}, this.priceList[index]);
                product.count = 1;
                this.basket.putProduct(product);
                this.render.repaintGoodsList();
            }
        }

        row.appendChild(txt);
        row.appendChild(btnAdd);
        return row;
    }

    fillPriceList(priceListElement) {
        for (let i = 0; i < this.priceList.length; ++i) {
            let child = this.createChildRow(this.priceList[i]);
            priceListElement.appendChild(child);
        }
    }

    addPriceList(element) {

        let priceListElement = document.createElement('div');
        priceListElement.classList.add('price-list-items');
        element.appendChild(priceListElement);

        this.fillPriceList(priceListElement);
    }

    rendering(element) {
        if (element == null || !this.isBasketAndPriceListSet() || renderBasket == null) {
            return;
        }

        this.removeAllChildren(element);

        this.addPriceList(element);
    }
}