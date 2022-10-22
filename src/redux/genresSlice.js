import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    genres: [],
}

const getGenres = createAsyncThunk(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {

        try {
            const {data:{genres}} = await genresService.getGenres();
            return genres;
        } catch (e) {
            console.log(e);
        }

    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
});

const {reducer: genresReducer, actions: {}} = genresSlice;
const genreActions = {getGenres}

export {
    genresReducer,
    genreActions,
}