import React from 'react';
import './SingleHome.css';
import {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {makeReservation } from '../../store/reservation';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import parseISO from 'date-fns/parseISO';
import {NavLink} from 'react-router-dom';

const Reservation = () => {
    const dispatch = useDispatch();
    const rental = useSelector(state => state.rentals.item);
    const sessionUser = useSelector(state => state.session.user);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [errors, setErrors] = useState([]);
    const [isBooked, setIsBooked] = useState(false);
    const rentalId = rental.id;

    if (!sessionUser){
        return (
            <div id='notloggedDiv'>
                <h1><NavLink to='/login' className='notloggedDiv'>Login</NavLink> or <NavLink to='/signup' className='notloggedDiv'>Signup</NavLink> to Reserve!</h1>
            </div>
        )
    }
    
    if (isBooked){
        const splitStart = parseISO(startDate);
        const splitEnd = parseISO(endDate);
        const duration = differenceInCalendarDays(splitEnd, splitStart);
        const cost = duration * rental.nightPrice;
        return (
            <div id='rentalConfirmation'>
                <h1>Booking made!</h1>
                <p>Check-in: {startDate}</p>
                <p>Check-out: {endDate}</p>
                <p>{duration} nights </p>
                <p>Total ${cost}</p>
            </div>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = sessionUser.id
        const dates = {userId, rentalId, startDate, endDate};
        setIsBooked(true);
        return dispatch(makeReservation(dates))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    setErrors(data.errors);
                    setIsBooked(false);
                };
        });
    }

    return sessionUser && !isBooked && (
        <div className='reservationDiv'>
            <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <p id ='reservationInfo'>${rental.nightPrice}/night</p>
                <div className='mainDateDiv'>
                    <div className='dateDiv'>
                        <label>Check-in</label>
                        <input
                        id='startDate'
                        type="date"
                        required
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className='dateDiv'>
                        <label>Check-out</label>
                        <input
                        id='endDate'
                        type="date"
                        required
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
                <button type='submit' onSubmit={handleSubmit} id='bookingSubmit'>Book Now!</button>
            </form>
        </div>
    )
}

export default Reservation;