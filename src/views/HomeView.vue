<script setup>
import { RouterLink } from 'vue-router';
import {ref, reactive, onMounted} from 'vue';
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue'



</script>

<template>
  <main>
    <HeaderComp />

    <FooterComp />
</main>
</template>

<style scoped>

main {
  background-color: white;
  width: 100%;
  height: 100%;
}

</style>
