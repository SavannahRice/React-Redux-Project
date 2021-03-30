const LOAD = 'rentals/LOAD';
const LOADONE = 'rentals/loadONE';

const load = list => ({
    type: LOAD,
    list,
});

const loadONE = item => ({
    type: loadONE,
    item,
})



export const getRentals = () => async dispatch => {
    const response = await fetch('/api/rentals');

    if (response.ok){
        const list = await response.json();
        dispatch(load(list));
        // console.log(list);
        return list;
    }
};

export const getSingleRental = (id) => async dispatch => {
    // console.log('id');
    const response = await fetch(`/api/rentals/${id}`);

    if (response.ok){
        const item = await response.json();
        dispatch(loadONE(item));
        return item;
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
        case loadONE: {
            return {...state, item: action.item}
        }
        
        default:
            return state;
    }
}

export default rentalReducer;