import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchBar from './Search';
import logo from '../images/solo-project-logo.png';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);
    let sessionLinks;

    if (sessionUser){
        sessionLinks = (
            <>
                <div className='searchAndAvatarDiv'>
                    <SearchBar />
                    <ProfileButton className='userAvatar'user={sessionUser}/>
                </div>
            </>
        )
    } else {
        sessionLinks = (
            <>
                <div className='links'>
                    <SearchBar />
                    <NavLink to='/login' className="login">Login</NavLink>
                    <NavLink to='/signup' className="signup">Signup</NavLink>
                </div>
            </>
        );
    }

    return (
        <div className='navbar'>
            <NavLink to='/' className='home'><img className='logo'src={logo} alt=""/></NavLink>
            {isLoaded && sessionLinks}
        </div>
    )
}

export default Navigation;