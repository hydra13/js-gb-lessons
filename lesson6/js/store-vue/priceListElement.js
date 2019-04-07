Vue.component('price-list', {
    props: ['item'],
    template: `
    <div class="price-list-items_item">
        <span class="price-list-items_item-txt">
            {{item.name}}: цена: {{item.price}}
        </span>
        <div class="price-list-items_item-add-btn" 
            :data-name="item.name" 
            @click="$emit('addproduct', item)">
            
            Добавить
        </div>
    </div>`
})

let priceListElement = new Vue({
    el: '.price-list',
    data: {
        priceListItems: priceList
    },
    methods: {
        addToBasket(product) {
            console.dir(event.target)
            let prod = Object.assign({}, product)
            prod.count = 1;
            basket.putProduct(prod)
            basketElement.updateMessage()
        }
    }
})