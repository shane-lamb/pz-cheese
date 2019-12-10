import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { Cheese } from '../../models/Cheese';

export const cheesesReducer = combineReducers({
    cheeses: createReducer([] as Cheese[])
    // todo: .handleAction()
});
