import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { Cheese } from '../../models/Cheese';
import { CheeseCalculatorState } from '../../models/CheeseCalculatorState';
import { loadCheesesAsync, selectCheeseWeight, toggleCheeseCalculator } from './actions';

export const cheesesReducer = combineReducers({
    cheeses: createReducer([] as Cheese[])
        .handleAction(loadCheesesAsync.success, (state, action) => action.payload),
    calculators: createReducer({} as {[cheeseId: number]: CheeseCalculatorState})
        .handleAction(toggleCheeseCalculator, (state, {payload}) => {
            const existing = state[payload.cheeseId] || {};
            return {
                ...state,
                [payload.cheeseId]: {
                    visible: !existing.visible,
                    selectedWeight: existing.selectedWeight
                }
            };
        })
        .handleAction(selectCheeseWeight, (state, {payload}) => {
            const existing = state[payload.cheeseId] || {};
            return {
                ...state,
                [payload.cheeseId]: {
                    ...existing,
                    selectedWeight: payload.weight
                }
            };
        })
});
