<template>
<!--    <h2 v-if="cartGoods.length < 1">Корзина пустая</h2>-->
    <section class="cart content__centering">

        <div class="product__cards">
            <h2 v-if="cartGoods.length < 1">Корзина пустая</h2>
        <div class="product__card" v-for="good in cartGoods" :key="good.id_product">
        <div class="product__card__picture">
            <img :src="good.product_image" alt='product_picture'>
        </div>
        <div class="product__card__info">
            <p class="product__card__info__title">{{ good.product_name }}</p>
            <p class="card__info">Price: <span class="price">${{ good.product_price }}</span></p>
            <p class="card__info">Color: <span class="color">Red</span></p>
            <p class="card__info">Size: <span class="size">Xl</span></p>
            <p class="card__info">Quantity: <input class="quantity" type="number" :placeholder="2"></p>
        </div>
        <span class="close__button" @click="removeFromCart(good.id_product)"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                            <path
                                    d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                    fill="#575757" />
                        </svg>
                    </span>
    </div>
            <form>
                <div class="buttons__block">

                    <button class="clear__cart">CLEAR SHOPPING CART</button>
                    <button class="continue__shopping">CONTINUE SHOPPING</button>

                </div>
            </form>
        </div>

        <div class="info__block">
            <form class="shipping">
                <p>SHIPPIN ADDRESS</p>
                <input type="text" placeholder="Bangladesh">
                <input type="text" placeholder="State">
                <input type="number" placeholder="Postcode / Zip">
                <button type="submit">GET A QUOTE</button>
            </form>
            <form class="checkout">
                <p class="sub__total">SUB TOTAL <span class="sub__total__price">$900</span></p>
                <p class="grand__total">GRAND TOTAL <span class="grand__total__price">$900</span> </p>
                <hr class="divider">
                <button class="proceed__button" type="submit">PROCEED TO CHECKOUT</button>
            </form>
        </div>



    </section>
</template>

<script>

    import axios from 'axios'

export default {
  name: "AppBasket",
    data: () => ({
        url: 'http://localhost:3000',
        title: 'Корзина',
        cartGoods: []
    }),
    created () {
        this.fetchCartGoods().then(() => {}).catch(()=>{console.log('Error connection')})
    },
    methods: {
        removeFromCart(e) {

            const item = { id_product: parseInt(e)};
            axios.post(`${this.url}/removeFromCart`, item)
                .then(response =>  this.cartGoods = response.data)
                .catch(error => {
                    console.error("There was an error: ", error);
                });
        },
        minusCartGood: function (key) {
            const item = { id_product: parseInt(key)};
            axios.post(`${this.url}/minusOne`, item)
                .then(response =>  this.cartGoods = response.data)
                .catch(error => {
                    console.error("There was an error: ", error);
                });
        },
        plusCartGood: function (key) {
            const item = { id_product: parseInt(key)};
            axios.post(`${this.url}/addOne`, item)
                .then(response =>  this.cartGoods = response.data)
                .catch(error => {
                    console.error("There was an error: ", error);
                });
        },
        async fetchCartGoods()
        {
            const responce = await fetch(`${this.url}/cartData`);
            if (responce.ok) {
                this.cartGoods = await responce.json();
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
