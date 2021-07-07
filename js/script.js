class GoodsItem {

    constructor(id_product, product_name, price, image) {
        this.id_product = id_product;
        this.product_name = product_name;
        this.price = price;
    }

    render() {
        return `<div class="goods-item" data-id="${this.id_product}"><h3>${this.product_name}</h3><p>Price: ${this.price}$</p><button class="item-button">Добавить в корзину</button></div>`;
    }
}

class BasketItem {

    constructor(id_product, product_name, price) {
        this.id_product = id_product;
        this.product_name = product_name;
        this.price = price;
    }

    render() {
        return `<div class="basket-item" data-id="${this.id_product}"><h3>${this.product_name}</h3><p>Price: ${this.price}$</p><button class="item-delete-button">Удалить из корзины</button></div>`;
    }
}


const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsList {

    constructor() {
        this.goods = [];
    }

    async fetchGoods() {
        const responce = await fetch(`${API_URL}/catalogData.json`);
        if (responce.ok) {
            const catalogItems = await responce.json();
            this.goods = catalogItems;
        } else {
            alert("Ошибка при соединении с сервером");
        }
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    totalPrice () {

        let totalPrice = 0;

        this.goods.forEach(good => {

            totalPrice += good.price;
        });
        return totalPrice;
    }

    getItemById (id) {
        let basket_item = null;
        this.goods.forEach(item => {
            if(item['id_product'] == id){
                basket_item = item;
            }
        });
        return basket_item;
    }
}

class Basket {

    constructor() {
        this.goods = [];
    }

    addItem (item) {
        this.goods.push(item);
    }

    removeItem (id) {
        this.goods.forEach(item => {
            if(item['id_product'] == id){
                const index = this.goods.indexOf(item);
                if (index > -1) {
                    this.goods.splice(index, 1);
                }
            }
        });
    }

    getItemsList () {
        if(this.hasOwnProperty('goods')){
            this.goods.forEach(item => {
                console.log('Item id = ', item);
            });
        }
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new BasketItem(good.id_product, good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.basket').innerHTML = listHtml;
    }

    countRender (){
        let counter = null;
        this.goods.forEach(good => {
            counter++;
        });
        document.querySelector('#basket-items-counter').innerHTML = 'Товаров в корзине ' + counter + 'шт.';
    }
}


const init = async () => {
    const list = new GoodsList();
    await list.fetchGoods();
    list.render();
    console.log('Общая стоимость всех товаров: ' + list.totalPrice());

    let basket = new Basket();

    let buttons = document.querySelectorAll('.item-button');
    let deleteButtons = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let id = button.closest('div').getAttribute('data-id');
            let item = list.getItemById(id);
            basket.addItem(item);
            basket.render();
            basket.countRender();
            deleteButtons = document.querySelectorAll('.item-delete-button');
            deleteButtons.forEach(deleteButton => {
                deleteButton.addEventListener('click', () => {
                    let id = deleteButton.closest('div').getAttribute('data-id');
                    basket.removeItem(id);
                    basket.render();
                    basket.countRender();
                });
            });

        });
    });
};


window.onload = init