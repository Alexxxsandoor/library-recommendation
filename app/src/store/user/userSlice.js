import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:{
            _id:"",
            loginName:"",
            history:["65581893c7e7e8e36b38ef41", "65581893c7e7e8e36b38ef48", "65581893c7e7e8e36b38ef46"], //!!!
            isAdmin:false,
            isLogin: false,
        },
    },
    reducers:{

        setUser(state, action){
            state.user = action.payload
        },
        logOut(state, action){
            state.user = {
                id:"",
                loginName:"",
                history:[],
                isAdmin:false,
                isLogin: false,
            }
        },
        addHistory(state, action){
            state.user.history = [...state.user.history, action.payload]
            state.user.history = state.user.history.filter((it, index) => index === state.user.history.indexOf(it = it.trim()))
        }
    }
})

export const { setUser , logOut, addHistory}  = userSlice.actions;

export default userSlice.reducer