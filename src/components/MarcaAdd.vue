<script setup>
import GeralApi from '@/api/geral'
import { ref, reactive, onMounted } from 'vue'
const geralApi = new GeralApi()
const defaultMarca = { id: null, nome: '', nacionalidade: '' }
const marca = reactive({ ...defaultMarca })
const marcas = ref([])

onMounted(async () => {
  marcas.value = await geralApi.buscarTodosOsDados(`/marcas/`)
  console.log(marcas.value)
})

function limpar() {
  Object.assign(marca, { ...defaultMarca })
}

async function adicionar() {
  if (marca.id) {
    await geralApi.atualizarDado(`/marcas/${marca.id}/`, marca)
  } else {
    await geralApi.adicionarDado(`/marcas/`, marca)
  }
  marcas.value = await geralApi.buscarTodosOsDados(`/marcas/`)
  limpar()
}

async function remover(id) {
  await geralApi.removerDado(`/cors/`, `${id}/`)
  marcas.value = await geralApi.buscarTodosOsDados(`/cors/`)
  limpar()
}

async function editar(marca_para_editar) {
  Object.assign(marca, marca_para_editar)
}
</script>

<template>
  <div class="marcas">
    <h1>MARCAS</h1>
    <input type="text" v-model="marca.nome" placeholder="Nome" />
    <input type="text" v-model="marca.nacionalidade" placeholder="Nacionalidade" />
    <button @click="adicionar">Salvar</button>
    <ul>
      <li v-for="marca in marcas" :key="marca.id">
        <span @click="editar(marca)">
          {{ marca.nome }}
        </span>
        <button @click="remover(marca.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<style>
.marcas {
  border: 1px solid yellow;
  width: 20vw;
  height: 50vh;
  overflow-y: hidden;
}
</style>
