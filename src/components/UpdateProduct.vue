<template>
    <div>
      <input type="text" v-model="name">
      <select v-model="category">
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
      </select>
      <button @click="editProduct">Save</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['product'],
    data() {
      return {
        name: this.product.name,
        category: this.product.category
      }
    },
    methods: {
      updateProduct() {
        const editedProduct = {
          id: this.product.id,
          name: this.name,
          category: this.category
        };
        this.store.dispatch('updateProduct', editedProduct);
      }
    }
  }
  </script>
  