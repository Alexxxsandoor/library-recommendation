import axios from "axios";
import API_SERVER from "./API";

export const FUNC_CREATE_REVIEWS = (func, body) => {
    axios.post(`${API_SERVER}/reviews`, body)
        .then(() => func("Відгук доданий"))
        .catch((error) =>func(error)) 
}

export const FUNC_GET_REVIEWS_BY_BOOK = (func, id) => {
    axios.get(`${API_SERVER}/reviews/book/${id}`)
        .then((response) => func(response.data))
        .catch((error) =>console.error(error)) 
}

export const FUNC_DELETE_REVIEWS = (func, id) => {
    axios.delete(`${API_SERVER}/reviews/${id}`)
        .then(() => func("Відгук видалений"))
        .catch((error) =>func(error)) 
}