import React from 'react';
import './HomePage.css';
import backgroundImg from "../images/solo-project-background.jpg"
import idaho from "../images/idaho.png";
import california from "../images/california.png";
import utah from "../images/utah.png";
import washington from "../images/washington.png";
import wyoming from "../images/wyoming.png";
import newmexico from "../images/newmexico.png";
import rentalReducer, {getRentals} from '../../store/rentals'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
// import colorado from "../images/colorado.png";
// import arizona from "../images/arizona.png";
// import oregon from "../images/oregon.png";
// import texas from "../images/texas.png";


const HomePage = () => {
    const dispatch = useDispatch();
    const rentals = useSelector(state => state.rentals);
    // console.log(typeof(rentals), rentals);
    console.log(rentals.rentals[0]);
    

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
                            <img className="id" src={idaho} alt=""/>
                            <a href="/search">Idaho</a>
                        </div>
                        <div className='state' id='state2'>
                            <img className="ca" src={california} alt=""/>
                            <a href="/search">California</a>
                        </div>
                        <div className='state' id='state3'>
                            <img className="ut" src={utah} alt=""/>
                            <a href="/search">Utah</a>
                        </div>
                        <div className='state' id='state4'>
                            <img className="wa" src={washington} alt=""/>
                            <a href="/search">Washington</a>
                        </div>
                        <div className='state' id='state5'>
                            <img className="wy" src={wyoming} alt=""/>
                            <a href="/search">Wyoming</a>
                        </div>
                        <div className='state' id='state6'>
                            <img className="nm" src={newmexico} alt=""/>
                            <a href="/search">New Mexico</a>
                        </div>
                    </div>  
                <h2>Top Rentals</h2>  
                    <div className="rentalsDiv">
                        {rentals.rentals.map(rental => (
                            <div className='rentals'>
                                <img  className='rentalPhoto'key={rental.id} src={rental.mainPhoto} alt=""/>
                                <div className='rentalInfoDiv'>
                                    <h4 className='rentalTitle' key={rental.id}>{rental.title}</h4>
                                    <span className='rentalPrice'>${rental.nightPrice}/night</span>
                                </div>
                            </div>)
                        )}
                    </div>  
            </div>
        </>
    )

}

export default HomePage;