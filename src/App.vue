<template>
  <NavBar/>
  <router-view/>
  <Footer></Footer>
</template>

<script>

import NavBar from './components/NavBar.vue';
import Footer from './components/FooterComp.vue'
export default{
  name:'App',
  components:{NavBar,Footer}
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  overflow-y: hidden;
}

nav {
  padding: 50px;
}

nav a {
  font-weight: bold;
  color:#ecebe9;
  text-decoration: none;
  padding-left: 20px;
}

nav a.router-link-exact-active {
  color: #c2dfd2;
}
</style>
