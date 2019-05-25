import { createStore, applyMiddleware } from "redux";
import { rootReducer } from '../reducers/index';
import thunk from 'redux-thunk';

export const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
};
