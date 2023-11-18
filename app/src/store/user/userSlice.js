import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:{
            _id:"",
            loginName:"",
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
                isAdmin:false,
                isLogin: false,
            }
        }
    }
})

export const { setUser , logOut}  = userSlice.actions;

export default userSlice.reducer