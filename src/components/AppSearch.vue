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
      <button class="btn" @click="addToCart" :data-id="good.id_product" :data-product-name="good.product_name" :data-price="good.price" :data-image="good.product_image">Купить</button>      </div>
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
        product_image: e.target.getAttribute('data-image'),
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
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Lato', sans-serif;
  }

  .wrapper {
    min-height: calc(100vh - 527px);
  }

  .footer {
    min-height: 527px;
  }

  .content__centering {
    padding-left: calc(50% - 570px);
    padding-right: calc(50% - 570px);
  }

  .header {
    background: #222222;
    height: 75px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }

  .header__search {
    margin-left: 41px;
  }

  .header__right__link:not(:last-child) {
    margin-right: 33px;
    text-decoration: none;
  }

  .hidden-menu {
    display: block;
    position: fixed;
    list-style: none;
    padding: 16px 0px 32px 32px;
    margin: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 232px;
    background-color: #fff;
    -webkit-box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    height: 768px;
    top: 75px;
    right: -232px;
    -webkit-transition: right .2s;
    transition: right .2s;
    z-index: 2;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }

  .hidden-menu a {
    text-decoration: none;
  }

  .hidden-menu-title {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }

  .svg-close-button {
    float: right;
  }

  .svg-close-button:hover {
    cursor: pointer;
  }

  .svg-close-button:hover:hover path {
    fill: #F16D7F;
  }

  .hidden-menu-ticker {
    display: none;
  }

  .btn-menu span {
    display: block;
    height: 3px;
    background-color: #fff;
    margin: 5px 0 0;
    -webkit-transition: all .1s linear .23s;
    transition: all .1s linear .23s;
    position: relative;
  }

  .btn-menu span.first {
    margin-top: 0;
  }

  .hidden-menu-ticker:checked ~ .hidden-menu {
    right: 0;
  }

  .hidden-filter__sort {
    padding-top: 37px;
    padding-bottom: 157px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .hidden-filter__details-in summary {
    display: block;
    outline: none;
  }

  .hidden-filter__details-in summary::-webkit-details-marker {
    display: none;
  }

  .hidden-filter {
    margin-right: 16px;
    position: relative;
  }

  .hidden-filter__summary {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    padding-right: 11px;
  }

  .hidden-filter__details {
    padding: 0px 16px 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    width: 100%;
  }

  .hidden-filter__details[open] {
    background: #FFFFFF;
    -webkit-box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
  }

  .hidden-filter__details[open] .filter__summary {
    color: #F16D7F;
  }

  .hidden-filter__details[open] path {
    fill: #F16D7F;
  }

  .hidden-filter__ul {
    list-style-type: none;
    padding-left: 17px;
    padding-top: 12px;
  }

  .hidden-filter__ul a {
    text-decoration: none;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #6F6E6E;
  }

  .hidden-filter__details-in {
    margin-top: 16px;
  }

  .hidden-filter__details-in[open] .hidden-filter__heading-in {
    color: #EF5B70;
  }

  .hidden-filter__heading-in {
    padding: 8px 0px 0px 11px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    display: block;
  }

  .breadcrumbs {
    height: 148px;
    background: #F8F3F4;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .breadcrumbs__title {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #F16D7F;
  }

  .cart {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 96px;
  }

  .product__card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 652px;
    margin-bottom: 40px;
    -webkit-box-shadow: 17px 19px 24px rgba(0, 0, 0, 0.13);
    box-shadow: 17px 19px 24px rgba(0, 0, 0, 0.13);
  }

  .product__card__info {
    margin-left: 31px;
  }

  .product__card__info__title {
    margin-top: 22px;
    max-width: 200px;
    margin-bottom: 42px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #222222;
  }

  .card__info {
    margin-bottom: 6px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    color: #575757;
  }

  .card__info .price {
    color: #F16D7F;
  }

  .card__info .quantity {
    max-width: 44px;
    height: 25px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #656565;
    text-align: center;
    margin-left: 24px;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
    border: 1px solid;
  }

  .close__button {
    -ms-flex-item-align: start;
    align-self: flex-start;
    margin-left: auto;
    margin-top: 24px;
    margin-right: 22px;
  }

  .close__button:hover {
    cursor: pointer;
  }

  .close__button:hover path {
    fill: #F16D7F;
  }

  .info__block {
    width: 360px;
  }

  .shipping {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 272px;
    padding-top: 17px;
    margin-bottom: 57px;
  }

  .shipping p {
    margin-bottom: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
  }

  .shipping button {
    max-width: 100px;
    min-height: 34px;
    border: 1px solid #A4A4A4;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    color: #4A4A4A;
    background: #FFFFFF;
  }

  .shipping input {
    margin-bottom: 20px;
    min-height: 45px;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    color: #222222;
    padding-left: 17px;
    padding-right: 17px;
  }

  .shipping input:hover {
    color: #B1B1B1;
  }

  .checkout {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 214px;
    background: #F5F3F3;
  }

  .checkout p {
    text-align: right;
  }

  .sub__total {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    color: #4A4A4A;
    margin-top: 39px;
    margin-bottom: 12px;
  }

  .sub__total__price {
    margin-right: 34px;
    margin-left: 10px;
  }

  .grand__total {
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
  }

  .grand__total__price {
    margin-right: 37px;
    margin-left: 10px;
    color: #F16D7F;
  }

  .divider {
    margin-top: 21px;
    margin-bottom: 17px;
    width: 275px;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    color: #E2E2E2;
  }

  .proceed__button {
    width: 273px;
    min-height: 50px;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    background: #F16D7F;
    outline: 1px solid #F16D7F;
    border: none;
    -webkit-transition: .3s;
    transition: .3s;
  }

  .proceed__button:hover {
    color: #F16D7F;
    background: #FFFFFF;
    outline: 1px solid #F16D7F;
    border: none;
    -webkit-transition: .3s;
    transition: .3s;
  }

  .buttons__block {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 72px;
    margin-bottom: 128px;
  }

  .buttons__block button {
    padding: 17px 41px;
    border: none;
    outline: 1px solid #A4A4A4;
    background: #FFFFFF;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }

  .subscribe {
    min-height: 448px;
    background-image: url("/images/footer_background_image.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .subscribe__block__1 {
    text-align: center;
    margin-top: 97px;
  }

  .subscribe__block__1__text {
    margin-top: 30px;
    max-width: 360px;
    min-height: 99px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #222224;
  }

  .subscribe__block__2 {
    margin-top: 150px;
    text-align: center;
  }

  .subscribe__block__2__p__1 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 167%;
    text-align: center;
    color: #222224;
  }

  .subscribe__form {
    margin-top: 32px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }

  .subscribe__input {
    width: 256px;
    height: 49px;
    background: #E1E1E1;
    border: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #222224;
    opacity: 0.67;
    padding-left: 22px;
    padding-right: 22px;
  }

  .subscribe__button {
    width: 100px;
    height: 49px;
    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    background: #F16D7F;
    -webkit-transition: .5s;
    transition: .5s;
  }

  .subscribe__button:hover {
    background: #D73C3C;
    -webkit-transition: .5s;
    transition: .5s;
  }

  .footer__info {
    min-height: 79px;
    background: #222224;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .footer__info__copyright {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #FBFBFB;
  }

  .footer__link {
    text-decoration: none;
    text-transform: none;
    -webkit-transition: .3s;
    transition: .3s;
  }

  .footer__icon:hover .footer__link__icon__background {
    stroke: #F16D7F;
    fill: #F16D7F;
    -webkit-transition: .3s;
    transition: .3s;
  }

  .footer__icon:hover .footer__link__icon__text {
    fill: #FffffF;
    -webkit-transition: .3s;
    transition: .3s;
  }

  @media (max-width: 1023px) {
    .content__centering {
      padding-left: calc(50% - 368px);
      padding-right: calc(50% - 368px);
    }
    .cart {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      padding: 0;
    }
    .product__card {
      margin-right: 0;
      width: 734px;
    }
    .buttons__block {
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
    .info__block {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      height: 272px;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
      margin-bottom: 128px;
    }
    .shipping,
    .checkout {
      width: 360px;
    }
    .shipping input {
      border: 1px solid;
    }
    .subscribe {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .subscribe__block__1 {
      margin-top: 48px;
    }
    .subscribe__block__2 {
      margin-top: 48px;
      margin-bottom: 140px;
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      min-height: calc(100vh - 800px);
    }
    .footer {
      min-height: 800px;
    }
    .content__centering {
      padding-left: calc(50% - 188px);
      padding-right: calc(50% - 188px);
    }
    .breadcrumbs {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }
    .cart {
      margin-top: 35px;
      margin-bottom: 220px;
    }
    .product__card {
      width: 358px;
      height: 188px;
      margin-bottom: 32px;
      margin-right: 0;
    }
    .product__card__info {
      margin-left: 17px;
      max-width: 135px;
    }
    .product__card__picture img {
      width: 143px;
      height: 188px;
    }
    .product__card__info__title {
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #222222;
      margin-bottom: 25px;
      margin-top: 13px;
    }
    .card__info {
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #575757;
      margin-bottom: 4px;
    }
    .quantity {
      width: 24px;
      max-height: 15px;
      font-size: 10px;
      line-height: 12px;
      color: #656565;
      text-align: center;
    }
    .close__button svg {
      width: 11px;
      height: 11px;
    }
    .close__button {
      margin-top: 8px;
      margin-right: 12px;
    }
    .buttons__block {
      margin-top: 30px;
      margin-bottom: 48px;
    }
    .buttons__block button {
      width: 175px;
      height: 33px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: #575757;
      text-align: center;
      padding: 0;
    }
    .info__block {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      padding: 0;
    }
    .shipping {
      padding: 0;
      margin-bottom: 48px;
    }
    .subscribe__block__1 {
      margin-top: 64px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #222224;
    }
    .subscribe__block__2 {
      margin-top: 59px;
      margin-bottom: 109px;
      max-width: 341px;
    }
    .subscribe__form form {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
    }
    .subscribe__input {
      max-width: 201px;
    }
    .subscribe__button {
      max-width: 96px;
    }
    .subscribe__block__2__p__2 {
      font-family: Lato;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 153.2%;
      text-align: center;
      color: #222224;
    }
    .footer__info {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
      padding-top: 43px;
      padding-bottom: 9px;
    }
  }
  /*# sourceMappingURL=cart.css.map */
</style>
