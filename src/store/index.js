import axios from "axios";
import { createStore } from "vuex";
const FGURL = "https://fruit-and-veg.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: null,
    message: null,
  },
  getters: {
    getProducts: (state) => state.products,
  },
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts: (state, products) =>
     (state.products = products),
 setMessage(state,values){
      state.message=values;
    }
  },
  actions: {
    async fetchUsers(context) {
      const res = await axios.get(`${FGURL}users`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUsers", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    fetchProducts: async (context) => {
      const response = await axios.get(`${FGURL}products`);
      const { results } = response.data;
      context.commit("setProducts", results);
    },
  },

  modules: {},
});
