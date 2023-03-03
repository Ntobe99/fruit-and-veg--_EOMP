<template>
    <div class="single-product">
        <div class="card" style="width: 30rem; height: 30rem;" 
        v-for="product in products"
         :key="product.prodID">
  <img :src="item.imgURL" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{product.prodName }}</h5>
    <p class="card-text">{{product.prodDescription }}</p>
    <p class="card-text">{{ product.price }}</p>
    
  </div>
</div>

    </div>
</template>

<script>

import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
 
  setup() {
    const store = useStore();
    store.dispatch("fetchProduct");
    const product= computed(() => store.state.product);
   
    return {
      product,
     
    };
  },
};
</script>

<style  scoped>
.single-product{
   padding-top: 12rem;
}

</style>