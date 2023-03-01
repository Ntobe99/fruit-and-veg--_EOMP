import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

createApp(App).use(store).use(router).mount('#app')

// Vue.config.productionTip = false;

// new Vue({
//   store,
//   render: (h) => h(App),
// }).$mount('#app');
