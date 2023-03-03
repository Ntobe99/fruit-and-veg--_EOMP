<template>
  <div
    class="modal fade"
    id="updateProductModal"
    tabindex="-1"
    aria-labelledby="updateProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="updateProductModalLabel">
            Update Product
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="modifyProduct">
            <input
              type="number"
              placeholder="Enter product ID"
              class="form-control text-center w-75 mx-auto mb-2"
              v-model="updatedProduct.prodID"
            />

            <input
              type="text"
              placeholder="Product Name"
              class="form-control text-center w-75 mx-auto mb-2"
              v-model="updatedProduct.prodName"
            />
            <input
              type="text"
              placeholder="Product Description"
              class="form-control text-center w-75 mx-auto mb-2"
              v-model="updatedProduct.prodDescription"
            />
            <input
              type="text"
              placeholder="Category"
              class="form-control text-center w-75 mx-auto mb-2"
              v-model="updatedProduct.category"
            />
            <input
              type="number"
              placeholder="Price"
              class="form-control text-center w-75 mx-auto mb-2"
              v-model="updatedProduct.price"
            />
            <input
              type="number"
              placeholder="Product Quantity"
              class="form-control text-center w-75 mx-auto mb-2"
              v-model="updatedProduct.prodQuantity"
            />
            <div class="btn-group">
              <button type="submit" class="btn btn-success">Submit</button>
            </div>
          </form>
          <!-- <div class="update-product">
          </div> -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  setup() {
    let updatedProduct = {
      prodID: 0,
      prodName: "",
      prodDescription: "",
      category: "",
      price: "",
      prodQuantity: "",
      imgURL: "",
    };
    const store = useStore();
    const modifyProduct = () => {
      store.dispatch("editProduct", updatedProduct);
    };
    // const editproduct = computed(() => store.state.editproduct);

    return {
      updatedProduct,
      modifyProduct,
    };
  },
};
</script>

<style>
.update-product {
  padding-top: 15rem;
}

</style>
