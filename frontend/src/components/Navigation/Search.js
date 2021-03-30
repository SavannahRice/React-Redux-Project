import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

const SearchBar = () => {

    return (
        
        <form action="">
            <input type='text' className='searchBarLogged' placeholder="Search"></input>
            <button type='button' className='searchBarBtn'>Search</button>
        </form>
        
    )
    
}

export default SearchBar;