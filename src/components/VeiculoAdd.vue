<script setup>
import { ref, reactive, onMounted } from 'vue'
import GeralApi from '@/api/geral'
const geralApi = new GeralApi()

const defaultVeiculo = { id: null, ano: '', descricao: '', preco: null, cor: '', modelo: '' }
const veiculos = ref([])
const veiculo = reactive({ ...defaultVeiculo })

const defaultCategoria = { id: null, descricao: '' }
const categoria = reactive({ ...defaultCategoria })
const categorias = ref([])

const defaultCor = { id: null, descricao: '' }
const cor = reactive({ ...defaultCor })
const cores = ref([])

const defaultMarca = { id: null, nome: '', nacionalidade: '' }
const marca = reactive({ ...defaultMarca })
const marcas = ref([])

const defaultModelo = { id: null, nome: '', cor: '', marca: '' }
const modelo = reactive({ ...defaultModelo })
const modelos = ref([])

onMounted(async () => {
  veiculos.value = await geralApi.buscarTodosOsDados(`/veiculos/`)
  cores.value = await geralApi.buscarTodosOsDados(`/cores/`)
  marcas.value = await geralApi.buscarTodosOsDados(`/marcas/`)
  modelos.value = await geralApi.buscarTodosOsDados(`/modelos/`)
  categorias.value = await geralApi.buscarTodosOsDados(`/categorias/`)
})

function limpar() {
  Object.assign(veiculo, { ...defaultVeiculo })
}

async function adicionar() {
  if (veiculo.id) {
    await geralApi.atualizarDado(`/veiculos/${veiculo.id}/`, veiculo)
  } else {
    await geralApi.adicionarDado(`/veiculos/`, veiculo)
    console.log(veiculos.value)
  }
  veiculos.value = await geralApi.buscarTodosOsDados(`/veiculos/`)
  limpar()
}

async function remover(id) {
  await geralApi.removerDado(`/veiculos/`, `${id}/`)
  veiculos.value = await geralApi.buscarTodosOsDados(`/veiculos/`)
  limpar()
}

async function editar(veiculo_para_editar) {
  Object.assign(veiculo, veiculo_para_editar)
}
</script>

<template>
  <div class="veiculos">
    <h1>VEICULOS</h1>

    <input type="text" v-model="veiculo.ano" placeholder="ano" />
    <input type="text" v-model="veiculo.descricao" placeholder="descrição" />
    <input type="text" v-model="veiculo.preco" placeholder="preço" />
    <label for="corfield">Cores</label>
    <select v-model="veiculo.cor" id="corfield">
      <option v-for="cor in cores" :key="cor.id">{{ cor.id }}</option>
    </select>
    <label for="modelofield">Modelos</label>
    <select v-model="veiculo.modelo" id="modelofield">
      <option v-for="modelo in modelos" :key="modelo.id">{{ modelo.id }}</option>
    </select>
    <button @click="adicionar">Salvar</button>
    <ul>
      <li v-for="veiculo in veiculos" :key="veiculo.id">
        <span @click="editar(veiculo)">
          {{ veiculo.descricao }}
        </span>
        <button @click="remover(veiculo.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<style>
.veiculos {
  border: 1px solid rgb(138, 8, 30);
  width: 46vw;
  height: 50vh;
  overflow-y: hidden;
}
</style>
