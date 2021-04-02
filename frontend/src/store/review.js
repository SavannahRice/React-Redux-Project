import { csrfFetch } from './csrf';

const write = 'review/WRITE';
const get = 'review/GET';
const deleteItem = 'review/DELETE';
const modifyReview = 'review/EDIT';

const addReview = review => ({
    type: write,
    review
});

const retrieveReviews = (list) => ({
    type: get,
    list
});

const deleteSingleReview = (rentalId, reviewId) => ({
    type: deleteItem,
    rentalId,
    reviewId,
});

const editSingleReview = (review) => ({
    type: modifyReview,
    review,
})

export const writeReview = (reviewInfo) => async dispatch => {
    console.log('inside action creator')
    const { userId, rentalId, description, rating} = reviewInfo;
    const response = await csrfFetch(`/api/rentals/${rentalId}/review`, {
        method: "POST",
        body: JSON.stringify({
            userId,
            description,
            rating,
        }),
    });
    const data = await response.json();
    dispatch(addReview(data));
    
}

export const editReview = (reviewInfo) => async dispatch => {
    const {rentalId, reviewId, description, rating} = reviewInfo;
    const response = await csrfFetch(`/api/rentals/${rentalId}/review/${reviewId}`, {
        method: "PATCH",
        body: JSON.stringify({
            description, 
            rating
        }),
    });
    const data = await response.json();
    console.log(data.id);
    dispatch(editSingleReview(data));
}

export const getReviews = (rentalId) => async dispatch => {
    const response = await csrfFetch(`/api/rentals/${rentalId}/review`);

    if (response.ok){
        const list = await response.json();
        dispatch(retrieveReviews(list))
    }
}

export const deleteReview = (rentalId, reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/rentals/${rentalId}/review/${reviewId}`, {
        method: "DELETE",
    })

    const data = await response.json();
    dispatch(deleteSingleReview(rentalId, reviewId));
    return null;
}


const initialState = {};

const reviewReducer = (state = initialState, action ) => {
    switch(action.type){
        case write: {
            return {...state, ...action.review};
        }
        case get: {
            const reviews = action.list;
            const allReviews = {};
            for (const review of reviews){
                allReviews[review.id] = review
            }

            return allReviews;
        }
        case deleteItem: {
            const newState = {...state};
            delete newState[action.reviewId];
            return newState;
        }
        case modifyReview: {
            const newState = {...state};
            newState[action.review.id] = action.review;
            return newState;
        }
        default:
            return state;
    }
}

export default reviewReducer;