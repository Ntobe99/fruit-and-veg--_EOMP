 <template>
    <div class="container-fluid">

      <div class="container text-center">
  <div class="row">
    <div class="col">
     <AddProduct/>
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>

      <div class="row"><h1>Users</h1></div>
      <div class="row">
      <table class="table table-striped"  >
         <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Lastname</th>
      <th scope="col">EmailAddress</th>
      <th scope="col">Action</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   <tr v-for="user in users" :key="user.userID">
<td>{{user.firstName}}</td>
<td>{{user.lastName}}</td>
<td>{{user.emailAddress}}</td>
<td><button type="button" class="btn btn-primary animate__animated animate__heartBeat" style="width:5rem">Edit</button></td>
<td><button type="button" class="btn btn-danger animate__animated animate__heartBeat">Delete</button></td>
</tr>
  </tbody>
      </table>

    <div class="products">
      <h1>Products</h1>
      <table class="table table-striped">
        <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Image</th>
      <th scope="col">Action</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" :key="product.prodID">
      <th scope="row">{{product.prodName }}</th>
      <td>{{product.price}}</td>
      <td><img :src="product.imgURL" style="height:5rem"></td>
      <td><button type="button" class="btn btn-primary animate__animated animate__heartBeat" style="width:5rem">Edit</button></td>
<td><button type="button" class="btn btn-danger animate__animated animate__heartBeat">Delete</button></td>
    </tr>
  </tbody>
</table>
   
  
    </div>
    </div>
    </div>
  
   
 </template>
 
 <script>
import AddProduct from '@/components/AddProduct.vue';
import {computed} from '@vue/runtime-core';
import {useStore} from 'vuex';

export default{
    setup() {
        const store = useStore();
        store.dispatch("fetchUsers");
        store.dispatch("fetchProducts");
        const products = computed(() => store.state.products);
        const users = computed(() => store.state.users);
        const addProduct= computed(()=>store.state.addProduct)
        return {
            users,
            products,
            addProduct,
            
        };
    },
    components: { AddProduct }
};
 </script>
 
 <style scoped>
 .container-fluid{
  padding-top:9rem;
 }
 @media screen and (max-width: 700px) {
  .container-fluid{
    padding-top:17rem;
    padding-bottom: 1rem;
  }
 }
 
 </style>