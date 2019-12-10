import { combineReducers } from 'redux';

import { cheesesReducer } from '../features/cheeses/reducer';

const rootReducer = combineReducers({
    cheeses: cheesesReducer
});

export default rootReducer;
