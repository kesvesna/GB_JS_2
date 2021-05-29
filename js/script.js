class GoodsItem {

    constructor(title, price, image) {
        this.title = title;
        this.price = price;
        this.image = image;
    }

    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><img class="img" src="${this.image}" alt="picture"><p>Price: ${this.price}$</p><button>Купить</button></div>`;
    }

}


class GoodsList {

    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 111, image: 'img/1.jpg' },
            { title: 'Socks', price: 222, image: 'img/2.jpg' },
            { title: 'Jacket', price: 333, image: 'img/3.jpg' },
            { title: 'Shoes', price: 444, image: 'img/4.jpg' },
            { title: 'Shirt', price: 555, image: 'img/5.jpg' },
            { title: 'Socks', price: 656, image: 'img/6.jpg' },
            { title: 'Jacket', price: 777, image: 'img/7.jpg' },
            { title: 'Shoes', price: 888, image: 'img/8.jpg' },
            { title: 'Shirt', price: 999, image: 'img/9.jpg' },
            { title: 'Socks', price: 550, image: 'img/10.jpg' },
        ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.image);
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

}

class GoodsBasket {

    addItem () {}
    removeItem () {}
    totalPrice () {}
    makeOrder () {}

}

class BasketItem {

}

class Hamburger {

    static allToppings = [
        {type: 'salt', price: 15, calories: 0},
        {type: 'sauce', price: 20, calories: 5},
    ];

    static allTypes = [
        {size: 'Small', price: 50, calories: 20},
        {size: 'Big', price: 100, calories: 40},
    ];

    static allStuffs = [
        {type: 'cheeze', price: 10, calories: 20},
        {type: 'salad', price: 20, calories: 5},
        {type: 'portato', price: 15, calories: 10},
    ];

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = [];
    }

    addTopping(topping) {
            this.topping.push(topping);
    }

    removeTopping(topping) {
        this.topping.forEach(item => {
            if(item['type'] == topping['type']){
                const index = this.topping.indexOf(item);
                if (index > -1) {
                    this.topping.splice(index, 1);

                }
            }
        });
    }

    getToppings(topping) {
        return this.topping;
    }

    getSize() {
        return this.size;
    }

    getStuffing() {
        return this.stuffing;
    }

    calculatePrice() {
        let price = 0;
        price = this.size['price'] + this.stuffing['price'];
        if(this.hasOwnProperty('topping')){
            this.topping.forEach(item => {
                price += item['price'];
            });
        }
        return price;
    }

    calculateCalories() {
        let calories = 0;
        calories = this.size['calories'] + this.stuffing['calories'];
        if(this.hasOwnProperty('topping')) {
            this.topping.forEach(item => {
                calories += item['calories'];
            });
        }
        return calories;
    }
}


const init = () => {

    const list = new GoodsList();
    list.fetchGoods();
    list.render();
    console.log('Общая стоимость всех товаров: ' + list.totalPrice());

    firstHamburger = new Hamburger(Hamburger.allTypes[0], Hamburger.allStuffs[0]);
    secondHamburger = new Hamburger(Hamburger.allTypes[1], Hamburger.allStuffs[2]);
    console.log('First hamburger price whithout toppings = ' + firstHamburger.calculatePrice() + ', calories ' + firstHamburger.calculateCalories());
    console.log('Second hamburger price whithout toppings = ' + secondHamburger.calculatePrice() + ', calories ' + secondHamburger.calculateCalories());

    firstHamburger.addTopping(Hamburger.allToppings[0]);
    secondHamburger.addTopping(Hamburger.allToppings[1]);
    console.log('First hamburger price whith toppings = ' + firstHamburger.calculatePrice() + ', calories ' + firstHamburger.calculateCalories());
    console.log('Second hamburger price whith toppings = ' + secondHamburger.calculatePrice() + ', calories ' + secondHamburger.calculateCalories());

    secondHamburger.removeTopping(Hamburger.allToppings[1]);
    console.log('Second hamburger price whithout toppings = ' + secondHamburger.calculatePrice() + ', calories ' + secondHamburger.calculateCalories());


}

window.onload = init