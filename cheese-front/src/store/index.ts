import { RootAction, RootState } from 'typesafe-actions';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './root-reducer';
import rootEpic from './root-epic';

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, undefined>();

// rehydrate state on app start
const initialState = {};

// create store
const store = createStore(rootReducer, initialState, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;
