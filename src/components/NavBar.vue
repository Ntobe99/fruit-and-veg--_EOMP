<template>
 <div>
<nav class="navbar navbar-expand-lg fixed-top">
  <div class="container-fluid">
    <img src="https://i.postimg.cc/15r4j7HK/Green-Illustrative-Avocado-Fruit-Label-removebg-preview.png" alt="Logo" width="100" height="100 " class="d-inline-block align-text-top">
      
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         <RouterLink to="/"><i class="fa fa-house"></i>HOME</RouterLink>
        </li> 
        <li class="nav-item">
         <router-link to="/products"><i class=" fa fa-basket-shopping"></i>OUR PRODUCTS</router-link> 
        </li>
        <li class="nav-item">
            <RouterLink to="/Admin"><i class="fa fa-user-pen"></i>ADMIN</RouterLink>
        </li>
        <li class="nav-item">
          <router-link to="/contact"><i class="fa-sharp fa-solid fa-phone"></i>CONTACT US</router-link>
        </li>
        <li class="nav-item end">
   <RouterLink to="/register"><i class="fa fa-pen-to-square"></i>REGISTER</RouterLink>
  </li>
  <li class="nav-item end">
    <RouterLink to="/login"><i class="fa-sharp fa-solid fa-user"></i>LOGIN</RouterLink>
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
  position:sticky!important;
  background-color: #aabb82 !important;
  
  
}
.navbar.scrolled {
  background-color: #333;
}

/* Active link style */

/* Hover link style */
 .navbar-nav .nav-link:hover {
  background-color: #007bff;
  color: #fff; 
}
.end{
  justify-content: flex-end;
  float: right !important;
}

</style>