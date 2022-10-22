import {MDBBadge} from 'mdb-react-ui-kit';



// const badgeStyle = {
//     width: '320px',
//     position: "relative",
//     left: '-20px',
// }

const GenreBadge = (props) => {

    const {movie: {genre_ids}, genres} = props;

    // {genre_ids && genre_ids.map(id => `${genres[id]?.name} `)}


    return (
        <>
            <MDBBadge  className='mx-2' color='secondary' light>
                {genre_ids && genre_ids.map(id => `${genres[id]?.name} `)}
            </MDBBadge>
        </>
    );

}

export {GenreBadge}