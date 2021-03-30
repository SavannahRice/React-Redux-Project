const LOAD = 'rentals/LOAD';

const load = list => ({
    type: LOAD,
    list,
});

export const getRentals = () => async dispatch => {
    const response = await fetch('/api/rentals');

    if (response.ok){
        const list = await response.json();
        dispatch(load(list));
        // console.log(list);
        return list;
    }

};

const initialState = {
    rentals: []
}
const rentalReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD: {
            return {...state, rentals: [...action.list]}
        }
        default:
            return state;
    }
}

export default rentalReducer;