import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {getSearchResults} from '../../store/search';
import {useHistory} from 'react-router-dom';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const param = {searchQuery}
        dispatch(getSearchResults(searchQuery))
        history.push('/search');
    }

    return (
        
        <form action="" method="get">
            <input type='text' 
            className='searchBarLogged' 
            placeholder="Search" 
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}/>
            <button type='submit' className='searchBarBtn' onClick={handleSubmit}>Search</button>
        </form>
        
    )
    
}

export default SearchBar;