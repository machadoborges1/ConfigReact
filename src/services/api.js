import axios  from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333"
});       //criando uma instacia do axos 

export default api;

