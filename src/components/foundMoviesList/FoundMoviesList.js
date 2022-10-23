import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";


import {FoundMoviesListCard, Loading} from "../../components";
import {moviesActions} from "../../redux";

const FoundMoviesList = () => {

    const dispatch = useDispatch();

    const {foundMovies,searchValue, loading} = useSelector(state => state.moviesReducer);

    const [newPage, setNewPage] = useState(1);


    useEffect(() => {
        dispatch(moviesActions.findMovies({value:searchValue, page: newPage.toString()}));
    }, [dispatch, searchValue, newPage]);




    return (

        <div className={'movies_list'}>
            {loading && <Loading/>}
            <div>
                <FoundMoviesListCard movies={foundMovies}/>
            </div>
            { foundMovies?.length > 0 &&
                <div className={'buttons_row'}>
                    <button className={'prev_btn'} disabled={newPage === 1}  onClick={() => setNewPage(newPage - 1)}></button>
                    <button className={'next_btn'} disabled={newPage > 500} onClick={() => setNewPage(newPage + 1)}></button>
                </div> }

        </div>

    );
}

export {FoundMoviesList}