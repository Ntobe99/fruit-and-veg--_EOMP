<template>
 <div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         <RouterLink to="/">HOME</RouterLink>
        </li> 
        <li class="nav-item">
         <router-link to="/products">OUR PRODUCTS</router-link> 
        </li>
        <li class="nav-item">
            <RouterLink to="/Admin">ADMIN</RouterLink>
        </li>
        <li class="nav-item">
          <router-link to="/contact">CONTACT US</router-link>
        </li>
      </ul>

      <ul class="nav justify-content-end">
  <li class="nav-item">
   <RouterLink to="/register">REGISTER</RouterLink>
  </li>
  <li class="nav-item">
    <RouterLink to="/login">LOGIN</RouterLink>
  </li>
  </ul>
    </div>
  </div>
</nav>

       

    </div>
</template>

<script>
// Add a class to the navbar when the user scrolls down
window.onscroll = function() {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

// Close the navbar when a link is clicked
var navbarLinks = document.querySelectorAll(".navbar-nav li a");
navbarLinks.forEach(function(navbarLink) {
  navbarLink.addEventListener("click", function() {
    document.querySelector(".navbar-collapse").classList.remove("show");
  });
});

    export default {
    name:'NavBar',   
    }
</script>

<style  scoped>
/* Navbar style */
.navbar {
  transition: background-color 0.5s ease;
  

}

.navbar.scrolled {
  background-color: #333;
}

Active link style
.navbar-nav .active > .nav-link {
  background-color:white;
}

/* Hover link style */
 .navbar-nav .nav-link:hover {
  background-color: #007bff;
  color: #fff; 
}

</style>