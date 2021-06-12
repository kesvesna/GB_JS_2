const API_URL =
    "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
        el: "#app",
        data: {
                goods: [],
                filteredGoods: [],
                cartGoods: [],
                searchLine: '',
                searchBtnClicked: false,
                isVisibleCart: false,
        },

        methods: {

                async getProducts() {
                        const responce = await fetch(`${API_URL}/catalogData.json`);
                        if (responce.ok) {
                                const catalogItems = await responce.json();
                                this.goods = catalogItems;
                        } else {
                                alert("Ошибка при соединении с сервером");
                        }
                },

                async filteredProducts() {
                        if(this.searchLine !== ''){
                                this.filteredGoods = [];
                                const responce = await fetch(`${API_URL}/catalogData.json`);
                                if (responce.ok) {
                                        let catalogItems = await responce.json();
                                        this.goods = catalogItems;
                                        catalogItems.forEach((item)=>{
                                                console.log(this.searchLine);
                                                console.log(item.product_name);
                                                if(item.product_name.toLowerCase().includes(this.searchLine.toLowerCase()))
                                                {
                                                        this.filteredGoods.push(item);
                                                }
                                        });
                                } else {
                                        alert("Ошибка при соединении с сервером");
                                }
                        } else {
                                this.filteredGoods = [];
                        }


                },

                async searchBtnClick(){
                      await this.filteredProducts()
                        this.searchBtnClicked = true;
                },

                cartBtnClick(e){

                        let id = e.target.getAttribute('data-id');
                        let price = e.target.getAttribute('data-price');
                        let name = e.target.getAttribute('data-product-name');
                        let product = {id_product: id, price: price, product_name: name};
                        this.cartGoods.push(product);
                        if(this.cartGoods.length > 0){
                                this.isVisibleCart = true;
                        } else {
                                this.isVisibleCart = false;
                        }
                },

                deleteBtnClick(e){

                        let id = e.target.getAttribute('data-id');
                        let notFinish = true;
                        let counter = 0;
                        while(notFinish){

                                if (this.cartGoods[counter].id_product === id) {
                                        this.cartGoods.splice(counter, 1);
                                        notFinish = false;
                                }
                                counter++;

                        }

                        if(this.cartGoods.length > 0){
                                this.isVisibleCart = true;
                        } else {
                                this.isVisibleCart = false;
                        }
                },

        },

        async mounted() {
                await this.getProducts()
        }
});
