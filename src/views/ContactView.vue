<template>
    <div class="contact">
        <div class="container">
  <div class="row">
    <div class="col-md-6">
      <h2>Contact Info</h2>
      <p><i class="fa-solid fa-house"></i>314 Imam Haron Rd.</p>
      <p>Cape Town ,South Africa</p>
      <p><i class="fa-solid fa-phone"></i>Phone:+27 62 357 2965</p>
      <p><i class="fa-solid fa-envelope"></i>Email: DailyFresh@gmail.com</p>
    </div>
    <div class="col-md-6">
      <h2>Contact Us!</h2>
      <form
      action="https://formspree.io/f/xbjeyoba"
       method="POST"
      >
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email" >Email</label>
          <input type="email" class="form-control" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" rows="5" name="message" required></textarea>
        </div>
        <button type="submit" class="btn btn-dark">Submit</button>
      </form>
    </div>
  </div>
</div>

    </div>
</template>

<script>

    export default {
        
    }
</script>

<style  scoped>
.contact{
    height: 70vh;
    background-color: #f7f7f2;
}
.btn{
    margin-top:1rem;
}
@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
  .contact{
    height: 100vh;
  }
}

</style>