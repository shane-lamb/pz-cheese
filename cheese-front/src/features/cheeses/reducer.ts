import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { Cheese } from '../../models/Cheese';
import { loadCheesesAsync } from './actions';

export const cheesesReducer = combineReducers({
    cheeses: createReducer([] as Cheese[])
        .handleAction(loadCheesesAsync.success, (state, action) => action.payload)
});

export type CheesesState = ReturnType<typeof cheesesReducer>;
