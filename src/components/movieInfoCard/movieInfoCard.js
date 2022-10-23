import {useLocation} from "react-router-dom";



import {urls} from "../../configs";

const MovieInfoCard = (props) => {

    const {state: {
        backdrop_path,
        genre_ids,
        original_language,
        original_title,
        overview,
        popularity,
        vote_count,
        vote_average,
        release_date,
        title,
    }} = useLocation();

    const {genre} = props;


    return (

        <div className={'movie_info_wrapper'}>

            <div className={'movie_info_top_row'}>

                <div className={'movie_info_img_wrap'}>
                    <img className={'movie_info_img'} src={`${urls.posters}${backdrop_path}`} alt={title}/>
                </div>

                <div className={'movie_info_description_wrap'}>
                    <ul className={'movie_info_description_list'}>
                        <li>
                            Title : {title}
                        </li>
                        <li>
                            Original title : {original_title}
                        </li>
                        <li>
                            Original language : {original_language}
                        </li>
                        <li className={'movie_info_genres'}>
                            Genres : <div className={'movie_info_genres_row'}>{genre_ids.map(id => <p key={id}>{genre[id]?.name}</p>)}</div>
                        </li>
                        <li>
                            Release date : {release_date}
                        </li>
                        <li>
                            Popularity : {popularity}
                        </li>
                        <li>
                            Vote count : {vote_count}
                        </li>
                        <li>
                            Vote average : {vote_average}
                        </li>
                    </ul>
                </div>

            </div>

            <div>
                <p>{overview}</p>
            </div>

        </div>
    );
}
export {MovieInfoCard}