const config = {
    API_ROOT: {
        news: 'https://newsapi.org/v2/',
        movie: 'https://api.themoviedb.org/3'
    },
    API_COUNTRY: 'US',
    API_LANG: 'en-US',
    API_KEY: {
        news: 'dc122f11f6604b3ab277d9ec1ba15fc2',
        movie: '8d08d31e1b08de961a19e2ae293de867',
    },
    API_IMAGE: {
        small: 'https://image.tmdb.org/t/p/w500/',
        original: 'https://image.tmdb.org/t/p/original/'
    },
    API_LANGUAGES: [
        {
            id: 1,
            title: "Ўзбекча",
            code: 'uz'
        },
        {
            id: 2,
            title: "O'zbekcha",
            code: 'oz'
        },
        {
            id: 3,
            title: 'Русский',
            code: 'ru'
        }
    ]
};

export default config;