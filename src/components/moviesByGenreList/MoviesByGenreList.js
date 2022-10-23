import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from 'react';


import {moviesActions} from "../../redux";
import {MoviesByGenreListCard, Loading} from "../../components";

const MoviesByGenreList = () => {

    const dispatch = useDispatch();

    const {id: genreId} = useParams();

    const {movies, loading, page} = useSelector(state => state.moviesReducer);
    const {genres} = useSelector(state => state.genresReducer);

    const moviesObj = movies.reduce((accum, movie) => {
        accum[movie.id] = movie;
        return accum;
    }, {});

    const genresObj = genres.reduce((accum, genre) => {
        accum[genre.id] = genre;
        return accum;
    }, {});

    const [query, setQuery] = useSearchParams({page: '1'});



    useEffect(() => {
        dispatch(moviesActions.getMoviesByGenre({genreId, page: query.get('page')}));
    }, [genreId, dispatch, query]);


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
                <MoviesByGenreListCard movies={moviesObj} genres={genresObj}/>
            </div>
            { movies.length > 0 &&
                <div className={'buttons_row'}>
                    <button className={'prev_btn'} disabled={page === 1} onClick={pageDecrement}></button>
                    <button className={'next_btn'} disabled={page > 500} onClick={pageIncrement}></button>
                </div> }
        </div>
    );
}

export {MoviesByGenreList}