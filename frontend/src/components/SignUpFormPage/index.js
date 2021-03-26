import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSignUp } from '../../store/session';
import { Redirect } from 'react-router-dom';
import './SignUpForm.css';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const updateName = (e) => setName(e.target.value);
    const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);
    const updateConfirmPassword = (e) => setConfirmPassword(e.target.value);

    
    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword){
            setErrors([]);
            return dispatch(userSignUp({name, email, password}))
               .catch(async (res) => {
                   const data = await res.json();
                   if (data && data.errors) setErrors(data.errors);
               });
        }
        return setErrors(['Confirm password and password must match.'])
        
    }
    return (
        
        <div className='formContainer'>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <form className='signUpForm' onSubmit={handleSubmit}>
                <h2 className='formName input'>Sign Up</h2>
                <input
                className='username input'
                type='text'
                placeholder="Username"
                required
                value={name}
                onChange={updateName}
                />
                <input
                className='email input'
                type='text'
                placeholder="Email"
                required
                value={email}
                onChange={updateEmail}
                />
                <input
                className='password input'
                type='password'
                placeholder="Enter password"
                required
                value={password}
                onChange={updatePassword}
                />
                <input
                className='password input'
                type='password'
                placeholder="Confirm password"
                required
                value={confirmPassword}
                onChange={updateConfirmPassword}
                />
                <button className='button input' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default SignupFormPage;