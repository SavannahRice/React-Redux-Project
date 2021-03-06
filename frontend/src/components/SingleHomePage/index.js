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
    const key = 'AIzaSyAl1IbEb1b7skTlCdT0vrrCWIwYVZZxXg4&q'
   
    
    useEffect(() => {
        dispatch(getSingleRental(params.id)); 
    }, [dispatch]);


    if (!rental) return null;


    return (
        
        <div>
            <div className='topInfoDiv'>
                <h1 id='rentalTitle'>{rental.title}</h1>
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
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDqx09mzXJMueG2ClpeEgp9U6xYGCQYlrs&q=${rental.city}+${rental.state}`}>
                    </iframe>
                    </div>
                    <Reservation/>
                </div>
            </div>
            <div className='infoDiv' >
                <div id='hostInfo' className='headings'>
                    <h1 >Home hosted by:</h1>
                    <img id='hostAvatar' src={avatar} alt=""/>
                </div>
                <p>{rental.numBeds} bedrooms, {rental.numBaths} baths</p>
                <p>{rental.description}</p>
            </div>
            <div className='amenities'>
                <h2 className='headings'>Amenities</h2>
                <p><i class="icon fas fa-paw"></i>Fenced yard</p>
                <p><i className="icon fas fa-dog"></i>Dog park nearby</p>
                <p><i className="icon fas fa-bed"></i>Dog bed available</p>
                <p><i className="icon fas fa-bone"></i>Free treats </p>
                <p><i className="icon fas fa-door-closed"></i>Dog door</p>
            </div>
            <div className='reviews'>
                <h2 className='headings'>Reviews</h2>
                <Reviews/>
            </div>
        </div>
    )
}

export default SingleHomePage;