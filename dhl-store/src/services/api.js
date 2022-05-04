import axios from "axios";

const api = axios.create({
    baseURL: "https://sheltered-meadow-49957.herokuapp.com/api"
});

export default api;