<template>
    <div>
      <!-- <input type="text" v-model="search" placeholder="Search..."> -->
      <select v-model="category">
        <option value="">All categories</option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
      </select>
      <ul>
        <li v-for="product in filteredProducts" :key="product.id">{{ product.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
        category: '',
        
      }
    },
    computed: {
      filteredProducts() {
        let filtered = this.products;
  
        if (this.category) {
          filtered = filtered.filter(product => product.category === this.category);
        }
  
        if (this.search) {
          filtered = filtered.filter(product => product.name.toLowerCase().includes(this.search.toLowerCase()));
        }
  
        return filtered;
      }
    },
    mounted() {
      axios.get('https://fruit-and-veg.onrender.com/products')
        .then(response => {
          this.products = response.data;
        });
    }
  }
  </script>
  