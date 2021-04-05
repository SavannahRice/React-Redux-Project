import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import {getSearchResults} from '../../store/search';
import {useHistory} from 'react-router-dom';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    let history = useHistory();

    const handleSubmit = async (e) => {
        console.log('Click event on search bar')
        e.preventDefault();

        const searchParams = {startDate, endDate, searchQuery}
        dispatch(getSearchResults(searchParams))
        history.push(`/search/${searchQuery}`);
    }

    return (
        
        <form className='formDiv' onSubmit={handleSubmit}>
            <input type='text' 
            className='searchBarLogged' 
            placeholder="Where are you going?" 
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}/>
            <div className='dateDivSearch'>
                <label className='searchDateLabel'>Check-in</label>
                <input
                className='searchDateInput'
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                />
            </div>
            <div className='dateDivSearch'>
                <label className='searchDateLabel'>Check-out</label>
                <input
                className='searchDateInput'
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                />
            </div>
            <button type='submit' className='searchBarBtn' onSubmit={handleSubmit}><i class="fas fa-search"></i></button>
        </form>
        
    )
    
}

export default SearchBar;