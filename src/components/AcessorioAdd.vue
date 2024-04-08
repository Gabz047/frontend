<script setup>
import GeralApi from '@/api/geral'
import { ref, reactive, onMounted } from 'vue'
const geralApi = new GeralApi()
const defaultAcessorio = { id: null, descricao: '' }
const acessorios = ref([])
const acessorio = reactive({ ...defaultAcessorio })

onMounted(async () => {
  acessorios.value = await geralApi.buscarTodosOsDados(`/acessorios/`)
  console.log(acessorios.value)
})

function limpar() {
  Object.assign(acessorio, { ...defaultAcessorio })
}

async function adicionar() {
  if (acessorio.id) {
    await geralApi.atualizarDado(`/acessorios/${acessorio.id}/`, acessorios)
  } else {
    await geralApi.adicionarDado(`/acessorios/`, acessorios)
  }
  acessorios.value = await geralApi.buscarTodosOsDados(`/acessorios/`)
  limpar()
}

async function remover(id) {
  await geralApi.removerDado(`/acessorios/`, `${id}/`)
  acessorios.value = await geralApi.buscarTodosOsDados(`/acessorios/`)
  limpar()
}

async function editar(acessorio_para_editar) {
  Object.assign(acessorio, acessorio_para_editar)
}
</script>

<template>
  <div class="acessorio">
    <h1>ACESSORIO</h1>
    <input type="text" v-model="acessorio.descricao" />
    <button @click="adicionar">Salvar</button>
    <ul>
      <li v-for="acessorio in acessorios" :key="acessorio.id">
        <span @click="editar(acessorio)">
          {{ acessorio.descricao }}
        </span>
        <button @click="remover(acessorio.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<style>
.acessorio {
  border: 1px solid blue;
  width: 20vw;
  height: 50vh;
  overflow-y: hidden;
}
</style>
