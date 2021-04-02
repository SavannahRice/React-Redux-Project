import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rentalReducer from './rentals';
import sessionReducer from './session';
import searchReducer from './search';
import reservationReducer from './reservation';
import reviewReducer from './review';


const rootReducer = combineReducers({
  session: sessionReducer,
  rentals: rentalReducer,
  search: searchReducer,
  reservation: reservationReducer,
  review: reviewReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

// configureStore.subscribe(() => saveToLocalStorage(configureStore.getState()))
  
  export default configureStore;