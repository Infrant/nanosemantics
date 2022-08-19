// import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
// import thunk from 'redux-thunk';
//
// const reducers = combineReducers({
//
// });
//
//
// const index = createStore(reducers, applyMiddleware(thunk));
//
//
// export default index;

import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducers = combineReducers({
})

export const store =  configureStore({
    reducer: reducers
})