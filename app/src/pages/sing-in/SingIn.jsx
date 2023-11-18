import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {  useState } from 'react';
import { useDispatch} from 'react-redux';
import img from '../../images/hero.png'
import { FUNC_CREATE_USER, FUNC_LOGIN_USER } from '../../API/API_users';
import { setUser } from '../../store/user/userSlice'

const SingIn = () => {
    

    const dispatch = useDispatch()
    const loginUser = (user)=> {
        const userLogin = {
            _id:user._id,
            loginName:user.login,
            isAdmin:user.admin,
            isLogin: true,
        }
        dispatch(setUser(userLogin))
    }

    const [user, setUserInputs] = useState({
        login:"",
        password:""
    })
    const handleLogin = ()=>{
        if(user.login && user.password) FUNC_LOGIN_USER(loginUser, user)
        setUserInputs({
            login:"",
            password:""
        })
    }
    const handleCreateUser = () => {
        if(user.login && user.password) FUNC_CREATE_USER(alert, user)
        setUserInputs({
            login:"",
            password:""
        })
    }
    



    return (
        <div className='sing-in-view'>
            <div className="container">
                <div className='d-flex justify-content-center py-2'>
                    <img width='200' src={img}/>
                </div>
                
                <div className='py-4'>
                
                    <Form.Label htmlFor="inputLogin">Login</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputLogin"
                        value={user.login}
                        onChange={(e)=>setUserInputs({...user, login:e.target.value})}
                    />
                    <Form.Label htmlFor="inputPassword">Password</Form.Label>
                    
                    <Form.Control
                        type="password"
                        id="inputPassword"
                        value={user.password}
                        onChange={(e)=>setUserInputs({...user,password:e.target.value})}
                    />
                    <Button className='m-2' variant="success" onClick={()=>handleLogin()}>Увійти</Button>
                    <Button className='m-2' variant="primary" onClick={()=>handleCreateUser()}>Зареєструвати</Button>
                </div>
            </div>
        </div>
    );
};

export default SingIn;