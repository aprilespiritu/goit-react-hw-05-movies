import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'api_key=add7393009d30185561651a8e7e3f1c4';

export const getTrending = async () => {
    const { data } = await axios.get(`trending/movie/day?${API_KEY}`);
    return data;
};

export const getMovieDetails = async id => {
    const { data } = await axios.get(`movie/${id}?${API_KEY}`);
    return data;
};

export const getMovieCast = async id => {
    const { data } = await axios.get(`movie/${id}/credits?${API_KEY}`);
    return data;
};

export const getMovieReviews = async id => {
    const { data } = await axios.get(`movie/${id}/reviews?${API_KEY}`);
    return data;
};

export const getSearchMovies = async (query, page) => {
    const { data } = await axios.get(`search/movie?${API_KEY}&query=${query}&pages=${page}`);
    return data;
};