<template>
    <div>
      <button type="button"
                  class="btn btn-danger animate__animated animate__heartBeat"
                  style="width: 5rem" @click="showModal = true">Delete</button>
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <h2>Are you sure you want to delete this product?</h2>
          <button @click="deleteProduct">Yes</button>
          <button @click="showModal = false">No</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        prodID: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        showModal: false
      };
    },
    methods: {
      deleteProduct() {
        fetch(`https://fruit-and-veg.onrender.com/product/${this.prodID}`, {
          method: 'DELETE'
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            this.$emit('product-deleted');
            this.showModal = false;
          })
          .catch(error => {
            console.error('There was a problem deleting the product:', error);
          });
      }
    }
  };
  </script>
  
  <style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-align: center;
  }
  </style>
  