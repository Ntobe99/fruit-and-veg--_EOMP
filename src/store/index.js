import axios from "axios";
import { createStore } from "vuex";
const FGURL = "https://fruit-and-veg.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null,
    addproduct:null,
    addUser:null

  },
  getters: {
    getProducts: (state) => state.products,
    getProduct:(state) =>state.products,
    getUsers: (state) => state.users,
    addproduct:(state)=>state.product,
    deleteproduct:(state)=>state.product,
    addUser:(state)=>state.product,
    updateUser:(state)=>state.product,
   
  },
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts: (state, products) => (state.products = products),
    setMessage(state, values) {
      state.message = values;
    },
    setSpinner(state, value) {
      state.showSpinner = value;
    },
    addProduct:(state,value) =>(state.value=value),
    deleteproduct:(state,value) =>(state.value=value),
   addUser:(state,value) =>(state.value=value),
   updateUser:(state,value) =>(state.value=value),
   getProduct:(state,value) =>(state.value=value),


  },
  actions: {
    async fetchUsers(context) {
      const res = await axios.get(`${FGURL}users`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result);
      } else {
        context.commit("setMessage", err);
      }
    },

    fetchProducts: async (context) => {
      const response = await axios.get(`${FGURL}products`);
      const { results } = response.data;
      if (results) {
        context.commit("setProducts", results);
        context.commit("setSpinner", false);
      } else {
        context.commit("setSpinner", true);
      }
    },
    fetchProduct: async (context) => {
      const response = await axios.get(`${FGURL}product/:id`);
      const { result } = response.data;
      if (result) {
        context.commit("setProducts", result);
        context.commit("setSpinner", false);
      } else {
        context.commit("setSpinner", true);
      }
    },

    async addProduct(context) {
      const res = await axios.post(`${FGURL}product/:id`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result);
      } else {
        context.commit("setMessage", err);
     
      }
    },
    async deleteProduct(context){
      const res = await axios.delete(`${FGURL}product/:id`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setProducts", result);
      } else {
        context.commit("setMessage", err);
      
    }},
    async deleteUser(context){
      const res = await axios.delete(`${FGURL}user/:id`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result);
      } else {
        context.commit("setMessage", err);
      
    }},
    async addUser(context){
      const res = await axios.post(`${FGURL}user/id`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result);
      } else {
        context.commit("setMessage", err);
      
    }},

    async updateUser(context){
      const res = await axios.put(`${FGURL}user/:id`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result);
      } else {
        context.commit("setMessage", err);
      
    }},
    

    
 

  },

modules: {},
});
