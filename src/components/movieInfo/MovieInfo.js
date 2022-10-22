import {useSelector} from 'react-redux';

import {MovieInfoCard} from "../movieInfoCard/movieInfoCard";

const MovieInfo = () => {

    const {genres} = useSelector(state => state.genresReducer);
    const genresObj = genres.reduce((accum, genre) => {
        accum[genre.id] = genre;
        return accum;
    }, {});


    return (

        <div>
            {genresObj && <MovieInfoCard genre={genresObj}/>}
        </div>

    );
}

export {MovieInfo}