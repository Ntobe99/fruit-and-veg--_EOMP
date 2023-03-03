<template>
  <!-- Button trigger modal -->
<button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Add Product
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Products!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>  
              <div class="form-group">
                <label for="prodName">Product Name</label>
                <input type="text" class="form-control" id="prodName" v-model="prodName">
              </div>
              <div class="form-group">
                <label for="prodDescription">Product Description</label>
                <textarea class="form-control" id="prodDescription" rows="3" v-model="prodDescription"></textarea>
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
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  
}
</script>
