<template>
  
      <div id="spinner" class="spinner">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
</div>
</template>

<script>
// Show spinner
document.getElementById("spinner").style.display = "block";

// Fetch products
fetch("https://fruit-and-veg.onrender.com/products")
  .then(response => response.json())
  .then(data => {
    // Hide spinner
    document.getElementById("spinner").style.display = "none";
    // Do something with the products data
  })
  .catch(error => {
    // Hide spinner
    document.getElementById("spinner").style.display = "none";
    // Handle error
  });


    export default {
        name:'spinner'
    }
</script>

<style  scoped>
.spinner {
    margin: 100px auto;
    width: 70px;
    text-align: center;
}

.spinner > div {
    width: 18px;
    height: 18px;
    background-color: #333;
    border-radius: 100%;
    display: inline-block;
    animation: bounce 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
    animation-delay: -0.32s;
}

.spinner .bounce2 {
    animation-delay: -0.16s;
}

@keyframes bounce {
    0%, 80%, 100% {
        transform: scale(0);
    }
    40% {
        transform: scale(1.0);
    }
}


</style>