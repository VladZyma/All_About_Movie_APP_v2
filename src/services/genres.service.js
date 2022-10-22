import {axiosService} from "./axios.service";
import {urls} from "../configs";

const genresService = {
    getGenres: () => axiosService.get(urls.genres)
}

export {genresService}