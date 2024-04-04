<script setup>
import GeralApi from '@/api/geral'
import {ref, reactive, onMounted} from 'vue';
const geralApi = new GeralApi()
const defaultCategoria = {id: null, descricao: ""}
const categorias = ref([])
const categoria = reactive({ ...defaultCategoria })

onMounted(async () => {
  categorias.value = await geralApi.buscarTodosOsDados(
    `/categorias/`
  )
  console.log(categorias.value)
});

function limpar() {
  Object.assign(categoria, {...defaultCategoria});
}

async function adicionar() {
  if (categoria.id){
    await geralApi.atualizarDado(`/categorias/${categoria.id}/`, categoria)
  } else {
    await geralApi.adicionarDado(`/categorias/`, categoria)
  }
  categorias.value = await geralApi.buscarTodosOsDados(`/categorias/`)
  limpar();
} 

async function remover(id) {
  await geralApi.removerDado(`/categorias/`, `${id}/`)
  categorias.value = await geralApi.buscarTodosOsDados(`/categorias/`)
  limpar()
}

async function editar(categoria_para_editar) {
  Object.assign(categoria, categoria_para_editar)
}
</script>

<template>
     <input type="text" v-model="categoria.descricao">
    <button @click="adicionar">Salvar</button>
    <ul>
      <li v-for="categoria in categorias" :key="categoria.id"> 
        <span @click="editar(categoria)">
        {{ categoria.descricao }}
      </span>
      <button @click="remover(categoria.id)">X</button> 
      </li>
    </ul>
</template>

<style></style>