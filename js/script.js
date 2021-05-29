const goods = [

    { title: 'Shirt', price: 150, image: 'img/1.jpg' },
    { title: 'Socks', price: 50, image: 'img/2.jpg' },
    { title: 'Jacket', price: 350, image: 'img/3.jpg' },
    { title: 'Shoes', price: 111, image: 'img/4.jpg' },
    { title: 'Brash', price: 222, image: 'img/5.jpg' },
    { title: 'T-shirt', price: 333, image: 'img/6.jpg' },
    { title: 'Box', price: 444, image: 'img/7.jpg' },
    { title: 'TV', price: 555, image: 'img/8.jpg' },
    { title: 'Card', price: 661, image: 'img/9.jpg' },
    { title: 'Table', price: 777, image: 'img/10.jpg' },

]

const renderGoodsItem = (title, image, price) => {
    return `<div class="goods-item"><h3 class="title">${title}</h3><img src="${image}" alt="picture" class="img"><p class="price">Price: ${price}$</p><button>Купить</button></div>`
}

const renderGoodsList = list => {

    let goodsList = list.map(item => renderGoodsItem(item.title, item.image, item.price)).join('')

    document.querySelector('.goods-list').innerHTML = goodsList

}

const init = () => {
    renderGoodsList(goods)
}

window.onload = init