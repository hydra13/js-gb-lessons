Vue.component('basket', {
    props: ['item'],
    template: `
    <div class="basket-goods-list_item">
        <span class="basket-goods-list_item-txt">
            {{item.name}}: цена: {{item.price}}; кол-во: {{item.count}}
        </span>
        <div class="basket-goods-list_item-del-btn" 
            v-on:click="$emit('remove', item)">
            Удалить
        </div>
    </div>`
})

let basketElement = new Vue({
    el: '.basket',
    data: {
        goodsListItems: basket.goodList,
        message: basket.getTotalString()
    },
    methods: {
        removeFromBasket(item) {
            basket.removeProduct(item.name);
            this.message = basket.getTotalString()
        },
        addRandomGood() {
            let productIndex = parseInt(Math.random() * (priceList.length - 1))
            let count = parseInt(Math.random() * 3) + 1
            let product = Object.assign({}, priceList[productIndex])
            product.count = count
            basket.putProduct(product)
            this.message = basket.getTotalString()
        },
        updateMessage() {
            this.message = basket.getTotalString()
        }
    }
})