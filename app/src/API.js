import axios from "axios";
import API_SERVER from "./constants";


export const GET_LIST_BOOK = (func) => {
    axios.get(`${API_SERVER}/books`)
        .then((response) => func(response.data))
        .catch((error) =>console.error(error))
    
}
