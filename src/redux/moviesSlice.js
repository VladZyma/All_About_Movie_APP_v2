import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {moviesService} from "../services";


const initialState = {
    movies: [],
    foundMovies: [],
    page: null,
    searchValue: null,
    loading: false,
    error: null,
}

const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async ({page}, {rejectWithValue}) => {

        try{
            const {data} = await moviesService.getAllMovies(page);
            return data;
        } catch (e) {
            rejectWithValue(e.response.data?.status_message);
        }

    }
);

const findMovies = createAsyncThunk(
    'moviesSlice/findMovies',
    async ({value, page}, {rejectWithValue}) => {
        try {
            const {data:{results}} = await moviesService.findMoviesByName(value, page);
            return results;
        } catch (e) {
            rejectWithValue(e.response.data?.errors);
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        SetSearchValue: (state, action) => {
            state.searchValue = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.loading = false;
            })
            .addCase(getMovies.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })


            .addCase(findMovies.fulfilled, (state, action) => {
                state.foundMovies = action.payload;
                state.loading = false;
            })
            .addCase(findMovies.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(findMovies.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
});

const {reducer: moviesReducer, actions: {SetSearchValue}} = moviesSlice;
const moviesActions = {getMovies, findMovies, SetSearchValue}

export {
    moviesReducer,
    moviesActions,
}