class RenderAbstract {
    basket = null;
    priceList = null;
    constructor(basket, priceList) {
        if (new.target === RenderAbstract) {
            throw new TypeError("Cannot construct RenderAbstract instances directly")
        }

        this.basket = basket;
        this.priceList = priceList;
    }

    removeAllChildren(element) {
        while (element.hasChildNodes()) {
            element.removeChild(element.firstChild);
        }
    }

    isBasketAndPriceListSet() {
        return this.basket != null && this.priceList != null
    }

    rendering(element) {
        throw new TypeError('The function rendering hasn\'t been override')
    }
}