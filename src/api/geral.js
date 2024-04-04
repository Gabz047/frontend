import axios from "axios";

export default class GeralApi {
    async buscarTodosOsDados(e) {
        const {data} = await axios.get(e);
        return data;
    }
    async adicionarDado(url, e) {
        const {data} = await axios.post(url, e)
        return data.results;
    }
    async atualizarDado(url, e) {
        const {data} = await axios.put(url, e)
        return data.results;
    }
    async removerDado(url, e) {
        const {data} = await axios.delete(`${url}${e}`)
        return data.results;
    }
}