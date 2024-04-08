<script setup>
import  HeaderComp  from '../components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import CategoriaAdd from '@/components/CategoriaAdd.vue';
import VeiculoAdd from '@/components/VeiculoAdd.vue'
import ModeloAdd from '@/components/ModeloAdd.vue'
import MarcaAdd from '@/components/MarcaAdd.vue'
import CorAdd from '@/components/CorAdd.vue'
import AcessorioAdd from '@/components/AcessorioAdd.vue'
</script>

<template>
    <HeaderComp />
<main>
   
    <VeiculoAdd />
    <ModeloAdd />
    <CategoriaAdd />
    <MarcaAdd />
    <CorAdd />
    <AcessorioAdd />
 

</main>
<FooterComp />

</template>

<style scoped>
    main {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 5vh;
    }
</style>