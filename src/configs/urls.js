const baseURL = process.env.REACT_APP_API;

const urls = {
    movies: '/discover/movie',
    moviesByGenre: 'discover/movie?with_genres',
    posters: 'https://image.tmdb.org/t/p/w500',
    genres: '/genre/movie/list',
    search: '/search/multi?query',
}

export {
    baseURL,
    urls
}