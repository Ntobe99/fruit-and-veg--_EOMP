<template>
  <div class="container-fluid products">
    <div class="row">
      <div class="col">
      column
    </div>
    <div class="col">
    <FilterProducts/>
    </div>
    <div class="col">
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-dark" type="submit">Search</button>
        </form>
      </div>
    </div>
    <div class="row " v-if="spinnerDisplay">
      <SpinnerComp />
    </div>
    <div class="row gap-3">
      <div
        class="card"
        style="width: 18rem; height: 25rem"
        v-for="product in products"
        :key="product.prodID"
      >
        <img
          v-bind:src="product.imgURL"
          class="card-img-top"
          style="height: 15rem"
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.prodName }}</h5>
          <p class="card-text">R{{ product.price }}</p>
          <a href="#" class="btn btn-dark">See more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SpinnerComp from "@/components/SpinnerComp.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import FilterProducts from "./filterProducts.vue";

export default {
  components: { SpinnerComp, FilterProducts },
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    const products = computed(() => store.state.products);
    const spinnerDisplay = computed(() => store.state.showSpinner);
    return {
      products,
      spinnerDisplay,
    };
  },
};
</script>

<style>
.card {
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.products {
  background-color: #f7f7f2;
  padding-top:9rem;
}
.row {
  padding-top: 20px;
  padding-bottom: 10px;
}
@media screen and (max-width: 600px) {

  .products{
    padding-top:15rem;
  }
}

</style>
