<script setup>
import GeralApi from '@/api/geral'
import { ref, reactive, onMounted } from 'vue'
const geralApi = new GeralApi()
const defaultCor = { id: null, descricao: '' }
const cor = reactive({ ...defaultCor })
const cores = ref([])

onMounted(async () => {
  cores.value = await geralApi.buscarTodosOsDados(`/cors/`)
  console.log(cores.value)
})

function limpar() {
  Object.assign(cor, { ...defaultCor })
}

async function adicionar() {
  if (cor.id) {
    await geralApi.atualizarDado(`/cors/${cor.id}/`, cor)
  } else {
    await geralApi.adicionarDado(`/cors/`, cor)
  }
  cores.value = await geralApi.buscarTodosOsDados(`/cors/`)
  limpar()
}

async function remover(id) {
  await geralApi.removerDado(`/cors/`, `${id}/`)
  cores.value = await geralApi.buscarTodosOsDados(`/cors/`)
  limpar()
}

async function editar(cor_para_editar) {
  Object.assign(cor, cor_para_editar)
}
</script>

<template>
  <div class="cor">
    <h1>CORES</h1>
    <input type="text" v-model="cor.descricao" />
    <button @click="adicionar">Salvar</button>
    <ul>
      <li v-for="cor in cores" :key="cor.id">
        <span @click="editar(cor)">
          {{ cor.descricao }}
        </span>
        <button @click="remover(cor.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<style>
.cor {
  border: 1px solid purple;
  width: 20vw;
  height: 50vh;
  overflow-y: hidden;
}
</style>
