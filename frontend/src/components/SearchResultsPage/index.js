import React from 'react';
import './SearchResultsPage.css';
import searchReducer, {getSearchResults} from '../../store/search';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavLink, Route, useParams} from 'react-router-dom';

const SearchResultsPage = () => {
    
    const dispatch = useDispatch();
    const rentals = useSelector(state => state.search);
    
    const [searchQuery, setSearchQuery] = useState();
    console.log(useParams());


    return (

        <div>
            <h2>Search Results</h2>
                        <div className="rentalsDiv">
                            {rentals.search.map(rental => (
                                <div className='rentals'>
                                    <a href={`/rentals/${rental.id}`}>
                                        <img  className='rentalPhoto'key={rental.id} src={rental.mainPhoto} alt=""/>
                                    </a>
                                    
                                        <div className='rentalInfoDiv'>
                                        <a href={`/rentals/${rental.id}`}>
                                            <h4 className='rentalTitle' key={rental.id}>{rental.title}</h4>
                                        </a>
                                            <span className='rentalPrice'>${rental.nightPrice}/night</span>
                                        </div>
                                </div>)
                            )}
                        </div>
        </div>
    )

}

export default SearchResultsPage;