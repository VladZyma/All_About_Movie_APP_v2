import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {urls} from "../../configs";


const FoundMoviesInfo = () => {

    const {id} = useParams();

    const {foundMovies} = useSelector(state => state.moviesReducer);
    const {genres} = useSelector(state => state.genresReducer);
    const genresObj = genres.reduce((accum, genre) => {
        accum[genre.id] = genre;
        return accum;
    }, {});


    const movie = foundMovies.find(movie => movie.id === +id);


    return (
        <div className={'movie_info_wrapper'}>

            <div className={'movie_info_top_row'}>
                <div className={'movie_info_img_wrap'}>
                    <img className={'movie_info_img'} src={`${urls.posters}${movie.backdrop_path}`} alt={movie.title}/>
                </div>

                <div className={'movie_info_description_wrap'}>
                    <ul className={'movie_info_description_list'}>
                        <li>
                            Title : {movie.title || movie.name}
                        </li>
                        <li>
                            Original title : {movie.original_title || movie.name}
                        </li>
                        <li>
                            Original language : {movie.original_language}
                        </li>
                        <li className={'movie_info_genres'}>
                            Genres : <div className={'movie_info_genres_row'}>{movie.genre_ids.map(id => <p key={id}>{genresObj[id].name}</p>)}</div>
                        </li>
                        <li>
                            Release date : {movie.release_date || movie.first_air_date}
                        </li>
                        <li>
                            Popularity : {movie.popularity}
                        </li>
                        <li>
                            Vote count : {movie.vote_count}
                        </li>
                        <li>
                            Vote average : {movie.vote_average}
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <p>{movie.overview}</p>
            </div>

        </div>
    );
}

export {FoundMoviesInfo}