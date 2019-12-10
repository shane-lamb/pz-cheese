import { createAsyncAction } from 'typesafe-actions';

import { Cheese } from '../../models/Cheese';

export const loadCheesesAsync = createAsyncAction(
    'LOAD_CHEESES_REQUEST',
    'LOAD_CHEESES_SUCCESS',
    'LOAD_CHEESES_FAILURE'
)<undefined, Cheese[], string>();
