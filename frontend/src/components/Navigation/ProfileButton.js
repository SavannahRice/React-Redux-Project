import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import avatar from '../images/solo-project-avatar.jpeg'

function ProfileButton({user}){
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    }

    useEffect(() => {
        if (!showMenu) return;
        
        const closeMenu = () => {
            setShowMenu(false)
        }

        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.userLogout);
    };

    return (
        <>
            <div className='loggedUser'>
                <button className='avatarButton' onClick={openMenu}>
                    {/* <i class="fas fa-dog"/> */}
                    <img className='avatarImg' src={avatar} alt=""/>
                </button>
                {showMenu && (
                    <div className='menuDropdown'>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <button onClick={logout}>Log Out</button>
                    </div>
                    // <ul className="profile-dropdown">
                    //     <li>{user.username}</li>
                    //     <li>{user.email}</li>
                  //     <li>
                    //         <button onClick={logout}>Log Out</button>
                    //     </li>
                    // </ul>
                )}
            </div>
        </>
    )
}
export default ProfileButton;
