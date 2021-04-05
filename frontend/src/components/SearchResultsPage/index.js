import React from 'react';
import './SearchResultsPage.css';
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link,  useParams} from 'react-router-dom';
import { getSingleRental } from '../../store/rentals';
import { getSearchResults} from '../../store/search';


const SearchResultsPage = () => {
    
    const dispatch = useDispatch();
    const rentals = useSelector(state => state.search);
    const [singleRental, setSingleRental] = useState();
    const param = useParams();

    useEffect(() => {
        dispatch(getSearchResults(param))
    }, [dispatch])

    const handleSingleRental = async (e) => {
        dispatch(getSingleRental(singleRental))
    }

    if (!rentals) return null;

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