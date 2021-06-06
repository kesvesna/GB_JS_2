
var a = "[{ 'As shown above, the 'aesthetic' impact annihi'lates 'the' lyrical mythop'oetic chronotope.' " +
    " 'The dialogue context firmly 'enlightens' the lyric'al trochee.' " +
    " 'Developing 'this' theme, the dialogical conte'xt perfectly disco'rds the 'urban' dimension.' }]";
//var b = a.replace(/\'/g, "\"");
var b = a.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');


class GoodsItem {

    constructor(id_product, product_name, price) {
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
        this.filteredGoods = [];
    }

    async fetchGoods() {
        const responce = await fetch(`${API_URL}/catalogData.json`);
        if (responce.ok) {
            const catalogItems = await responce.json();
            this.filteredGoods = catalogItems;
        } else {
            alert("Ошибка при соединении с сервером");
        }
    }

    render() {
        let listHtml = '';
        this.filteredGoods.forEach(good => {
            const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    async filterGoods(value) {
        if(value != ''){
            const regexp = new RegExp(value, 'i');
            this.filteredGoods = this.filteredGoods.filter(good => regexp.test(good.product_name));
            this.render();
        } else {
            await this.fetchGoods();
            this.render();
        }

    }

    totalPrice () {

        let totalPrice = 0;

        this.filteredGoods.forEach(good => {

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

    let beforeChange = document.querySelector('#beforeChange');
    beforeChange.innerHTML = a;
    let afterChange = document.querySelector('#afterChange');
    afterChange.innerHTML = b;

    let searchButton = document.querySelector('.search-button');
    let searchInput = document.querySelector('.goods-search');
    searchButton.addEventListener('click', (e) => {
        const value = searchInput.value;
        list.filterGoods(value);
    });


    let submitBtn = document.querySelector('#submit-button');
    submitBtn.addEventListener('click', (e) => {

        let userName = document.querySelector('#name');
        let userPhone = document.querySelector('#phone');
        let userMail = document.querySelector('#mail');
        let userMsg = document.querySelector('#msg');

        let nameError = document.querySelector('.name-error-message');
        let phoneError = document.querySelector('.phone-error-message');
        let emailError = document.querySelector('.email-error-message');
        let msgError = document.querySelector('.msg-error-message');

        let phoneNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        let emailString = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(userName.value === ''){
            userName.classList.add('message-error');
            userName.classList.remove('message-success');
            nameError.innerHTML = 'Необходимо заполнить имя';
        } else {
            userName.classList.remove('message-error');
            userName.classList.add('message-success');
            nameError.innerHTML = '';
        }

        if(userMsg.value === ''){
            userMsg.classList.add('message-error');
            userMsg.classList.remove('message-success');
            msgError.innerHTML = 'Необходимо заполнить сообщение';
        } else {
            userMsg.classList.remove('message-error');
            userMsg.classList.add('message-success');
            msgError.innerHTML = '';
        }

        if(userPhone.value === ''){
            userPhone.classList.add('message-error');
            userPhone.classList.remove('message-success');
            phoneError.innerHTML = 'Необходимо заполнить телефон';
        } else if (!userPhone.value.match(phoneNumber)) {
            userPhone.classList.add('message-error');
            userPhone.classList.remove('message-success');
            phoneError.innerHTML = 'Необходимо правильно заполнить номер телефона';
        } else {
            userPhone.classList.remove('message-error');
            userPhone.classList.add('message-success');
            phoneError.innerHTML = '';
        }

        if(userMail.value === ''){
            userMail.classList.add('message-error');
            userMail.classList.remove('message-success');
            emailError.innerHTML = 'Необходимо заполнить email';
        } else if (!userMail.value.match(emailString)) {
            userMail.classList.add('message-error');
            userMail.classList.remove('message-success');
            emailError.innerHTML = 'Необходимо правильно заполнить email';
        } else {
            userMail.classList.remove('message-error');
            userMail.classList.add('message-success');
            emailError.innerHTML = '';
        }

    });


};


window.onload = init