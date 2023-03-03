<template>
  <div class="update-product">
    <form v-for="product in products" :key="product.prodID">
            <input type="text" :placeholder="product.prodName" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.prodName">
            <input type="text" :placeholder="product.prodDescription" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.prodDescription">  
            <input type="text" :placeholder="product.category" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.category">
            <input type="number" :placeholder="product.price" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.price">
            <input type="email" :placeholder="product.prodQuantity" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.prodQuantity">
               <div class="btn-group">
                <button type="submit" class="btn btn-success" v-on:click="edit">Submit</button>
                <button type="reset" class="btn btn-danger">Reset</button>
            </div>
        </form>
    
  </div>
</template>
  

<script>
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';

export default{
    setup(){
      let updatedProduct ={
        prodName:'' ,
        prodDescription:'',
        category:'',
        price:'',
        prodQuantity:''
      };           
      const store = useStore();
    store.dispatch("updateProducts",updatedProduct);
    const updateproducts = computed(() => store.state.updateproducts);
   
    return {
      updateproducts,
      updatedProduct
     
    };
  },
};
        
    



</script>

<style>

</style>