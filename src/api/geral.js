import axios from "axios";

export default class GeralApi {
    async buscarTodosOsDados() {
        const {data} = await axios.get("/categorias/");
        return data;
    }
}