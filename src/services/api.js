import Axios from "axios";

const api = userName => Axios.get(`https://api.github.com/users/${userName}/repos`);

export default api;