import axios from "axios";
import API_SERVER from "./API";

export const FUNC_ADD_FAVORITE = (book) => {
    axios.post(`${API_SERVER}/favorite`, book)
        .then(() => {} )
        .catch((error) =>console.error(error)) 
}
export const FUNC_GET_FAVORITE = (func, id) => {
    axios.get(`${API_SERVER}/favorite/${id}`)
        .then((res) => func(res.data) )
        .catch((error) =>console.error(error)) 
}
export const FUNC_DELETE_FAVORITE = (body) => {
    axios.delete(`${API_SERVER}/favorite`, body)
        .then(() => {} )
        .catch((error) =>console.error(error)) 
}