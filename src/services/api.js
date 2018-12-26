import axios from 'axios';

import config from '../config';

export default {
    requestNews: axios.create({
        baseURL: config.API_ROOT.news,
        params: {
            'apiKey': config.API_KEY.news,
            'country': config.API_COUNTRY
        }
    }),
    requestMovie: axios.create({
        baseURL: config.API_ROOT.movie,
        params: {
            'api_key': config.API_KEY.movie,
            'language': config.API_LANG.movie
        }
    }),
};