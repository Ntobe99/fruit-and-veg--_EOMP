<template>
  <div class="container-fluid products">
    <div class="row">
    <div class="col">
      column
    </div>
    <div class="col">
      column
    </div>
    <div class="col">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
 
    <div class="row gap-3">
      <div
        class="card"
        style="width: 18rem;
        height:25rem;"
        v-for="product in products"
        :key="product.prodID"
  >
        <img v-bind:src="product.imgURL" class="card-img-top" style="height:15rem;"/>
        <div class="card-body">
          <h5 class="card-title">{{ product.prodName }}</h5>
          <p class="card-text">{{ product.price }}</p>
          <a href="#" class="btn btn-dark">See more</a>
        </div>
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
    store.dispatch("fetchProducts");
    const products = computed(() => store.state.products);

    return {
      products,
    };
  },
};
</script>

<style>
.card{
border-radius:0px;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.products{
  background-color: #f7f7f2;
}
.row{
  padding-top: 20px;
  padding-bottom: 10px;
}

</style>