<template>
  <div>
    <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#addProductModal">Add Product</button>

    <div class="modal fade" id="addProductModal" tabindex="-1" role="dialog" aria-labelledby="addProductModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addProductModalLabel">Add Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="prodName">Product Name</label>
                <input type="text" class="form-control" id="prodName" v-model="productName">
              </div>
              <div class="form-group">
                <label for="prodDescription">Product Description</label>
                <textarea class="form-control" id="prodDescription" rows="3" v-model="productDescription"></textarea>
              </div>
              <div class="form-group">
                <label for="category">Category</label>
                <select class="form-control" id="category" v-model="category">
                  <option value="fruits">Fruits</option>
                  <option value="vegetables">Vegetables</option>
                </select>
              </div>
              <div class="form-group">
                <label for="price">Price</label>
                <input type="number" class="form-control" id="price" v-model="price">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addProduct">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prodName: '',
      prodDescription: '',
      category: 'fruits',
      price: null
    }
  },
  methods: {
    addProduct() {
      const product = {
        name: this.prodName,
        description: this.prodDescription,
        category: this.category,
        price: this.price
      };
      // Make an API request to add the product to the backend database
      // ...
      // Clear the form
      this.prodName = '';
      this.prodDescription = '';
      this.category = 'fruits';
      this.price = null;
      // Close the modal
      $('#addProductModal').modal('hide');
    }
  }
}
</script>
