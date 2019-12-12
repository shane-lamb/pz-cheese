import { RootAction, RootState } from 'typesafe-actions';
import { compose, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './root-reducer';
import rootEpic from './root-epic';

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, undefined>({});

// rehydrate state on app start
const initialState = {};

// configure middlewares
const middlewares = [epicMiddleware];
// compose enhancers
export const composeEnhancers =
    (process.env.NODE_ENV === 'development' &&
        window &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// create store
const store = createStore(rootReducer, initialState, enhancer);

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;
