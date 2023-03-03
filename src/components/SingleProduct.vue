<template>
    <div class="single-product">
        <div class="card" style="width: 30rem;
        height: 30rem;">
  <img :src="product.imgURL" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ product.prodName }}</h5>
    <p class="card-text">{{ product.prodDescription }}</p>
    
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

</style>