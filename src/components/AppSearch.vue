<template>
  <div class="card">
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
      <h4>{{ good.product_name }} <br> {{ good.price }} руб.</h4>
      <button class="btn" @click="addToCart" :data-id="good.id_product" :data-product-name="good.product_name" :data-price="good.price">Купить</button>      </div>
    <h3 v-if="searchInfo.length > 0">{{ searchInfo }}</h3>
  </div>
</template>

<script>

  import axios from 'axios'

export default {
  name: "AppSearch",
  data: () => ({
    url: 'http://localhost:3000',
    title: 'Поиск',
    searchValue: '',
    searchResult: [],
    searchInfo: '',
    goods: [],
    cartGoods: []
  }),
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
        if (result.length === 0) {
          this.searchInfo = 'Ничего не найдено'
        } else {
          this.searchInfo = ''
        }
      }).catch(() => {console.log('Ошибка связи с сервером')})
    },
    addToCart(e) {

      const item = { id_product: parseInt(e.target.getAttribute('data-id')),
        product_name: e.target.getAttribute('data-product-name'),
        product_price: parseInt(e.target.getAttribute('data-price')),
        value: 1
      };
      axios.post(`${this.url}/addToCart`, item)
              .then(() => {console.log('Item was added to cart');})
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
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
