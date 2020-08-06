/**
 * Implemented just for basic project structure
 * */
import { combineReducers } from 'redux';
import imagesReducer from 'context/images/images.reducer';

const rootReducer = combineReducers({
    imagesReducer
});

export default rootReducer;
