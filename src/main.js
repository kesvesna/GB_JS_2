
const { axios } = require('axios')

Vue.component ('app-search',{
  template:
    `<div class="card">
  <h1>{{ title }}</h1>
<hr />
<div class="form-control">
  <input
placeholder="Введите что искать"
type="text"
id="searchInput"
v-model.trim="searchValue"
  />
  </div>
  <button class="btn primary" @click="submitHandler">Найти</button>
  <div class="good-item" v-for="good in searchResult" :key="good.id_product">
  <h4>{{ good.product_name }} : {{ good.price }} руб.</h4>
<button class="btn" @click="addToCart" :data-id="good.id_product" :data-product-name="good.product_name" :data-price="good.price">Купить</button>      </div>
<h3 v-if="searchInfo.length > 0">{{ searchInfo }}</h3>
</div>
    `,
  data: () => ({
    url: 'http://localhost:3000',
    title: 'Поиск',
    searchValue: '',
    searchResult: [],
    searchInfo: '',
    goods: [],
    cartGoods: []
  }),
  //inject: ['cartGoods'],
  methods: {
    submitHandler: function () {
      const searchString = this.searchValue.toLowerCase()
      this.fetchGoods().then(() => {
        const result = []
        this.searchResult = []
        this.goods.forEach(function (good) {
          const productName = good.product_name.toLowerCase()
          if (searchString !== '' && productName.includes(searchString)) {
            result.push(good)
          }
        })
        this.searchResult = result
        this.searchValue = ''
        if (result.length <= 0) {
          this.searchInfo = 'Ничего не найдено'
        } else {
          this.searchInfo = ''
        }
      }).catch(() => {console.log('Ошибка связи с сервером')})
    },
    addToCart (e) {
      let thisGoodIsNotExist = false
      if (this.cartGoods.length > 0) {
        for (let i = 0; i < this.cartGoods.length; i++) {
          if (this.cartGoods[i].id_product === e.target.getAttribute('data-id')) {
            this.cartGoods[i].value += 1
            i = this.cartGoods.length + 1
            thisGoodIsNotExist = true
          }
        }
      }
      if (!thisGoodIsNotExist) {
        const choosenItem = {
          id_product: e.target.getAttribute('data-id'),
          product_name: e.target.getAttribute('data-product-name'),
          price: e.target.getAttribute('data-price'),
          value: 1
        }
        this.cartGoods.push(choosenItem)
      }
    },
    async fetchGoods()
    {
      const responce = await fetch(`${this.url}/catalogData`);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
      } else {
        console.log("Ошибка при соединении с сервером");
      }
    }
  }
})

//=============================================================

Vue.component ('app-basket', {
  template:
    `
     <div class="card">
  <h1>{{ title }}</h1>
<hr />
<div class="good-item" v-for="good in cartGoods" :key="good.id_product">
  <h4>{{ good.product_name }} : {{ good.price }} руб. &nbsp; &nbsp; <span style="color:red; font-weight:bold;" @click="minusCartGood(good.id_product)">&#8722;</span> {{ good.value }} <span style="color:green;  font-weight:bold;" @click="plusCartGood(good.id_product)">&#43;</span></h4>
<button class="danger btn" @click="removeFromCart(good.id_product)">Удалить</button>
  </div>
  <h2 v-if="cartGoods.length < 1">Корзина пустая</h2>
</div>
    `
  ,
  data: () => ({
    url: 'http://localhost:3000',
    title: 'Корзина',
    cartGoods: []
  }),
  //inject: ['cartGoods'],
  created () {
    this.fetchCartGoods().then(() => {}).catch(()=>{console.log('Error connection')})
  },
  methods: {
    removeFromCart: function (key) {
      for (let i = 0; i < this.cartGoods.length; i++) {
        if (this.cartGoods[i].id_product === key) {
          this.cartGoods.splice(i, 1)
        }
      }
      return this.cartGoods
    },
    minusCartGood: function (key) {
      for (let i = 0; i < this.cartGoods.length; i++) {
        if (this.cartGoods[i].id_product === key) {
          if (this.cartGoods[i].value > 1) {
            this.cartGoods[i].value -= 1
          }
        }
      }
    },
    plusCartGood: function (key) {
      for (let i = 0; i < this.cartGoods.length; i++) {
        if (this.cartGoods[i].id_product === key) {
          this.cartGoods[i].value += 1
        }
      }
    },
    async fetchCartGoods()
    {
      const responce = await fetch(`${this.url}/cartData`);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.cartGoods = catalogItems;
      } else {
        console.log("Ошибка при соединении с сервером");
      }
    }
  }
});

//===========================================================

Vue.component('app-main', {
  template:
    `<div class="container pt-1">
    <div class="card">
      <h1>{{ title }}</h1>
      <hr />
      <div class="good-item" v-for="good in goods" :key="good.id_product">
        <h4>{{ good.product_name }} - Цена {{ good.price }}<span> </span></h4>
        <button class="btn" @click="addToCart" :data-id="good.id_product" :data-product-name="good.product_name" :data-price="good.price">Купить</button>
      </div>
  </div>
    <app-search></app-search>
    <app-basket></app-basket>
  </div>`
  ,
  data: () => ({
    url: 'http://localhost:3000',
    title: 'Товары',
    goods:  [],
    //cartGoods: []
  }),
  provide () {
    return {
      //cartGoods: this.cartGoods,
      goods: this.goods
    }
  },
  created () {
    this.fetchGoods().then(() => {}).catch(()=>{console.log('Error connection')})
  },
  methods: {
    addToCart(e) {

      const item = { id_product: e.target.getAttribute('data-id')};
      axios.post(this.url, item)
          .then(response => console.log('Item was added to cart'))
          .catch(error => {
            console.error("There was an error: ", error);
          });
    },
    async fetchGoods()
{
  const responce = await fetch(`${this.url}/catalogData`);
  if (responce.ok) {
    const catalogItems = await responce.json();
    this.goods = catalogItems;
  } else {
    console.log("Ошибка при соединении с сервером");
  }
}
  }
});

//==================================================================

const app = new Vue({
  el: '#app',
  data: {

  },
});

//==============================================================





