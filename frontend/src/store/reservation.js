import {csrfFetch} from './csrf';

const make = 'reservations/MAKE';
const loadReservation = 'reservations/LOAD';

const reserve = reservation => ({
    type: make,
    reservation,
});

const load = list => ({
    type: loadReservation,
    list,
})

export const getReservations = (rentalId) => async dispatch =>{
    const response = await csrfFetch(`/api/rentals/${rentalId}`);
    if (response.ok){
        const list = await response.json();
        console.log('these are the reservations',list);
        dispatch(load(list));
        return list;
    }
}

export const makeReservation = (dates) => async dispatch => {
    const { userId, rentalId, startDate, endDate } = dates;
    const response = await csrfFetch(`/api/rentals/${rentalId}`, {
        method: "POST",
        body: JSON.stringify({
            userId,
            startDate,
            endDate,
        }),
    });
    const data = await response.json();
    dispatch(reserve(data));
    return response;
};

// export const getReservations = () => async dispatch => {
//     const reponse = await
// }



const initialState = {};

const reservationReducer = (state = initialState, action) => {
    switch(action.type){
        case make: {
            return {...state, ...action.reservation}
        }
        case load: {
            const reservations = action.list;
            const allReservations = {};
            for (const reservation of reservations){
                allReservations[reservation.id] = reservation;
            }
            return allReservations;
        }
        default: 
            return state;
    }
}

export default reservationReducer;

