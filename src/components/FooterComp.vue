<template>
   <div class="footer">
        <footer>
<div class="row primary">
  <div class="column about">

    <img src="https://i.postimg.cc/15r4j7HK/Green-Illustrative-Avocado-Fruit-Label-removebg-preview.png" alt="Logo" width="150" height="150 " class="d-inline-block align-text-top">

   <p>
      If you have any questions you can get in touch with us.
  </p>

  <div class="social">
    <a href=""><i class="fa fa-facebook"></i></a>
    <a href=""><i class="fa fa-instagram"></i></a>
    <a href=""><i class="fa fa-twitter"></i></a>
    <a href=""><i class="fa fa-github"></i></a>
    <a href=""><i class="fa fa-linkedin"></i></a>
  </div>
</div>
<div class="column subscribe">
 <h3>Give us a call</h3>
 <i class="fa-solid fa-phone"> Call us at +27 62 357 2965</i>
 <i class="fa fa-envelope"> Email us at DailyFresh@gmail.com</i>
</div>
</div>
<div class="row copyright">
  <div class="footer-menu">
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-link to="/contact">Contact</router-link>
  </div>
   <p>Copyright &copy; 2023 Nontobeko & Savannah</p>
</div>

</footer>

    </div>
</template>

<script>

    export default {
        
    }
</script>

<style  scoped>
footer {
  background-color:#b5c99a;
  color: #eaecf6;
  font-size: 16px;
  padding-top:40px !important ;
}

.row {
  padding: 1em 1em;
}
.row.primary {
  display: grid;
  grid-template-columns: 2fr 1fr ;
  align-items: stretch;
}
.column {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  min-height: 15em;
}
h3 {
  width: 100%;
  text-align: left;
  color: #2c3e50;
  font-size: 1.4em;
  white-space: nowrap;
}
/*  */
.about p {
  text-align: justify;
  line-height: 2;
  margin: 0;
}


div.social {
  display: flex;
  justify-content: space-around;
  font-size: 2.4em;
  flex-direction: row;
  margin-top: 0.5em;
}
.social i {
  color: #2c3e50;
}
.social i:hover{
    color:#2a8ded
}

.copyright {
  padding: 0.3em 1em;
  background-color: rgba(69, 60, 60, 0);
}
.footer-menu{
  float: left;
  margin-top: 10px;

  
}
.subscribe{
text-align: start;
}

.footer-menu a{
  color: #2c3e50  ;
  padding: 6px;
 text-decoration: none;
}
.footer-menu a:hover{
  color: black;
}
.copyright p {
  font-size: 0.9em;
  text-align: right;
}
@media screen and (max-width: 850px) {
  .row.primary {
    grid-template-columns: 1fr;
  }

}

</style>