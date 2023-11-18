import axios from "axios";
import API_SERVER from "../constants";


export const FUNC_CREATE_USER = (func, user) => {
    axios.post(`${API_SERVER}/users`, user)
        .then(() => func("user created") )
        .catch((error) =>func(error.response.data)) 
}
export const FUNC_LOGIN_USER = (func, user) => {
    axios.get(`${API_SERVER}/users/${user.login}/${user.password}`)
        .then((res) => func(res.data) )
        .catch((error) =>alert(error.response.data)) 
}