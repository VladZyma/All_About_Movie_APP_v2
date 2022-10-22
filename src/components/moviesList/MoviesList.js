import {useDispatch, useSelector} from "react-redux";
import {useEffect} from 'react';

import {moviesActions, genreActions} from "../../redux";
import {MoviesListCard, Loading} from "../../components";
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {



    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    const {movies, page, loading} = useSelector(state => state.moviesReducer);
    const {genres} = useSelector(state => state.genresReducer);



    const moviesObj = movies.reduce((accum, movie) => {
        accum[movie.id] = movie;
        return accum;
    }, {});

    const genresObj = genres.reduce((accum, genre) => {
        accum[genre.id] = genre;
        return accum;
    }, {});



    useEffect(() => {
        dispatch(moviesActions.getMovies({page: query.get('page')}));
    }, [query, dispatch]);

    useEffect(() => {
        dispatch(genreActions.getGenres());
    }, [dispatch]);


    function pageIncrement() {
        setQuery(value => ({page: +value.get('page') + 1}));
    }

    function pageDecrement() {
        setQuery(value => ({page: value.get('page') - 1}));
    }

    return (
        <div className={'movies_list'}>
            {loading && <Loading/>}
            <div>
                <MoviesListCard movies={moviesObj} genres={genresObj}/>
            </div>
            { movies.length > 0 &&
                <div className={'buttons_row'}>
                    <button className={'prev_btn'} disabled={page === 1} onClick={pageDecrement}></button>
                    <button className={'next_btn'} disabled={page > 500} onClick={pageIncrement}></button>
                </div> }
        </div>
    );
}

export {MoviesList}