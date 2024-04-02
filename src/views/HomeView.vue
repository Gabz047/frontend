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
  height: 15vh;
}

.container-header {
  width: 100%;
  height: 100%;
  background-color: #191726;
  display: flex;
  justify-content: space-between;
}


.container-logo {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.container-links {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
