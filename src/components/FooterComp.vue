<template>
   <div class="footer">
        <footer>
<div class="row primary">
  <div class="column about">
<p>
      If you have any questions you can get in touch with us.
  </p>

  <div class="social">
    <a href=""><i class="fa-brands fa-facebook"></i></a>
    <a href=""><i class="fa-brands fa-instagram"></i></a>
    <a href=""><i class="fa-brands fa-twitter"></i></a>
    <a href=""><i class="fa-brands fa-whatsapp"></i></a>
    
  </div>
</div>
<div class="column subscribe">
 <!-- <h3>Give us a call</h3> -->
 <i class="fa-solid fa-phone"> Call us at +27 62 357 2965</i>
 <i class="fa fa-envelope"> Email us at DailyFresh@gmail.com</i>
</div>
</div>
<div class="row copyright">
  
   <h2>Copyright &copy; 2023 Nontobeko & Savannah</h2>
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
  background-color:rgb(30,100,49);
  color: #E5E4D7;
  font-size: 16px;
  width: 100%;

}

/* .row {
  padding: 1em 1em;
} */
.row.primary {
  display: grid;
  grid-template-columns: 2fr 1fr ;
  align-items: stretch;
}
.column {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* padding: 0 2em; */
  /* min-height: 15em; */
}
h3 {
  width: 100%;
  text-align: left;
  color: #E5E4D7;
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
  gap: 1rem;
  font-size: 2.6em;
  flex-direction: row;
  
}
.social i {
  color: #E5E4D7;
}
.social i:hover{
    color:#2a8ded
}

i{
  padding-top: 5%;
}

.copyright {
  /* padding: 0.3em 1em; */
  background-color: rgba(69, 60, 60, 0);
}

.subscribe{
text-align: start;
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