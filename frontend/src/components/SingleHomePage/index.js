import React from 'react';
import './SingleHome.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleRental } from '../../store/rentals';
import avatar from '../images/solo-project-avatar.jpeg'
import Reservation from './reservation';
import Reviews from './review';

const SingleHomePage = () => {
    const dispatch = useDispatch();
    const rental = useSelector(state => state.rentals.item);
    const params = useParams();
   
    
    useEffect(() => {
        dispatch(getSingleRental(params.id)); 
    }, [dispatch]);


    if (!rental) return null;


    return (
        
        <div>
            <div className='topInfoDiv'>
                <h1 id='rentalTitle'>{rental.title}</h1>
                {/* <span id='rentalReview'>⭐️ 4.5 {numReviews}</span> */}
                <span id='rentalLocation'>{rental.city}, {rental.state}</span>
            </div>
            <div id='photoAndMapDiv'>
                <div className='singleHousePhotoDiv'>
                        <img id='mainPhoto'src={rental.mainPhoto} alt=""/>
                    <div className='smallPhotoDiv'>
                        <img className='smallPhoto' id="photoOne"src={rental.photoOne} alt=""/>
                        <img className='smallPhoto' id="photoTwo" src={rental.photoTwo} alt=""/>
                        <img className='smallPhoto' id="photoThree" src={rental.photoThree} alt=""/>
                        <img className='smallPhoto' id="photoFour" src={rental.photoFour} alt=""/>
                    </div>
                </div>
                <div>
                <div id='mapAndReservationDiv'>
                    <iframe
                    title='googleMap'
                        id='googleMap'
                        loading="lazy"
                        allowFullScreen
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAl1IbEb1b7skTlCdT0vrrCWIwYVZZxXg4&q=${rental.city}+${rental.state}`}>
                    </iframe>
                    </div>
                    <Reservation/>
                </div>
            </div>
            <div className='infoDiv'>
                <div id='hostInfo'>
                    <h1>Home hosted by:</h1>
                    <img id='hostAvatar' src={avatar} alt=""/>
                </div>
                <p>{rental.numBeds} bedrooms, {rental.numBaths} baths</p>
                <p>{rental.description}</p>
            </div>
            <div>
                <h2>Amenities</h2>
                <p>Fenced yard</p>
                <p>Dog park nearby</p>
                <p>Dog bed available</p>
                <p>Free treats</p>
                <p>Dog door</p>
            </div>
            <div>
                <h2>Reviews</h2>
                <Reviews/>
            </div>
        </div>
    )
}

export default SingleHomePage;