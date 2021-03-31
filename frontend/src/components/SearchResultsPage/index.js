import React from 'react';
import './SearchResultsPage.css';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link, Route, useParams} from 'react-router-dom';
import {getRentals, getSingleRental} from '../../store/rentals';


const SearchResultsPage = () => {
    
    const dispatch = useDispatch();
    const rentals = useSelector(state => state.search);
    const [singleRental, setSingleRental] = useState();
    const [searchQuery, setSearchQuery] = useState();
    console.log(useParams());

    const handleSingleRental = async (e) => {
        dispatch(getSingleRental(singleRental))
    }

    return (

        <div>
            <h2>Search Results</h2>
                        <div className="rentalsDiv">
                        {rentals.search.map(rental => (
                            <div className='rentals'>
                                <Link to={`/rentals/${rental.id}`} value={rental.id} onMouseEnter={(e) => setSingleRental(e.target.value)} onClick={handleSingleRental}>
                                    <img className='rentalPhoto' key={rental.id} src={rental.mainPhoto} alt=""/>
                                </Link>
                                <div className='rentalInfoDiv'>
                                <Link to={`/rentals/${rental.id}`} value={rental.id} onMouseEnter={(e) => setSingleRental(e.target.value)} onClick={handleSingleRental}>
                                    <h4 className='rentalTitle' key={rental.id}>{rental.title}</h4>
                                </Link>   
                                    <span className='rentalPrice'>${rental.nightPrice}/night</span>
                                </div>
                            </div>)
                        )}
                        </div>
        </div>
    )

}

export default SearchResultsPage;