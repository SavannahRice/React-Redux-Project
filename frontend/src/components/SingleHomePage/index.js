import React from 'react';
import './SingleHome.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleRental } from '../../store/rentals';

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
            <h2>{rental.title}</h2>
            <div className='singleHousePhotoDiv'>
                    <img id='mainPhoto'src={rental.mainPhoto} alt=""/>
                <div className='smallPhotoDiv'>
                    <img className='smallPhoto' src={rental.photoOne} alt=""/>
                    <img className='smallPhoto' src={rental.photoTwo} alt=""/>
                    <img className='smallPhoto' src={rental.photoThree} alt=""/>
                    <img className='smallPhoto' src={rental.photoFour} alt=""/>
                </div>
            <div className='infoDiv'>
                <span>{rental.description}</span>
                <span>{rental.city}, {rental.state}</span>
            </div>
            </div>
        </div>
    )
}

export default SingleHomePage;