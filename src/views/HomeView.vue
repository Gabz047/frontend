<script setup>
import { RouterLink } from 'vue-router';
import {ref, reactive, onMounted} from 'vue';
import HeaderComp from '@/components/icons/HeaderComp.vue';
import GeralApi from '@/api/geral'

const geralApi = new GeralApi()
const defaultCategoria = {id: null, descricao: ""}
const categorias = ref([])
const categoria = reactive({ ...defaultCategoria })

onMounted(async () => {
  categorias.value = await geralApi.buscarTodosOsDados()
})

function limpar() {
  Object.assign(categoria, {...defaultCategoria})
}


</script>

<template>
  <main>
    <HeaderComp />

    <ul>
      <li v-for="categoria in categorias" :key="categoria.id"> {{ categoria.descricao }} </li>
    </ul>

    <div class="footer">
      <h4>Todos os direitos reservados | Fabrica IFC</h4>
    </div>
</main>
</template>

<style scoped>

main {
  background-color: white;
  width: 100%;
  height: 100%;
}


.footer {
  height: 10vh;
  width: 100%;
  background-color: rgb(37, 37, 37);
  position: relative;
  margin-top: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px black;
  color: rgb(245, 242, 94);
}

</style>
