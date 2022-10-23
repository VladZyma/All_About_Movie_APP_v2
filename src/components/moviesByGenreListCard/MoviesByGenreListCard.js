import {Link} from "react-router-dom";

import {urls} from '../../configs';
import {StarsRating, GenreBadge} from "../../components";


const MoviesByGenreListCard = (props) => {

    const {movies, genres} = props;

    return (
        <div className={'movie_card_row'}>

            {Object.keys(movies).map(key =>

                <div key={key} className={'card_details'}>

                    <Link to={'/movies/info'} state={{...movies[key]}}>

                        <div className={'card_poster'}>
                            <img src={`${urls.posters}${movies[key].poster_path}`}
                                 alt={`${movies[key].original_title}`}/>
                        </div>

                        <GenreBadge movie={movies[key]} genres={genres}/>

                        <div>
                            <StarsRating rating={movies[key].vote_average}/>
                        </div>

                    </Link>

                </div>

            )}
        </div>
    );
}

export {MoviesByGenreListCard}