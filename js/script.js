class GoodsItem {

    constructor(id, title, price, image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
    }

    render() {
        return `<div class="goods-item" data-id="${this.id}"><h3>${this.title}</h3><img class="img" src="${this.image}" alt="picture"><p>Price: ${this.price}$</p><button class="item-button">Добавить в корзину</button></div>`;
    }

}


class GoodsList {

    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { id: 1, title: 'Shirt', price: 111, image: 'img/1.jpg' },
            { id: 2, title: 'Socks', price: 222, image: 'img/2.jpg' },
            { id: 3, title: 'Jacket', price: 333, image: 'img/3.jpg' },
            { id: 4, title: 'Shoes', price: 444, image: 'img/4.jpg' },
            { id: 5, title: 'Shirt', price: 555, image: 'img/5.jpg' },
            { id: 6, title: 'Socks', price: 656, image: 'img/6.jpg' },
            { id: 7, title: 'Jacket', price: 777, image: 'img/7.jpg' },
            { id: 8, title: 'Shoes', price: 888, image: 'img/8.jpg' },
            { id: 9, title: 'Shirt', price: 999, image: 'img/9.jpg' },
            { id: 10, title: 'Socks', price: 550, image: 'img/10.jpg' },
        ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id, good.title, good.price, good.image);
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
        this.goods.forEach(item => {
            if(item['id'] == id){
                return { ... item};
            }
        });
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
            if(item == id){
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

}

const init = () => {

    const list = new GoodsList();
    list.fetchGoods();
    list.render();
    console.log('Общая стоимость всех товаров: ' + list.totalPrice());

    let basket = new Basket();

    let buttons = document.querySelectorAll('.item-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let id = button.closest('div').getAttribute('data-id');
            basket.addItem(id);
            basket.getItemsList();
        });
    });
}

window.onload = init



