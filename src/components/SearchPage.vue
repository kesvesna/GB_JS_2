<template>
    <div>
        <section class="breadcrumbs content__centering">
            <h3 class="breadcrumbs__title">
                {{ title }}
            </h3>
        </section>
        <section class="content__centering">
        <div class="form-control">
            <input
                    placeholder="Введите что искать"
                    type="text"
                    id="searchInput"
                    class="user__name__input"
                    v-model.trim="searchValue"
            />
            <button class="search__button" @click="submitHandler">Найти</button>
        </div>

            <div class="products__cards">
                <div class="product__card" v-for="good in searchResult" :key="good.id_product">
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

            <h3 v-if="searchInfo.length > 0">{{ searchInfo }}<br><br></h3>
    </section>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: "SearchPage",
        data: () => ({
            url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/',
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
                axios.post(`${this.url}/addBasket.json`, item)
                    .then(() => {console.log('Item was added to cart');})
                    .catch(error => {
                        console.error("There was an error: ", error);
                    });
            },
            async fetchGoods()
            {
                const responce = await fetch(`${this.url}/catalogData.json`);
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

    .user__name__input {
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        height: 45px;
        padding-left: 17px;
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
        color: #B1B1B1;
        border: 1px solid #A4A4A4;
        margin-bottom: 10px;
    }


    .form-control {
        max-width: 360px;
        padding-top: 50px;
        padding-bottom: 50px;
    }


    .search__button {
        width: 100%;
        height: 45px;
        padding-left: 17px;
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
        color: #F16D7F;
        border: 1px solid #A4A4A4;
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
        margin-top: 5px;
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
        background-image: url("../../public/images/footer_background_image.jpg");
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
