import {axiosService} from "./axios.service";
import {urls} from "../configs";

const moviesService = {
    getAllMovies: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    getMoviesByGenre: (genreId, page = 1) => axiosService.get(`${urls.moviesByGenre}=${genreId}`, {params: {page}}),
    findMoviesByName: (value, page = 1) => axiosService.get(`${urls.search}=${value}&page=${page}`),
}

export {moviesService}