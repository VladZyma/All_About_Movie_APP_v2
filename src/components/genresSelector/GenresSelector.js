import {useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';

import css from './GenresSelector.module.css';

const GenresSelector = () => {

    const navigate = useNavigate();

    const {genres} = useSelector(state => state.genresReducer);


    function selectId(event) {
        navigate(`/movies/genre/${event.target.value}`);
    }


    return (
        <div>
            <select className={css.Select} onChange={selectId}>
                <option>chose genre</option>
                {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
            </select>
        </div>
    );
}

export {GenresSelector}