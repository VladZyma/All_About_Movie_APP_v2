import {MDBBadge} from 'mdb-react-ui-kit';

import css from './GenreBadge.module.css';


const GenreBadge = (props) => {

    const {movie: {genre_ids}, genres} = props;

    return (
        <div className={css.Genre_badge}>
            <MDBBadge className='mx-2 text-secondary' color='secondary' light>
                {genre_ids && genre_ids.map(id => `${genres[id]?.name} `)}
            </MDBBadge>
        </div>
    );

}

export {GenreBadge}