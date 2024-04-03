<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <header>
        <div class="container-header">
          <div class="container-logo">
            <img src="../assets/minion.jpg" style="height: 90%; width: 90%; border-radius: inherit;">
          </div>
          <div class="container-links">
          <RouterLink to="/veiculos">Veiculos</RouterLink>
          <RouterLink to="/admin">Admin</RouterLink>
          </div>
        </div>
     </header>
</template>
<style scoped>
header {
    width: 100%;
    height: 10vh;
  }

  .container-header {
    width: 100%;
    height: 100%;
    background-color: #131216;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 10px black;
  }
  
  
  .container-logo {
    width: 8%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  
  .container-links {
    width: 24%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 2.5vh;
    margin-right:2vh;
  }
  
  .container-links a {
    text-decoration: none;
    color: white;
    padding: 1vh;
    transition: 0.5s;
  }
  
  .container-links a:hover {
    color: rgb(19, 19, 19);
    background-color: rgb(237, 237, 48);
  
    border-radius: 3px;
  }
</style>