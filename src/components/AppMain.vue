<template>
<section>
  <section class="promo content__centering">
    <div class="promo__image">
      <img src="images/big_picture_man.png" alt="Man photo" class="promo__photo">
    </div>
    <div class="promo__text">
      <div class="promo__content">
        <h1 class="promo__h1">THE BRAND</h1>
        <h2 class="promo__h2">OF LUXERIOS <span class="promo__h2_select">FASHION</span></h2>
      </div>
    </div>
  </section>
  <div class="offer content__centering">
    <div class="offer__pictures__1">
      <div class="offer__picture__block__1">
        <div class="offer__text__block__1">
          <p class="offer__text__1">30% OFF</p>
          <p class="offer__text__2">FOR WOMEN</p>
        </div>
      </div>
      <div class="offer__picture__block__2">
        <div class="offer__text__block__1">
          <p class="offer__text__1">HOT DEAL</p>
          <p class="offer__text__2">FOR MEN</p>
        </div>
      </div>
      <div class="offer__picture__block__3">
        <div class="offer__text__block__1">
          <p class="offer__text__1">NEW ARRIVALS</p>
          <p class="offer__text__2">FOR KIDS</p>
        </div>
      </div>
    </div>
    <div class="offer__picture__2">
      <div class="offer__text__block">
        <p class="offer__text__1">LUXIROUS & TRENDY</p>
        <p class="offer__text__2">ACCESORIES</p>
      </div>
    </div>
  </div>

  <section class="products content__centering">
    <div class="top__text">
      <p class="products__top__text__1">Fetured Items</p>
      <p class="products__top__text__2">Shop for items based on what we featured in this week</p>
    </div>
    <div class="products__cards">
  <div class="product__card" v-for="good in goods" :key="good.id_product">
    <a class="product__card__link" href="#">
      <img class="product__card__image" :src="good.product_image" alt="product_card_1">
    </a>
    <div class="product__card__text">
      <p class="product__card__p1">{{ good.product_name }}</p>
      <p class="product__card__p2">Known for her sculptural takes on traditional tailoring, Australian
        arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
      <p class="product__card__p3">${{ good.price }}</p>
    </div>
    <a href="#" class="product__add__link"  @click="addToCart" :data-id="good.id_product" :data-product-name="good.product_name" :data-price="good.price" :data-image="good.product_image"><svg class="product__cart__svg" width="27"
                                                           height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
              d="M21.9509 23.2667H21.8386C21.2294 23.2667 20.7177 22.7671 20.6735 22.1294C20.629 21.4607 21.1175 20.8785 21.7626 20.8346C21.788 20.8329 21.8145 20.832 21.8405 20.832C22.4575 20.832 22.9743 21.3219 23.0201 21.9487C23.0319 22.1971 22.9914 22.5514 22.736 22.8439L22.73 22.8507L22.7242 22.8575C22.5275 23.0912 22.2607 23.2321 21.9509 23.2667ZM8.21887 23.2604C7.5683 23.2604 7.03906 22.7174 7.03906 22.05C7.03906 21.3832 7.5683 20.8406 8.21887 20.8406C8.86945 20.8406 9.39868 21.3832 9.39868 22.05C9.39868 22.7174 8.86945 23.2604 8.21887 23.2604Z"
              fill="white" />
      <path
              d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z"
              fill="white" />
      <path
              d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z"
              fill="white" />
    </svg>
      Add to Cart
    </a>
  </div>
    </div>
    <div class="browse__all__button">
      <a class="browse__all__product" href="#">
        <span>Browse All Product</span>
      </a>
    </div>
  </section>
  <section class="sale content__centering">
    <article class="sale_item">
      <img src="images/sale_img_1.svg" alt="" class="sale_img">
      <h3 class="sale_title">Free Delivery</h3>
      <p class="sale_text">Worldwide delivery on all. Authorit tively morph next-generation
        innov
        tion with extensive models.</p>
    </article>
    <article class="sale_item">
      <img src="images/sale_img_2.svg" alt="" class="sale_img">
      <h3 class="sale_title">Sales & discounts</h3>
      <p class="sale_text">Worldwide delivery on all. Authorit tively morph next-generation
        innov
        tion with extensive models.</p>
    </article>
    <article class="sale_item">
      <img src="images/sale_img_3.svg" alt="" class="sale_img">
      <h3 class="sale_title">Quality assurance</h3>
      <p class="sale_text">Worldwide delivery on all. Authorit tively morph next-generation
        innov
        tion with extensive models.</p>
    </article>
  </section>
</section>
</template>

<script>

  import axios from 'axios'

