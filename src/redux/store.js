import {configureStore, combineReducers} from '@reduxjs/toolkit';

import {moviesReducer} from "./moviesSlice";
import {genresReducer} from "./genresSlice";

const rootReducer = combineReducers({
    moviesReducer,
    genresReducer,
});

const store = configureStore({
    reducer: rootReducer
});

export {store}