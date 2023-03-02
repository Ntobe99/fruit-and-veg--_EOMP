<template>
    <div class="single-product">
        <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ product.prodName }}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
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