export default {
  name: "AppMain",
  data: () => ({
    url: 'http://localhost:3000',
    title: 'Товары',
    goods:  [],
    cartGoods: []
  }),
  provide () {
    return {
      goods: this.goods
    }
  },
  created () {
    this.fetchGoods().then(() => { console.log(this.goods)}).catch(()=>{console.log('Error connection')})
  },
  methods: {
    addToCart(e) {

      const item = { id_product: parseInt(e.target.getAttribute('data-id')),
        product_name: e.target.getAttribute('data-product-name'),
        product_price: parseInt(e.target.getAttribute('data-price')),
        product_image: e.target.getAttribute('data-image'),
        value: 1
      };
      axios.post(`${this.url}/addToCart`, item)
              .then(response => {this.cartGoods = response.data;})
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

  .promo {
    background: #F1E4E6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-left: calc(50% - 800px);
    padding-right: calc(50% - 800px);
  }

  .promo__image {
    width: 50%;
  }

  .promo__photo {
    width: 100%;
  }

  .promo__text {
    padding-top: 18%;
    padding-left: 4%;
  }

  .promo__content {
    border-left: 12px solid #F16D7F;
    padding-left: 16px;
  }

  .promo__h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 58px;
    color: #222222;
  }

  .promo__h2 {
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #222222;
  }

  .promo__h2_select {
    color: #F16D7F;
  }

  .offer {
    padding-top: 65px;
  }

  .offer__pictures__1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .offer__picture__block__1,
  .offer__picture__block__2,
  .offer__picture__block__3 {
    width: 360px;
    height: 260px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
  }

  .offer__picture__block__1 {
    background-image: url("/images/offer_1.jpg");
  }

  .offer__picture__block__2 {
    background-image: url("/images/offer_2.jpg");
  }

  .offer__picture__block__3 {
    background-image: url("/images/offer_3.jpg");
  }

  .offer__text__block__1 {
    max-width: 154px;
  }

  .offer__text__1 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
  }

  .offer__text__2 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #F16D7F;
  }

  .offer__picture__2 {
    width: 100%;
    height: 180px;
    margin-top: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-image: url("/images/offer_4.jpg");
  }

  .offer__text__block__1 {
    max-width: 160px;
  }

  .products {
    padding-top: 96px;
  }

  .products__top__text__1,
  .products__top__text__2 {
    text-align: center;
  }

  .products__top__text__1 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 36px;
    color: #222222;
  }

  .products__top__text__2 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #9F9F9F;
  }

  .products__cards {
    padding-top: 48px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    gap: 30px;
  }

  .product__card {
    height: 582px;
    background: #F8F8F8;
    position: relative;
  }

  .product__card:hover .product__add__link {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .product__card:hover img {
    -webkit-filter: brightness(0.5);
    filter: brightness(0.5);
  }

  .product__card__text {
    margin-top: 25px;
    margin-left: 16px;
    max-width: 314px;
  }

  .product__card__p1 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #000000;
  }

  .product__card__p2 {
    margin-top: 12px;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #5D5D5D;
  }

  .product__card__p3 {
    margin-top: 18px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #F16D7F;
  }

  .product__add__link {
    position: absolute;
    top: 188px;
    left: 111px;
    display: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 138px;
    height: 43px;
    text-decoration: none;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
  }

  .product__add__link:hover {
    background-color: #ffffff;
    color: #000;
  }

  .product__cart__svg {
    margin-right: 11px;
  }

  .product__add__link:hover path {
    fill: #000;
  }

  .browse__all__button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 45px;
  }

  .browse__all__product {
    text-align: center;
    text-decoration: none;
    text-transform: none;
  }

  .browse__all__product:hover {
    background: #F16D7F;
  }

  .browse__all__product span {
    width: 212px;
    height: 48px;
    border: 1px solid #FF6A6A;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 48px;
    color: #F26376;
    display: inline-block;
  }

  .browse__all__product span:hover {
    color: #Ffffff;
  }

  .sale {
    background: #222222;
    color: #fbfbfb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    gap: 20px;
    margin-top: 95px;
    min-height: 341px;
  }

  .sale_item {
    max-width: 360px;
    margin-top: 104px;
    margin-bottom: 104px;
  }

  .sale_title {
    margin-top: 19px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 19.96px;
    line-height: 24px;
  }

  .sale_text {
    margin-top: 16px;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 13.972px;
    line-height: 17px;
    text-align: center;
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
  }

  .subscribe__button:hover {
    background: #D73C3C;
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
  }

  .footer__icon:hover .footer__link__icon__background {
    stroke: #F16D7F;
    fill: #F16D7F;
  }

  .footer__icon:hover .footer__link__icon__text {
    fill: #FffffF;
  }

  @media (max-width: 1023px) {
    .offer__picture__block__1,
    .offer__picture__block__2,
    .offer__picture__block__3 {
      width: 232px;
      height: 168px;
    }
    .offer__picture__2 {
      max-width: 735px;
      height: 116px;
    }
    .content__centering {
      padding-left: calc(50% - 368px);
      padding-right: calc(50% - 368px);
    }
    .products {
      padding-top: 154px;
    }
    .products__cards {
      gap: 16px;
    }
    .promo__h1 {
      font-family: Lato;
      font-style: normal;
      font-weight: 900;
      font-size: 44px;
      line-height: 53px;
      color: #222222;
    }
    .promo__h2 {
      font-family: Lato;
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 32px;
      color: #222222;
    }
    .offer {
      padding-top: 20px;
    }
    .browse__all__button {
      margin-top: 32px;
    }
    .sale {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding-bottom: 68px;
    }
    .sale_item {
      margin: 0;
      margin-top: 48px;
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
    .promo__image {
      display: none;
    }
    .promo {
      min-height: 375px;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-bottom: 44px;
    }
    .promo__text {
      margin: 0;
      padding: 0;
    }
    .offer {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .offer__pictures__1 {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      gap: 32px;
    }
    .offer__picture__block__1,
    .offer__picture__block__2,
    .offer__picture__block__3 {
      width: 343px;
      height: 247px;
    }
    .offer__picture__2 {
      max-width: 343px;
      height: 116px;
      margin-top: 32px;
    }
    .content__centering {
      padding-left: calc(50% - 188px);
      padding-right: calc(50% - 188px);
    }
    .products {
      padding-top: 64px;
    }
    .browse__all__button {
      margin-top: 40px;
    }
    .sale {
      padding-bottom: 81px;
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
  /*# sourceMappingURL=style.css.map */
</style>
