import {csrfFetch} from './csrf';
const LOAD = 'rentals/LOAD';
const LOADONE = 'rentals/loadONE';

const load = list => ({
    type: LOAD,
    list,
});

const setItem = item => ({
    type: LOADONE,
    item,
})



export const getRentals = () => async dispatch => {
    const response = await csrfFetch('/api/rentals');

    if (response.ok){
        const list = await response.json();
        dispatch(load(list));
        return list;
    }
};

export const getSingleRental = (id) => async dispatch => {
    const response = await csrfFetch(`/api/rentals/${id}`);
    if (response.ok){
        const item = await response.json();
        dispatch(setItem(item));
    }
}

const initialState = {
    rentals: [],
    item: null,
}
const rentalReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD: {
            return {...state, rentals: [...action.list]}
        }
        case LOADONE: {
            return {...state, item: action.item}
        }
        
        default:
            return state;
    }
}

export default rentalReducer;