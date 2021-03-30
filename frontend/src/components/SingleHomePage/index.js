import React from 'react';
import './SingleHome.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleRental } from '../../store/rentals'

const SingleHomePage = () => {
    const dispatch = useDispatch();
    const rental = useSelector(state => state.rentals);
    const params = useParams();

    // console.log('this is the rental',rental.item.title)
    

    useEffect(() => {
        dispatch(getSingleRental(params.id))
    }, [dispatch]);

    return (
        <h2>{rental.item.title}</h2>
    )
}

export default SingleHomePage;