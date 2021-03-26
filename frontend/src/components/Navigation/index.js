import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);
    let sessionLinks;

    if (sessionUser){
        sessionLinks = (
            <ProfileButton user={sessionUser}/>
        )
    } else {
        sessionLinks = (
            <>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
            </>
        );
    }

    return (
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    )
}

export default Navigation;