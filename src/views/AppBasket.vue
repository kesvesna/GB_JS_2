<template>
    <AppBasket ref="addToCart"/>
</template>


<script>
  // @ is an alias to /src
  import AppBasket from "../components/AppBasket";

  export default {
    name: "Cart",
    components: {
      AppBasket
    },
  };
</script>