<template>
  <div class="home" >
    <div class="container text-start">
  <div class="row">
    <div class="col">
      <div class="words">
    <h1>Welcome to our online fruit and vegetable store!</h1>
			<p>At Daily Fresh, we are passionate about providing our customers with the freshest and highest quality produce. We work with local farmers and suppliers to bring you a wide variety of fruits and vegetables that are both delicious and nutritious.</p>
      <p>On our website, you'll find an extensive range of fruits and vegetables, including seasonal and exotic options. Our products are carefully selected and hand-picked to ensure that you receive the freshest produce possible.</p>
			<a class="btn btn-dark shop" href="#" role="button"><router-link to="/products">Shop now!</router-link></a>
    </div>
    </div>
    <div class="col">
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="1000">
                    <img src="https://i.postimg.cc/HnVML7nk/fotor-2023-2-28-9-1-23.jpg" class="d-block rounded mx-auto d-block w-75" alt="CapeTown">
                  </div>
                  <div class="carousel-item" data-bs-interval="1000">
                    <img src="https://i.postimg.cc/50JpjpWN/fotor-2023-2-28-9-5-16.jpg" class="d-block rounded mx-auto d-block w-75" alt="...">
                  </div>
                  <div class="carousel-item" data-bs-interval="1000">
                    <img src="https://i.postimg.cc/Gtc5RtYc/fotor-2023-3-1-10-44-1.jpg" class="d-block rounded mx-auto d-block w-75" alt="...">
                  </div>
                  <div class="carousel-item" data-bs-interval="1000">
                    <img src="https://i.postimg.cc/cLB644vv/fotor-2023-3-1-10-47-12.jpg" class="d-block rounded mx-auto d-block w-75" alt="...">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
    </div>
    
  </div>
</div>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
<style>

.home{
  background-color: #f7f7f2;
  height: 100vh;
  overflow-y: hidden;
  padding-top:12rem;
  
}
.shop a{
  color: white;
  text-decoration: none;
  
}
.words{
  color:black;
  font-size: large;

  height: 100%;
  align-items: center;
  justify-content: center;

}
#carouselExampleInterval{
  margin-top: 30px;
}
@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
  .home{
    height: 180vh;
  }
}


</style>
