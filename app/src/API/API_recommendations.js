import axios from "axios";
import API_SERVER from "./API";

export const FUNC_GET_RECOMMENDATIONS = (func, id) => {
    axios.get(`${API_SERVER}/recommendations/${id}`)
        .then((res) => func(res.data))
        .catch((error) =>func(error)) 
}