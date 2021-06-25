<template>
<div>
    <div class="new__arrivals__block content__centering">
        <div class="new__arrivals__title__text">
            <p>{{ title }}</p>
        </div>

    </div>

    <section class="middle content__centering">
        <form class="registration__form">
            <div class="user__name">
                <p class="your__name">Your name</p>
                <input class="user__name__input" type="text" value="" placeholder="First name">
                <input class="user__name__input" type="text" value="" placeholder="Last name">
            </div>
            <div class="checkboxes">
                <input class="radio" type="radio" id="Male" name="sex" value="Male" checked="checked">
                <label class="radio__label" for="Male">Male</label>
                <input class="radio" type="radio" id="Female" name="sex" value="Female">
                <label class="radio__label" for="Female">Female</label>

            </div>
            <div class="login__details">
                <p class="login__detail">Login details</p>
                <input class="email__input" type="email" value="" placeholder="Email">
                <input class="password__input" type="password" value="" placeholder="Password">
                <p class="login__paragraph">
                    Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase
                    letters
                </p>
            </div>
            <button class="join__us" type="submit">
                JOIN NOW
                <svg class="svg__join" width="6" height="10" viewBox="0 0 6 10" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M0.540004 0.208095C0.6058 0.142131 0.683965 0.0897967 0.770018 0.0540883C0.856072 0.01838 0.948325 0 1.04149 0C1.13466 0 1.22691 0.01838 1.31297 0.0540883C1.39902 0.0897967 1.47719 0.142131 1.54298 0.208095L5.79289 4.458C5.85885 4.5238 5.91119 4.60196 5.94689 4.68802C5.9826 4.77407 6.00098 4.86632 6.00098 4.95949C6.00098 5.05266 5.9826 5.14491 5.94689 5.23097C5.91119 5.31702 5.85885 5.39518 5.79289 5.46098L1.54298 9.71089C1.40998 9.84389 1.22959 9.91861 1.04149 9.91861C0.853398 9.91861 0.673007 9.84389 0.540004 9.71089C0.407001 9.57788 0.332281 9.39749 0.332281 9.2094C0.332281 9.0213 0.407001 8.84091 0.540004 8.70791L4.28984 4.95949L0.540004 1.21107C0.474041 1.14528 0.421707 1.06711 0.385998 0.981059C0.35029 0.895005 0.331909 0.802752 0.331909 0.709584C0.331909 0.616415 0.35029 0.524162 0.385998 0.438109C0.421707 0.352055 0.474041 0.273891 0.540004 0.208095Z"
                          fill="white" />
                </svg>
            </button>
        </form>
        <div class="registration__loyalty">
            <p class="registration__header__text">
                LOYALTY HAS ITS PERKS
            </p>
            <p class="registration__text">
                Get in on the loyalty program where you can earn points and unlock serious perks. Starting with
                these as
                soon as you join:
            </p>
            <p class="about__loyalty__1">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                            d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                            fill="black" />
                </svg>
                <span class="loyalty__offers__1">
                        15% off welcome offer
                    </span>
            </p>
            <p class="about__loyalty">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                            d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                            fill="black" />
                </svg>
                <span class="loyalty__offers__1">
                        Free shipping, returns and exchanges on all orders
                    </span>
            </p>
            <p class="about__loyalty">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                            d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                            fill="black" />
                </svg>
                <span class="loyalty__offers__1">
                        $10 off a purchase on your birthday
                    </span>
            </p>
            <p class="about__loyalty">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                            d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                            fill="black" />
                </svg>
                <span class="loyalty__offers__1">
                        Early access to products
                    </span>
            </p>
            <p class="about__loyalty">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                            d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                            fill="black" />
                </svg>
                <span class="loyalty__offers__1">
                        Exclusive offers & rewards
                    </span>
            </p>
        </div>
    </section>
</div>
</template>

<script>
    export default {
        name: "RegistrationPage",
        data: () => ({
            title: 'REGISTRATION'
        }),
        methods: {

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

    .new__arrivals__block {
        background-color: #F8F3F4;
        height: 148px;
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

    .new__arrivals__title__text {
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
        color: #F16D7F;
    }

    .middle {
        margin-top: 64px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .your__name {
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: #222222;
    }

    .user__name {
        max-width: 360px;
        min-height: 149px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        gap: 20px;
    }

    .user__name__input {
        max-width: 360px;
        height: 45px;
        padding-left: 17px;
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
        color: #B1B1B1;
        border: 1px solid #A4A4A4;
    }

    .checkboxes {
        margin-top: 31px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .radio {
        border: 1px solid #A4A4A4;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .radio__label {
        margin-left: 10px;
        margin-right: 20px;
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 11px;
        line-height: 13px;
        color: #000000;
    }

    .login__details {
        margin-top: 33px;
        max-width: 360px;
        min-height: 149px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        gap: 20px;
    }

    .login__detail {
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: #222222;
    }

    .email__input,
    .password__input {
        max-width: 360px;
        height: 45px;
        padding-left: 17px;
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
        color: #B1B1B1;
        border: 1px solid #A4A4A4;
    }

    .login__paragraph {
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
        color: #B1B1B1;
    }

    .join__us {
        margin-top: 39px;
        margin-bottom: 96px;
        border: none;
        width: 167px;
        height: 50px;
        display: inline-block;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-decoration: none;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
        background: #F16D7F;
        padding-left: 29px;
    }

    .svg__join {
        margin-left: 20px;
    }

    .registration__loyalty {
        margin-left: 128px;
        max-width: 652px;
    }

    .registration__header__text {
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
        color: #000000;
    }

    .registration__text {
        margin-top: 22px;
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
        color: #000000;
    }

    .about__loyalty__1 {
        margin-top: 21px;
    }

    .loyalty__offers__1 {
        margin-left: 23px;
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
        color: #000000;
    }

    .about__loyalty {
        margin-top: 16px;
    }

    .bottom__content {
        margin-top: 95px;
        min-height: 341px;
        background: #222224;
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

    .bottom__content__block {
        max-width: 360px;
        min-height: 134px;
        text-align: center;
    }

    .bottom__content__text__1 {
        margin-top: 25px;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        color: #FBFBFB;
    }

    .bottom__content__text__2 {
        max-width: 300px;
        margin-top: 16px;
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #FBFBFB;
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

    @media (max-width: 1140px) {
        .content__centering {
            padding-left: calc(50% - 368px);
            padding-right: calc(50% - 368px);
        }
        .registration__loyalty {
            max-width: 354px;
            margin-left: 22px;
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
        .content__centering {
            padding-left: calc(50% - 188px);
            padding-right: calc(50% - 188px);
        }
        .new__arrivals__block {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
        }
        .middle {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
        }
        .join__us {
            margin-bottom: 40px;
        }
        .registration__loyalty {
            padding-bottom: 96px;
            margin-left: 0px;
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
    /*# sourceMappingURL=registration.css.map */
</style>
