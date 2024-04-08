<script setup>
import { ref, reactive, onMounted } from 'vue'
import GeralApi from '@/api/geral'
const geralApi = new GeralApi()

const defaultCategoria = { id: null, descricao: '' }
const categorias = ref([])
const categoria = reactive({ ...defaultCategoria })

const defaultMarca = { id: null, nome: '', nacionalidade: '' }
const marca = reactive({ ...defaultMarca })
const marcas = ref([])

const defaultModelo = { id: null, nome: '', cor: '', marca: '' }
const modelo = reactive({ ...defaultModelo })
const modelos = ref([])

onMounted(async () => {
  marcas.value = await geralApi.buscarTodosOsDados(`/marcas/`)
  modelos.value = await geralApi.buscarTodosOsDados(`/modelos/`)
categorias.value = await geralApi.buscarTodosOsDados(`/categorias/`)
})

function limpar() {
  Object.assign(modelo, { ...defaultModelo })
}

async function adicionar() {
  if (modelo.id) {
    await geralApi.atualizarDado(`/modelos/${modelo.id}/`, modelo)
  } else {
    await geralApi.adicionarDado(`/modelos/`, modelo)
    console.log(modelos.value)
  }
  modelos.value = await geralApi.buscarTodosOsDados(`/veiculos/`)
  limpar()
}

async function remover(id) {
  await geralApi.removerDado(`/modelos/`, `${id}/`)
  modelos.value = await geralApi.buscarTodosOsDados(`/modelos/`)
  limpar()
}

async function editar(modelo_para_editar) {
  Object.assign(modelo, modelo_para_editar)
}
</script>

<template>
  <div class="modelos">
    <h1>MODELOS</h1>
    <input type="text" v-model="modelo.nome" placeholder="Nome" />
    <label for="categoriasfield">Categorias</label>
    <select v-model="modelo.categoria" id="categoriasfield">
      <option v-for="categoria in categorias" :key="categoria.id">{{ categoria.id }}</option>
    </select>
    <label for="marcafield">Marcas</label>
    <select v-model="modelo.marca" id="marcafield">
      <option v-for="marca in marcas" :key="marca.id">{{ marca.id }}</option>
    </select>
    <button @click="adicionar">Salvar</button>
    <ul>
      <li v-for="modelo in modelos" :key="modelo.id">
        <span @click="editar(veiculo)">
          {{ modelo.nome }}
        </span>
        <button @click="remover(veiculo.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<style>
.modelos {
  border: 1px solid rgb(100, 237, 106);
  width: 46vw;
  height: 50vh;
  overflow-y: hidden;
  padding: 2vh;
}
</style>
