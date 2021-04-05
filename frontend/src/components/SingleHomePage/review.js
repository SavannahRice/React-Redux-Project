import React from 'react';
import './SingleHome.css';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {writeReview, getReviews, deleteReview, editReview} from '../../store/review';
import {getReservations} from '../../store/reservation';

const Reviews = () => {

    const reviews = useSelector(state => state.review)
    const sessionUser = useSelector(state => state.session.user)
    const rental = useSelector(state => state.rentals.item);
    const reservations = useSelector( state => state.rentals.item.Reservations)
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState();
    const [reviewId, setReviewId] = useState();
    const [editForm, setEditForm] = useState(false);
    const [cancelEdit, setCancelEdit] = useState(false);
    const [hasStayed, setHasStayed] = useState(false);
    // const [userId, setUserId] = useState();
    
    const rentalId = rental.id;
    
    useEffect(() => {
        dispatch(getReviews(rentalId))
        dispatch(getReservations(rental.id))
        userHasStayed();
    }, [rentalId, dispatch])


    const handleReviewSubmit = async (e) => {
        const userId = sessionUser.id;
        const reviewInfo = {userId, rentalId, description, rating};
        setDescription('');
        setRating();
        dispatch(writeReview(reviewInfo));
    }

    const handleEditSubmit = async (e) => {
        console.log(reviewId)
        const reviewInfo = {reviewId, rentalId, description, rating};
        dispatch(editReview(reviewInfo));
        setEditForm(false);
        setDescription('');
        setRating();
        dispatch(getReviews(rentalId))
    }

    const userHasStayed = () => {
        console.log(reservations)
            Object.values(reservations).forEach(reservation => {
                if (reservation.userId === sessionUser.id){
                    setHasStayed(true)
                } else {
                    setHasStayed(false)
                }
            })
         console.log(hasStayed)
    }

    const handleReviewDelete = async (e) => dispatch(deleteReview(rentalId, reviewId))
    const handleReviewEdit = () => setEditForm(true);
    const handleCancelEdit = () => setCancelEdit(true);

    if (!reviews) return null;
    // userHasStayed();

    const addEditButton = (review, userId) => {
        if (review.userId === userId){
            return (
                <div>
                    <button
                    onClick={handleReviewEdit}
                    onMouseOver={(e) => setReviewId(review.id)}
                    >Edit</button>
                    <button 
                    onClick={handleReviewDelete}
                    onMouseOver={(e) => setReviewId(review.id)}
                    >Delete</button>
                </div>
            )
        } return null;
    }

    if (sessionUser && editForm && !cancelEdit){
        return (
            <div>
            <ul>
               {
                Object.values(reviews).map(review => {
                    if (review.userId === sessionUser.userId){
                        return null;
                    }
                     else return  (
                    <div>
                        <p key={review.id}>⭐ {review.rating}</p>
                        <p key={review.description}>{review.description}</p>
                    </div>)
                })
               }
            </ul>
            <form onSubmit={handleReviewSubmit}></form>
                <label >Edit Your Review!</label>
                <input type="text area"
                required
                value={description}
                placeholder='your review text'
                onChange={(e) => setDescription(e.target.value)}
                />
                <input 
                type="radio" 
                value='1'
                onChange={(e) => setRating(e.target.value)}
                checked={rating === '1'}
                />1 ⭐
                <input 
                type="radio" 
                onChange={(e) => setRating(e.target.value)}
                checked={rating === '2'}
                value='2'
                />2 ⭐️
                <input 
                type="radio" 
                value='3'
                onChange={(e) => setRating(e.target.value)}
                checked={rating === '3'}
                />3 ⭐️
                <input 
                type="radio" 
                value='4'
                onChange={(e) => setRating(e.target.value)}
                checked={rating === '4'}
                />4 ⭐️
                <input 
                type="radio" 
                value='5'
                onChange={(e) => setRating(e.target.value)}
                checked={rating === '5'}
                />5 ⭐️
                <button type='submit' onClick={handleEditSubmit}>Change Rating!</button>
                <button type='submit' onClick={handleCancelEdit}>Cancel</button>
        </div>
    )
        
    }
 
    if (sessionUser && hasStayed ) return (
        <div>
            <ul>
               {
                Object.values(reviews).map(review => {
                    return  (
                    <div>
                        <p key={review.id}>⭐️ {review.rating}</p>
                        <p key={review.description}>{review.description}</p>
                        {addEditButton(review, sessionUser.id)}
                    </div>)
                })
               }
            </ul>
            <form onSubmit={handleReviewSubmit}></form>
                <label >Add Your Review!</label>
                <input type="text area"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                <input 
                type="radio" 
                value='1'
                onChange={(e) => setRating(e.target.value)}
                checked={rating === '1'}
                />1 ⭐️
                <input 
                type="radio" 
                onChange={(e) => setRating(e.target.value)}
                checked={rating === '2'}
                value='2'
                />2 ⭐️
                <input 
                type="radio" 
                value='3'
                onChange={(e) => setRating(e.target.value)}
                checked={rating === '3'}
                />3 ⭐️
                <input 
                type="radio" 
                value='4'
                onChange={(e) => setRating(e.target.value)}
                checked={rating === '4'}
                />4 ⭐️
                <input 
                type="radio" 
                value='5'
                onChange={(e) => setRating(e.target.value)}
                checked={rating === '5'}
                />5 ⭐️
                <button type='submit' onClick={handleReviewSubmit}>Review!</button>
        </div>
    )

    return (
        <div>
            {
                Object.values(reviews).map(review => {
                    return  (
                    <div>
                        <p key={review.id}>⭐️ {review.rating}</p>
                        <p key={review.description}>{review.description}</p>
                    </div>)
                })
               }
        </div>
    )
}

export default Reviews;

 