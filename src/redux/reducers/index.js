
import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer';

const rootReducer = combineReducers({
    quote: quoteReducer,

});

export default rootReducer;
