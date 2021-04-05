import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup, login } from '../../store/session';
import { Redirect } from 'react-router-dom';
import './SignUpForm.css';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const updateName = (e) => setUserName(e.target.value);
    const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);
    const updateConfirmPassword = (e) => setConfirmPassword(e.target.value);

    
    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {username, email, password};
        if (password === confirmPassword){
            setErrors([]);
            return dispatch(signup(user))
               .catch(async (res) => {
                   const data = await res.json();
                   if (data && data.errors) setErrors(data.errors);
               });
        }
        return setErrors(['Confirm password and password must match.'])
        
    }

    const handleDemo = async (e) => {
        e.preventDefault();
        dispatch(login({credential: 'Demo-lition', password: 'password'}))
    }

    return (
        
        <div className='signupPage'>
            <div className='suformContainer'>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <form className='signUpForm' onSubmit={handleSubmit}>
                    <h2 className='formName suinput'>Sign Up</h2>
                    <input
                    className='username suinput'
                    type='text'
                    placeholder="Username"
                    required
                    value={username}
                    onChange={updateName}
                    />
                    <input
                    className='email suinput'
                    type='text'
                    placeholder="Email"
                    required
                    value={email}
                    onChange={updateEmail}
                    />
                    <input
                    className='password suinput'
                    type='password'
                    placeholder="Enter password"
                    required
                    value={password}
                    onChange={updatePassword}
                    />
                    <input
                    className='password suinput'
                    type='password'
                    placeholder="Confirm password"
                    required
                    value={confirmPassword}
                    onChange={updateConfirmPassword}
                    />
                    <button className='button suinput' type='submit' onSubmit={handleSubmit}>Sign up</button>
                    <button className='button logininput' type='submit' onClick={handleDemo}>Demo</button>
                </form>
            </div>
        </div>
    )
}

export default SignupFormPage;