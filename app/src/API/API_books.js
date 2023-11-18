import axios from "axios";
import API_SERVER from "../constants";

export const FUNC_CREATE_BOOK = (func, book) => {
    axios.post(`${API_SERVER}/books`, book)
        .then(() => func() )
        .catch((error) =>console.error(error)) 
}

export const FUNC_CREATE_MANY_BOOK = (func) => {
    axios.post(`${API_SERVER}/booksList`)
        .then((res) => func(`Завантажено ${res.data.length} книги`))
        .catch((error) =>console.error(error)) 
}

export const FUNC_GET_LIST_BOOK = (func) => {
    axios.get(`${API_SERVER}/books`)
        .then((response) => func(response.data))
        .catch((error) =>console.error(error)) 
}
export const FUNC_GET_BOOK_BY_ID = (func, id) => {
    axios.get(`${API_SERVER}/books/${id}`)
        .then((response) => func(response.data))
        .catch((error) =>console.error(error)) 
}

export const FUNC_CHANGE_BOOK = (func, book) => {
    axios.put(`${API_SERVER}/books`, book)
        .then(() => func() )
        .catch((error) =>console.error(error)) 
}

export const FUNC_DELETE_BOOK_BY_ID = (func, id) => {
    axios.delete(`${API_SERVER}/books/${id}`)
        .then(() => func() )
        .catch((error) =>console.error(error)) 
}

export const FUNC_DELETE_ALL_BOOKS= (func) => {
    axios.delete(`${API_SERVER}/books`)
        .then((res) => func(`Видалено ${res.data.deletedCount} книг`) )
        .catch((error) =>console.error(error)) 
}



