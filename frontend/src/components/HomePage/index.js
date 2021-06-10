import React from 'react';
import './HomePage.css';
import idaho from "../images/idaho.png";
import california from "../images/california.png";
import utah from "../images/utah.png";
import washington from "../images/washington.png";
import wyoming from "../images/wyoming.png";
import newmexico from "../images/newmexico.png";
import doghouse from "../images/Doghouse.png"
import {getRentals} from '../../store/rentals'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {getSearchResults} from '../../store/search';
import {useHistory} from 'react-router-dom';
// import colorado from "../images/colorado.png";
// import arizona from "../images/arizona.png";
// import oregon from "../images/oregon.png";
// import texas from "../images/texas.png";


const HomePage = () => {
    const dispatch = useDispatch();
    const rentals = useSelector(state => state.rentals);
    const [searchQuery, setSearchQuery] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    // const [singleRental, setSingleRental] = useState();

    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const searchParams = {startDate, endDate, searchQuery};
        console.log(searchParams);
        dispatch(getSearchResults(searchParams));
        history.push(`/search/${searchQuery}`);
    }

    // const handleSingleRental = async (e) => {
    //     setSingleRental(e.target.value)
    //     console.log('this is the single rental', singleRental);
    //     dispatch(getSingleRental(singleRental))
    // }

    
    useEffect(() => {
        dispatch(getRentals());
    }, [dispatch])

    return (
        <>
            <div className='splashImage'>
                {/* <img className='backgroundImg'src={backgroundImg} alt=""/> */}
            </div>
            <div>
                <h2>Explore a new state</h2>
                    <div className='statesDiv'>
                        <div className='state' id='state1'>
                        <a href={`/search/${searchQuery}`} value='ID' onMouseEnter={() => setSearchQuery('Idaho')} onClick={handleSubmit}><img className="id" src={idaho} alt=""/></a>
                            <a href={`/search/${searchQuery}`} onMouseEnter={() => setSearchQuery('idaho')} onClick={handleSubmit}>Idaho</a>
                        </div>
                        <div className='state' id='state2'>
                        <a href="/search" value='CA' onMouseEnter={() => setSearchQuery('california')} onClick={handleSubmit}><img className="ca" src={california} alt=""/></a>
                            <a href="/search" onMouseEnter={() => setSearchQuery('california')} onClick={handleSubmit}>California</a>
                        </div>
                        <div className='state' id='state3'>
                        <a href="/search" value='UT' onMouseEnter={() => setSearchQuery('utah')} onClick={handleSubmit}><img className="ut" src={utah} alt=""/></a>
                            <a href="/search" onMouseEnter={() => setSearchQuery('utah')} onClick={handleSubmit}>Utah</a>
                        </div>
                        <div className='state' id='state4'>
                        <a href="/search" value='WA' onMouseEnter={() => setSearchQuery('washington')} onClick={handleSubmit}><img className="wa" src={washington} alt=""/></a>
                            <a href="/search" onMouseEnter={() => setSearchQuery('washington')} onClick={handleSubmit}>Washington</a>
                        </div>
                        <div className='state' id='state5'>
                        <a href="/search" value='WY' onMouseEnter={() => setSearchQuery('wyoming')} onClick={handleSubmit}><img className="wy" src={wyoming} alt=""/></a>
                            <a href="/search" onMouseEnter={() => setSearchQuery('wyoming')} onClick={handleSubmit}>Wyoming</a>
                        </div>
                        <div className='state' id='state6'>
                        <a href="/search" value='NM' onMouseEnter={() => setSearchQuery('New')} onClick={handleSubmit}><img className="nm" src={newmexico} alt=""/></a>
                            <a href="/search" onMouseEnter={() => setSearchQuery('New')} onClick={handleSubmit}>New Mexico</a>
                        </div>
                    </div>  
                <h2>Top Rentals</h2>  
                    <div className="rentalsDiv">
                        {rentals.rentals.map(rental => (
                            <div className='rentals'>
                                <Link 
                                to={`/rentals/${rental.id}`} 
                                // value={rental.id} 
                                // onMouseEnter={(e) => {
                                //     setSingleRental(rental.id)
                                //     console.log(e.target)}} 
                                // onClick={(e) => handleSingleRental(e)}
                                >
                                    <img 
                                    className='rentalPhoto' 
                                    // value={rental.id} 
                                    // onMouseEnter={(e) => {
                                    //     setSingleRental(e.target.attributes.value.nodeValue)
                                    //     console.log(e.target.attributes.value.nodeValue)}}
                                    // onMouseEnter={(e) => setSingleRental(e.target.value)} 
                                    // onClick={(e) => handleSingleRental(e)}
                                    key={rental.id} 
                                    src={rental.mainPhoto} 
                                    alt=""/>
                                </Link>
                                <div className='rentalInfoDiv'>
                                <Link to={`/rentals/${rental.id}`} value={rental.id} >
                                    <h4 className='rentalTitle' key={rental.id}>{rental.title}</h4>
                                </Link>   
                                    <span className='rentalPrice'>${rental.nightPrice}/night</span>
                                </div>
                            </div>)
                        )}
                    </div> 
                    <img src={doghouse} alt="" style={{'display': 'none'}} /> 
            </div>
        </>
    )

}

export default HomePage;