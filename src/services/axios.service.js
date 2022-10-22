import axios from 'axios';

import {baseURL} from "../configs";

const accessTokenKey = process.env.REACT_APP_API_KEY;

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {

    if (accessTokenKey) {
        config.headers.Authorization = `Bearer ${accessTokenKey}`;
    }

    return config;
});

export {axiosService}