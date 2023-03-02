<template>
    <div class="register">
    <div class="container">
<form action="" method="">
  <label for="first-name">First Name:</label>
  <input type="text" id="first-name" name="first-name" required>

  <label for="last-name">Last Name:</label>
  <input type="text" id="last-name" name="last-name" required>

  <label for="gender">Gender:</label>
  <select id="gender" name="gender" required>
    <option value="">Select gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>

  <label for="cellphone-number">Cellphone Number:</label>
  <input type="tel" id="cellphone-number" name="cellphone-number" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>

  <input type="submit" value="Register">
</form>
</div>
    </div>
</template>

<script>

    export default {
        
    }
</script>

<style  scoped>
     .register{
        background-color: #f7f7f2;
        padding-top:10rem;
        padding-bottom: 2rem;
     }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      
    
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 10px;
      font-weight: bold;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"],
    input[type="password"],
    select {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: none;
      border-radius: 5px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    }

    input[type="submit"] {
      background-color: #4CAF50;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    input[type="submit"]:hover {
      background-color: #3e8e41;
    }

    @media screen and (max-width: 600px) {
      .container {
        padding: 10px;
      }

      input[type="submit"] {
        padding: 5px 10px;
      }
    }

</style>