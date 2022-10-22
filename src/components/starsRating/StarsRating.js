import StarRatings from 'react-star-ratings';


const StarsRating = (props) => {

    const {rating} = props;

    return (

        <div>
            <StarRatings
                rating={rating}
                numberOfStars={10}
                starRatedColor={'gold'}
                starEmptyColor={'rgb(161, 157, 157, 0.3)'}
                starDimension={'20px'}
                starSpacing={'5px'}
            />
        </div>

    );
}

export {StarsRating}