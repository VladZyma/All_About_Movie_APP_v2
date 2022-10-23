import {useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'

import {urls} from "../../configs";
import {GenreBadge} from "../genreBadge/GenreBadge";
import {StarsRating} from "../starsRating/StarsRating";



const FoundMoviesListCard = (props) => {

    const navigate = useNavigate();

    const {movies} = props;
    const {genres} = useSelector(state => state.genresReducer);
    const genresObj = genres.reduce((accum, genre) => {
        accum[genre.id] = genre;
        return accum;
    }, {});

    return (
        <div className={'movie_card_row'}>
            {movies?.map(movie =>

                <div key={movie.id} className={'card_details'} onClick={() => navigate(`/movies/found/info/${movie.id}`,{id: movie.id})}>
                    <div className={'card_poster'}>
                        <img src={`${urls.posters}${movie.poster_path}`}/>
                    </div>

                    <GenreBadge movie={movie} genres={genresObj}/>


                    <div>
                        <StarsRating rating={movie.vote_average}/>
                    </div>

                </div>
            )}
        </div>
    );
}

export {FoundMoviesListCard}