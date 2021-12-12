import axios from "axios";

const axiosService = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {'X-Custom-Header': 'foobar'}
});

export default axiosService;
