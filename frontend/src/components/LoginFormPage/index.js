import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../store/session';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const updateCredential = (e) => setCredential(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
         return dispatch(login({credential, password}))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    const handleDemo = async (e) => {
        e.preventDefault();
        dispatch(login({credential: 'Demo-lition', password: 'password'}))
    }
    return (
        <div className='loginPage' >
            <div className='formContainer'>
                <ul>
                        {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <form className='loginForm' >
                    <h2 className='formName input'>Login</h2>
                    <input
                    className='credential input'
                    type='text'
                    placeholder="Enter username or email"
                    required
                    value={credential}
                    onChange={updateCredential}
                    />
                    <input
                    className='password input'
                    type='password'
                    placeholder="Enter password"
                    required
                    value={password}
                    onChange={updatePassword}
                    />
                    <button className='button input' type='submit' onClick={handleSubmit}>Login</button>
                    <button className='button input' type='submit' onClick={handleDemo}>Demo</button>
                </form>
            </div>
        </div>

    )
}

export default LoginFormPage;