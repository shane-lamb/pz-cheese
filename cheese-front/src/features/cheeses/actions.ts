import { createAsyncAction, createAction } from 'typesafe-actions';

import { Cheese } from '../../models/Cheese';

export const loadCheesesAsync = createAsyncAction(
    'LOAD_CHEESES_REQUEST',
    'LOAD_CHEESES_SUCCESS',
    'LOAD_CHEESES_FAILURE'
)<undefined, Cheese[], string>();

export const selectCheeseWeight = createAction('SELECT_CHEESE_WEIGHT', )<{cheeseId: number, weight: number}>();

export const toggleCheeseCalculator = createAction('TOGGLE_CHEESE_CALCULATOR')<{cheeseId: number}>();
