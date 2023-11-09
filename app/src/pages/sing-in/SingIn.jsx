import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SingIn = () => {
    const [login, setLogin] = useState('')
    const [password, setPsssword] = useState('')


    return (
        <div className='sing-in-view'>
            <div className="container">
                <div className='py-4'>
                    <Form.Label htmlFor="inputLogin">Login</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputLogin"
                        onChange={(e)=>setLogin(e.target.value)}
                    />
                    <Form.Label htmlFor="inputPassword">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword"
                        onChange={(e)=>setPsssword(e.target.value)}
                    />
                    <Button className='m-2' variant="success">Join</Button>
                    <Button className='m-2' variant="primary"><Link className="text-white" to={`/register`}>Register</Link></Button>
                </div>
            </div>
        </div>
    );
};

export default SingIn;